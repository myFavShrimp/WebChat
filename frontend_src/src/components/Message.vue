<template>
  <div class="w-full flex" :class="{ 'justify-end' : fromSelf, 'justify-start': !fromSelf }">
    <div class="bg-gray-100 max-w-max flex flex-col overflow-hidden" :class="{ 'message-r' : fromSelf, 'message-l': !fromSelf }">
  <!--    <div class="divide-y divide-gray-300 divide-solid">-->
      <div class="m-2 px-0.5 mb-1.5">
        <p>{{text}}</p>
      </div>

      <div class="p-1 bg-gray-200">
        <div class="flex justify-between font-semibold px-2 space-x-4">
          <p>{{username}}</p>
          <p>{{time}}</p>
        </div>
      </div>
<!--    </div>-->

    </div>
  </div>
</template>

<script>
import {computed, toRefs} from 'vue'
import {useStore} from "vuex";

export default {
  name: "Message",
  props: {
    message: Object
  },
  setup(props) {
    const store = useStore()
    const ownUsername = computed(() => store.state.username)

    const { text, created_on, username } = toRefs(props.message)
    const timestamp = computed(() => {
      let time = new Date(created_on.value * 1000)
      return time.toLocaleString()
      // return time.format('DD.MM.YYYY HH:m:s')
    })

    return {
      text,
      time: timestamp,
      username,
      fromSelf: ownUsername.value === username.value
    }
  }
}
</script>

<style scoped>

</style>