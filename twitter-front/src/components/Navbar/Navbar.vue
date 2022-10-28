<template>
  <div class="header">
    <div class="icon__home">
      <router-link class="link" to="/">Icon Home</router-link>
    </div>
    <nav>
      <router-link class="link" to="/send">Send tweet</router-link>
      <router-link class="link" to="/view">View tweet</router-link>
      <router-link class="link" to="/search">Search user</router-link>
      <router-link class="link" to="/delete">Delete tweet</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style src="./style.sass" lang="sass" scoped></style>