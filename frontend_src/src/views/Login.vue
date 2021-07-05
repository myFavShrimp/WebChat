<template>
  <div class="flex h-full w-full justify-center py-4 px-2 sm:px-4 md:px-0"> <!-- Center Component -->
    <div class="flex flex-col bg-white w-full md:w-96 h-60 rounded-xl px-8 py-2 shadow-2xl"> <!-- Component -->

      <div class="w-full border-b flex items-stretch justify-start"> <!-- Header -->
        <h1 class="pl-4 font-bold text-xl my-2">
          Login
        </h1>
      </div>

      <div class="w-full h-full flex flex-col justify-items-stretch mt-4">
        <div class="form-control w-full h-full">
          <label class="label">
            <span class="label-text">Pick a username to start chatting</span>
          </label>

          <input @keyup.enter="loginClicked" v-model="inputName" type="text" placeholder="username" class="input bg-gray-100">

          <div class="flex justify-end">

            <button @click="loginClicked" class="btn btn-primary btn-md w-max mt-4">
              <p class="mr-2">Start Chatting</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-in">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" y1="12" x2="3" y2="12"/>
              </svg>
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import Api from '@/utils'
import { useStore } from 'vuex'
import {useRouter} from 'vue-router'
// import { getCurrentInstance } from "vue"

export default {
  name: 'Login',
  components: {
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const inputName = ref('')

    function loginClicked() {
      console.log(inputName.value)
      Api.post('/auth/login', {username: inputName.value})
        .then(response => response.json())
        .then(data => {
          console.log(data.access_token)
          store.commit('accessToken', data.access_token)
          store.commit('username', inputName.value)

          router.push({name: 'Chat'})
        })
    }

    return {
      loginClicked,

      inputName
    }
  }
}
</script>
