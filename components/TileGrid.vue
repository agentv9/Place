<template>
     <div :id=gridid class="tiles"></div>
</template>
<script>
  import { defineComponent } from 'vue'
 
  
  export default defineComponent({
    name: "TileGrid",
    components: {  },
    props: ['gridid'],
    data: () => {
      return {
        wrapper: null,
        columns: 0,
        rows: 0,
        toggled: false,
        
      }
    },
    methods: {
    createTile: function() {
    const tile = document.createElement("div");
    
    tile.classList.add("tile");
    
    
    return tile;
  },
  
   createTiles: function(quantity)  {
    Array.from(Array(quantity)).map(() => {
      this.wrapper.appendChild(this.createTile());
    });
  },
  
   createGrid: function()  {
    
    this.wrapper.innerHTML = "";
    
    const size = document.body.clientWidth > 800 ? 100 : 50;
    
    let columns = Math.floor(document.body.clientWidth / size + 3);
    let rows = Math.floor(this.wrapper.clientHeight / size + 3);
  
    this.wrapper.style.setProperty("--columns", columns);
    this.wrapper.style.setProperty("--rows", rows);
    
    
    this.createTiles(columns * rows);
  }
    },
    created(){
     if(process.client){
      window.addEventListener("resize", this.createGrid);
     }
    },
    unmounted(){
      if(process.client){
      window.removeEventListener("resize", this.createGrid);
     }
    },
    mounted() {
      this.wrapper = document.getElementById(this.gridid)
      console.log(this.gridid)
      console.log(this.wrapper)
      this.createGrid();
  
    }
  })
  </script>
  
  
  <style >
  :root {

    --columns: v-bind(columns);
    --rows: v-bind(rows)

  }
  .tiles {
    height: calc(100vh - 1px);
    width: calc(100vw - 1px);
    position: absolute;
   left: 0px;
    top: 0px;
    
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-template-rows: repeat(var(--rows), 1fr);
  }
  
  .tile {
  
    position: relative;
  }
  
  
  
  .tile:before {
    background-color: rgb(15, 15, 15);
    content: "";
    inset: 0.5px;
   
    position: absolute;
  }
  
  </style>