<template>
  <div class="flex h-full w-full justify-center py-4 px-2 sm:px-4 md:px-0"> <!-- Center Component -->
    <div class="flex flex-col bg-white w-full md:w-1/2 h-full rounded-xl px-8 py-2"> <!-- Component -->

      <div class="w-full border-b flex items-stretch justify-start space-x-4"> <!-- Header -->
        <h1 class="pl-4 font-bold text-xl my-2">
          Chat
        </h1>
        <h1 v-show="!socketConnected" class="pl-4 text-xl my-2 text-red-500">
          Can't establish connection to chat.
        </h1>
      </div>

      <div id="scrolling-element" class="w-full h-full relative overflow-y-auto my-2">
        <div id="scrolled-element" class="w-full absolute space-y-2">
          <Message v-for="message in messages"
                :key="message.id"
                :message="message" />
        </div>
      </div>

      <div class="w-full h-12 flex justify-items-stretch space-x-2">
        <input @keyup.enter="sendMessage" v-model="messageInput" type="text" placeholder="username" class="input input-primary input-bordered w-full flex-shrink">
        <div class="btn-group flex-grow flex-shrink-0">

          <button @click="clearMessageInput" class="btn btn-outline btn-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-delete">
              <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/>
              <line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/>
            </svg>
          </button>

          <button @click="sendMessage" class="btn btn-outline btn-md btn-active">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Message from '@/components/Message.vue'
import {computed, ref} from "vue"
import {useStore} from "vuex"
import {useRouter} from "vue-router"
import {io} from "socket.io-client"

export default {
  name: 'Chat',
  components: {
    Message
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const accessToken = computed(() => store.state.accessToken)

    if (accessToken.value.length < 3) {
      router.push({name: 'Login'})
      return
    }

    function scrollMessagesToBottom() {
      document.getElementById("scrolling-element").scrollTop = document.getElementById("scrolled-element").offsetHeight
    }
    function isMessagesScrolledToBottom() {
      let scrolling = document.getElementById("scrolling-element")
      let scrolled = document.getElementById("scrolled-element")
      return (Math.round((scrolling.scrollTop) / (scrolled.offsetHeight - scrolling.offsetHeight) * 100) / 100) === 1
    }


    // messages
    store.dispatch('getMessages')
    const messages = computed(() => store.state.messages)

    const messageInput = ref('')
    function clearMessageInput() {
      messageInput.value = ''
    }

    function sendMessage() {
      socket.value.emit('message', messageInput.value)
      clearMessageInput()
    }


    // socket
    const socket = computed(() => store.state.socket)
    const socketConnected = computed(() => store.state.socketConnected)

    if (socket.value === null || !socket.value.connected) {
      store.commit('socket', io({
        extraHeaders: {
          Authorization: accessToken.value,
        }
      }))

      // connection
      socket.value.on("accepted", () => {
        store.commit('socketConnected', true)
        scrollMessagesToBottom()
      })
      socket.value.on("refused", () => {
        store.commit('socketConnected', false)
      })

      // messaging
      socket.value.on("message", (data) => {
        let scrolledToBottom = isMessagesScrolledToBottom()
        store.commit('addMessage', data)

        if (scrolledToBottom) setTimeout(scrollMessagesToBottom, 50)
      })
    }
    else {
      setTimeout(scrollMessagesToBottom, 50)
    }

    return {
      messages,
      socketConnected,
      messageInput,
      sendMessage,
      clearMessageInput
    }
  }
}
</script>
