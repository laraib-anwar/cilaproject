<template>
  <q-page class="flex q-pa-md">
  <div 
  class="heading"
  v-if="tab == 'register'"
   >
    <h5> Create an Account </h5>
    <p>Sign up to get started!!!</p>
    </div>
    <div 
  class="heading"
  v-if="tab == 'login'"
   >
    <h5> Welcome </h5>
    <p>Login to continue!!!</p>
    </div>
  	<q-card class="full-width">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <login-register :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <login-register :tab="tab" />
        </q-tab-panel>

      </q-tab-panels>
   
    </q-card>
      <!-- <div 
  class = "flex q-pa-md"
  v-if="tab == 'login'"
   >
    
    <p>Dont have an account? Signup!</p>
    </div>
    <div 
  class = "flex q-pa-md"
  v-if="tab == 'register'"
   >
    
    <p>Already have an account? Signin!</p>
    </div>-->
  </q-page>
</template>

<script>



	export default {
	  data () {
	    return {
	      tab: 'login'
	    }
	  },
	  components: {
	  	'login-register' : require('components/LoginRegister.vue').default
	  }
	}

</script>
<style>

</style>