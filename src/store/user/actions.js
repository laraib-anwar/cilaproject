import { firebaseAuth, firebaseDb } from 'boot/firebase'
export function registerUser({}, payload) {
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            console.log(response)
            let userId = firebaseAuth.currentUser.uid
            firebaseDb.ref('users/' + userId).set({
                name: payload.name,
                email: payload.email,
                
            })
        })
        .catch(error => {
            console.log(error.message)
        })
}

export function loginUser({}, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.message)
        })		
}

export function handleAuthStateChanged({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        // User is logged in.
        let userId = firebaseAuth.currentUser.uid
        firebaseDb.ref('users/' + userId).once('value', snapshot => {
            let userDetails = snapshot.val()
            commit('setUserDetails', {
                name: userDetails.name,
                email: userDetails.email,
                userId: userId
            })
        })
      }
      else {
          // User is logged out.
          commit('setUserDetails', {})
      }
    })
}