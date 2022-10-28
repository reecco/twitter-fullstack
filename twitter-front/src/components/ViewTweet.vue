<template>
  <div class="hello">
    <h1>View tweet</h1>
    <form @submit="viewTweet">
      <input type="text" name="tweet" id="tweet" v-model="id">
      <button>View</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ViewTweet',
  
  data() {
    return {
      id: ''
    }
  },

  methods: {
    async viewTweet(event) {
      event.preventDefault()
      
      const req = await fetch(`http://localhost:9595/view/${this.id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      })

      const res = await req.json()

      console.log(res)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>