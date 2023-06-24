<template>
    
    <tile-grid gridid="1"></tile-grid >
    <top-nav-client></top-nav-client>
    <sign-in-prompt></sign-in-prompt>

    <place-canvas></place-canvas>

</template>

<script>
import { defineComponent } from 'vue'
import TopNavClient from '~/components/TopNav.client.vue'


export default defineComponent({
  name: "HomePage",
  components:{TopNavClient},
  setup() {
 
  },
  mounted(){
 
  }
})
</script>

<style>
  :root {
    --g1: rgb(98, 0, 234);
    --g2: rgb(74, 154, 207);
    margin: 0;
      padding: 0;
  }
  @keyframes background-pan {
    from {
      background-position: 0% center;
    }
    
    to {
      background-position: -200% center;
    }
  }
  body {
  animation: background-pan 5s linear infinite;
  background: linear-gradient(
    to right,
    var(--g1),
    var(--g2),
    var(--g1)
  );
  background-size: 200%;

  overflow-x: hidden;

}

.button {
    
      display: flex;
      height: 10px;
      align-items: center;
      width: 75px;
      color: #f2f2f2;
      text-align: center;
      font-weight: bold;
      border-radius: 9px;
      padding: 16px 20px;
      text-decoration: none;
      transition: all 0.2s ease-out;
      /* margin-right: 10px; */
      /* margin-top: 5px; */
      /* margin-bottom: 5px; */
      background: var(--g1);
      border: 1px solid var(--g1);
      justify-content: center;
  }
  
  .button.disabled{
    -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  }
  
  .button.alt {
      border: 1px solid var(--g2);
      background: linear-gradient(to left, transparent 50%, var(--g2) 50%);
      background-size: 220%;
      background-position: right;
      transition: background-position 0.56s ease-in-out;
  }
  .button:hover {
    opacity: 0.9;
  }
  
  .button.alt:hover {
      background-position: left;
  }

</style>