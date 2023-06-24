class AuthService {
    async Authorize(code: String) {
       

        let data = await $fetch("/api/v1/auth", { method: 'post', body: { code } })

        return data

    }
}
export default new AuthService();