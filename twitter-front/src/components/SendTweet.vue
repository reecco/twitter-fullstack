<template>
  <div class="hello">
    <h1>Send tweet</h1>
    <form @submit="sendTweet">
      <input type="text" name="tweet" id="tweet" v-model="tweet">
      <button>Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SendTweet',
  
  data() {
    return {
      tweet: ''
    }
  },

  methods: {
    async sendTweet(event) {
      event.preventDefault()
      
      const req = await fetch('http://localhost:9595/send', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({tweet: this.tweet})
      })

      const res = await req.json()

      console.log(res)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
