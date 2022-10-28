<template>
  <div class="hello">
    <h1>Delete tweet</h1>
    <form @submit="searchUser">
      <input type="text" name="tweet" id="tweet" v-model="id">
      <button>Delete</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchUser',
  
  data() {
    return {
      id: ''
    }
  },

  methods: {
    async searchUser(event) {
      event.preventDefault()
      
      const req = await fetch('http://localhost:9595/', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: this.id})
      })

      const res = await req.json()

      console.log(res)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>