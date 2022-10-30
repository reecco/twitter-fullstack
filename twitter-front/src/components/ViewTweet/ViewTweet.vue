<template>
  <div class="form__box">
    <h1 class="form__box-title">View tweet</h1>
    <form class="form" @submit="viewTweet">
      <p class="message">{{ message }}</p>
      <input type="text" name="tweet" id="tweet" placeholder="https://twitter.com/TwitterDev/status/1584620743018561537"
        v-model="tweet">
      <div class="button-box">
        <p v-if="tweet == '' || tweet == ' '" class="btn-send--opacity" id="btn-send">View</p>
        <button v-else class="btn-send">View</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ViewTweet',

  data() {
    return {
      tweet: '',
      message: ''
    }
  },

  methods: {
    async viewTweet(event) {
      event.preventDefault()

      const regex = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)\/status\//

      const validate = new RegExp(regex)

      if (!validate.test(this.tweet)) {
        this.message = 'Invalid URL.'
        setTimeout(() => {
          this.message = ''
        }, 5000)
      } else {
        const id = this.tweet.replace(regex, '')

        const req = await fetch(`http://localhost:9595/view/${id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })

        const res = await req.json()

        console.log(res)
      }
    }
  },

  created() {
    document.title = 'View tweet'
  }
}
</script>

<style src="./style.sass" lang="sass" scoped></style>