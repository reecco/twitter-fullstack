<template>
  <div class="home">
    <h1 class="home-title">Twitter API</h1>
    <div class="home-box">
      <ul class="list">
        <li class="item">
          <router-link class="link" to="/send">Send tweet</router-link>
        </li>
        <li class="item">
          <router-link class="link" to="/view">View tweet</router-link>
        </li>
        <li class="item">
          <router-link class="link" to="/search">Search user</router-link>
        </li>
        <li class="item">
          <router-link class="link" to="/delete">Delete tweet</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },

  created() {
    document.title = 'Home'
  }
}
</script>

<style src="./style.sass" lang="sass" scoped></style>