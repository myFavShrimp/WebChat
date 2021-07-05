<template>
  <div class="flex h-full w-full justify-center py-4 px-2 sm:px-4 md:px-0"> <!-- Center Component -->
    <div class="flex flex-col bg-white w-full md:w-1/2 h-full rounded-xl px-8 py-2"> <!-- Component -->

      <div class="w-full border-b flex items-stretch justify-start"> <!-- Header -->
        <h1 class="pl-4 font-bold text-xl my-2">
          History
        </h1>
      </div>

      <div class="w-full h-full relative overflow-y-auto my-2">
        <div class="w-full absolute space-y-2">
          <Message v-for="message in messageHistory"
                   :key="message.id"
                   :message="message" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Message from '@/components/Message.vue'
import {useStore} from "vuex"
import {useRouter} from "vue-router"
import {computed} from "vue"

export default {
  name: 'History',
  components: {
    Message
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const username = computed(() => store.state.username)
    const messageHistory = computed(() => store.state.messages.filter(message => message.username === username.value))

    const accessToken = computed(() => store.state.accessToken)

    if (accessToken.value.length < 3) {
      router.push({name: 'Login'})
    }

    return {
      messageHistory
    }
  }
}
</script>