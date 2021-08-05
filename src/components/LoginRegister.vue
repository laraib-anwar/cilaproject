<template>
	<q-form @submit="submitForm">
     
		<q-input
			v-if="tab == 'register'"
			v-model="formData.name"
			class="q-mb-md"
			outlined
			label="First Name" />
        <q-input
			v-if="tab == 'register'"
			v-model="formData.lname"
			class="q-mb-md"
			outlined
			label="Last Name" />
		<q-input
			v-model="formData.email"
			class="q-mb-md"
			outlined
			type="email"
			label="Email ID" />
		<q-input
            v-if="tab == 'register'"
			v-model="formData.password"
			class="q-mb-md"
			outlined
			type="password"
			label="CreatePassword" />
        <q-input
            v-if="tab == 'login'"
			v-model="formData.password"
			class="q-mb-md"
			outlined
			type="password"
			label="Password" />
            <div v-if="tab == 'login'" >
            <p>*Forgot Password</p> 
            </div>
		<div class="row" >

			
			<q-btn
                
				color="grey-3"
				type="submit"
                text-color="black"
				:label="tab" />
		</div>
        
	</q-form>
</template>

<script>
	import { mapActions } from 'vuex'
  
	export default {
		props: ['tab'],
        data() {
			return {
                
				formData: {
					name: '',
                    lname: '',
					email: '',
					password: ''
				}
			}
		},
        methods: {
			...mapActions('user', ['registerUser', 'loginUser']),
			submitForm() {
				if (this.tab == 'login') {
					this.loginUser(this.formData)
				}
				else {
					this.registerUser(this.formData)
				}
			}
		}
	}
</script>