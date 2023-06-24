<template>

  
</template>

<script>

export default {
    name: "redirect",
         async mounted() {
       let route = useRoute()
        await useAuth().Authorize(route.query.code).then(() => {
        this.$router.push("/")
    })
       
        
    }
    
}
</script>

<style scoped>

</style>