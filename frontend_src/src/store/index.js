import { createStore } from 'vuex'
import Api from '@/utils'

export default createStore({
  state: {
    messages: [],
    accessToken: '',
    username: '',
    socket: null,
    socketConnected: false
  },
  getters: {
    accessTokenValid(state) {
      return state.accessToken
    }
  },
  mutations: {
    messages(state, messages) {
      state.messages = messages
    },
    addMessage(state, message) {
      state.messages.push(message)
    },
    loggedIn(state, loggedIn) {
      state.loggedIn = loggedIn
    },
    accessToken(state, token) {
      state.accessToken = token
    },
    username(state, username) {
      state.username = username
    },
    socket(state, socket) {
      state.socket = socket
    },
    socketConnected(state, connected) {
      state.socketConnected = connected
    },
  },
  actions: {
    async getMessages(context) {
      if (context.state.accessToken.length < 3) return

      Api.get('/messages/all', context.state.accessToken)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          context.state.messages = data.items.sort((a, b) => (a.created_on > b.created_on) ? 1 : -1)
        })
    },
  },
  modules: {
  }
})
