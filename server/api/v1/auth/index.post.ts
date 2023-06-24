const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
    //get oauth access code from request body
    const body = await readBody(event)
    let code = body.code

        let oath: oathReturn | undefined;
        let userInfo: userReturn | undefined;

        //access discord oauth2 and get nececry data
        await $fetch('https://discord.com/api/v10/oauth2/token', {
            method: 'POST',
            body: new URLSearchParams({
                client_id: config.client_id,
                client_secret: config.client_secret,
                grant_type: 'authorization_code',
                redirect_uri: "http://localhost:3000/auth/redirect",
                code: `${code}`,
                scope: "identify",
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(discordRes => oath = discordRes as oathReturn)

        if(oath == undefined) return;

        //fetch user info from OAuth2 token
        await $fetch('https://discord.com/api/v10/users/@me', {
            headers: {
                authorization: `${oath.token_type} ${oath.access_token}`,
            },
        }).then(async userRes => userInfo = userRes as userReturn );

        if(userInfo == undefined) return;

        let data = {
            user: {
                id:userInfo.id,
                username: userInfo.username,
                avatar: userInfo.avatar
            },
        }
        if(!userInfo){
            return;
        }
    return data
})