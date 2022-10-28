<template>
  <div class="hello">
    <h1>Search user</h1>
    <form @submit="searchUser">
      <input type="text" name="tweet" id="tweet" v-model="user">
      <button>Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchUser',
  
  data() {
    return {
      user: ''
    }
  },

  methods: {
    async searchUser(event) {
      event.preventDefault()
      
      const req = await fetch(`http://localhost:9595/${this.user}`, {
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