<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
       

        <q-toolbar-title class = "absolute-center">
         {{title}}
        </q-toolbar-title>

  
      </q-toolbar>
    </q-header>

    

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>




import { openURL } from 'quasar'

export default {
  computed:{
    title() {
      let currentPath = this.$route.fullPath
      if(currentPath == '/') return 'Login!'
      else if(currentPath == '/index') return 'Welcome!!'
    }
  },
   methods: {
     openURL
   }
 }

  

</script>
