<template>
  <div class="body flex flex-col w-full h-screen bg-gray-100 overflow-hidden">
    <div class="flex items-center justify-center w-full space-x-8 bg-white shadow-2xl"> <!-- NAV BAR -->
      <div class="flex items-center space-x-2 ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="my-4 feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        <h1 class="font-bold my-6 hidden sm:block">WebChat</h1>
      </div>

      <div v-if="loggedIn" class="nav space-x-4 my-6 w-max">
        <router-link :to="{ name: 'Chat' }">Chat</router-link>
        <router-link :to="{ name: 'History' }">My History</router-link>
        <a>|</a>
        <button @click="logoutClicked" class="btn btn-error btn-active btn-sm">Logout</button>
      </div>
    </div>

    <div class="w-full h-full flex-shrink">
      <router-view />
    </div>
  </div>

<!--  <div v-show="currentRoute === 'Login'" class="h-full w-full p-2">-->
<!--    <router-view />-->
<!--  </div>-->
</template>

<script>
import {useRoute, useRouter} from 'vue-router'
import { computed } from "vue"
import {useStore} from "vuex"
import Api from './utils'

export default {
  name: 'Chat',
  components: {
  },
  setup() {
    const router = useRouter()
    const store = useStore()

    const accessToken = computed(() => store.state.accessToken)
    const loggedIn = computed(() => accessToken.value.length > 3)

    const currentRoute = computed(() => {
      return useRoute().name
    })

    function logoutClicked() {
      const socket = computed(() => store.state.socket)

      socket.value.disconnect()
      Api.post('/auth/logout',{}, accessToken.value)

      setTimeout(() => {store.commit('accessToken', '')}, 50)

      router.push({name: 'Login'})
    }

    return {
      logoutClicked,
      currentRoute,
      loggedIn
    }
  }
}
</script>

<style src="@/assets/tailwind.css" />
