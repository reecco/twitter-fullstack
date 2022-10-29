<template>
  <div class="form__box">
    <h1 class="form__box-title">Send tweet</h1>
    <form class="form" @submit="sendTweet">
      <p class="message">{{ message }}</p>
      <textarea type="text" name="tweet" cols="50" rows="10" id="tweet" placeholder="What's happening?" v-model="tweet"></textarea>
      <div class="button-box">
        <button v-if="tweet == '' || tweet == ' '" class="btn-send--opacity" id="btn-send">Send</button>
        <button v-else class="btn-send">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SendTweet',
  
  data() {
    return {
      tweet: '',
      message: ''
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

      this.message = res.message
      
      if (this.message) {
        setTimeout(() => {
          this.message = ''
        }, 5000)
      }

      this.tweet = ''
    }
  },

  created() {
    document.title = 'Send tweet'
  }
}
</script>

<style src="./style.sass" lang="sass" scoped></style>
