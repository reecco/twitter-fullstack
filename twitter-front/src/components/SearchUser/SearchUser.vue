<template>
  <div class="form__box">
    <h1 class="form__box-title">Search user</h1>
    <form class="form" @submit="searchUser">
      <input type="text" name="user" id="user" v-model="user">
      <div class="button-box">
        <p v-if="user == '' || user == ' '" class="btn-search--opacity" id="btn-send">Search</p>
        <button v-else class="btn-search">Search</button>
      </div>
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
  },

  created() {
    document.title = 'Search user'
  }
}
</script>

<style src="./style.sass" lang="sass" scoped></style>