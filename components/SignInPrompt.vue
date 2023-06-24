<template>
    <div v-if="!loggedIn" class="Prompt">
      <a href="https://discord.com/api/oauth2/authorize?client_id=840783986564923412&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fredirect&response_type=code&scope=identify%20email" class="button discord"><img alt="discord icon" style="color: white;" src="@/assets/discord.svg" class="discord-icon">Login with Discord</a>  
    </div>


</template>

<script setup>
const route = useRoute()
const loggedIn = useAuth().IsAuthorized()
</script>

<script>
export default {
    name: "SigninPrompt",
    methods: {
      
    }
}
</script>

<style  scoped>

.Prompt {
    height: 100vh;
    width: 100%;
    background-color: #92929241;
    z-index: 99999999999999999;
    left: 0px;
    top: 0px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.discord {
    background: #7289da;
      border: 1px solid #7289da;
      width: 200px;
}

img.discord-icon {
    width: 25px;
   margin-right: 5px;
    color: #ffffff;
   
    -webkit-user-drag: none;
}
</style>