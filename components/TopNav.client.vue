<template>
  <nav>
    <div class="navs">
     
      <NuxtLink class="link bolder" href="kaseknife95.com">Home</NuxtLink>
  
    </div>
    <div class="buttons">  
      
    </div>
  </nav>
</template>

<script setup>
const route = useRoute()

</script>

<script>

export default {
  name: "TopNav",
  computed: {
   
  }
   
 
  
};
</script>


<style scoped>


nav,
.navs,
nav a,
nav .brand {
  display: flex;
  align-items: center;
  justify-content: center;
  
  flex-direction: row;
}
nav {
    background-color: #0c0e0c;
  gap: 3%;
  z-index: 10000;
  overflow: hidden;
  position: fixed;
  /* Set the navboi to fixed position */
  top: 0;
  left: 0;
  /* Position the navboi at the top of the page */
  width: 100%;
  /* Full width */
  height: 50px;
  padding: 3.6px;
  padding-left: 10px;
  padding-right: 30px;
  text-align: center;
  box-shadow: -10px 5px 10px;
}
nav .brand {
  gap: 25.5px;
}

nav .brand {
  height: 95%;
  max-height: 95%;
  align-self: center;
  margin-left: 0.5%;
  gap: 4.6px;
}
nav .brand img {
  border-radius: 100%;
  height: 90%;
  max-height: 90%;
}

/* Links inside the navboi */


.buttons{
    float: right;
    margin-left: auto;
}
nav .title {
font-size:1.8rem;
    color: rgb(212, 0, 255);
    display: flex;
    filter: drop-shadow(3px 20px 10px rgba(0, 0, 0, 0.1));
    font-weight: bold;
    text-decoration: none;
}

.navs {
  padding-left: 5px;
      gap: 28.5px;
}
.navs a {
    
  font-weight: bold;
  font-size: 20px;
  color: #f2f2f2;
  text-align: center;
  z-index: 5000;
  text-decoration: none;
}
nav a.link:hover {
  color: var(--g1);
  transition: color .3s,background .3s,background-color .3s;
  
}

.bold{
  font-weight: bold;
}

.bolder {
  font-weight: bolder;
}
nav a.button.alt{
  transition: background-position 0.56s ease-in-out;
}
nav a.button {

  z-index: 50;
  height: 10px;
  width: 75px;
  color: #f2f2f2;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
  padding: 14px 16px;
  text-decoration: none;
  transition: all 0.2s ease-out;
  margin-right: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  float: right
}

.button.manage {
  margin-left: 1px;
  background: rgb(212, 0, 255);
}

.button.manage:hover {
  background-color: rgb(164, 0, 197);
}

.button.invite {
  background: hsl(120, 86%, 42%);
}

.button.invite:hover {
  background-color: hsl(120, 61%, 51%);
}
</style>
