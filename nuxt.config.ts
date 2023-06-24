// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //Runtime config magic, not sure exactily how it works tbh but i know it lets me easily access variables 
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URI,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET
  },
  //Setting the page language so lighthouse stops having a aneurism
  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
    }
  },
  //Nuxt modules, you know what this does
  modules: [

    // pinia and its state persistance plugin
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'

  ],
  //Importing the store and assets directory, not sure why im doing this but the pinia docs says too
  imports: {
    dirs: ['./store', './assets'],
  },
  //Same with this
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"]
  },
  //Importing the database integration as a plugin, got this from a tutorial so dont ask me why, all i know is that it works
  nitro: {
    plugins: ["~/server/db/mongo.ts"],
  },

  
})
