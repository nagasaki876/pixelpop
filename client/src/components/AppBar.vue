<template>
  <v-app-bar flat color="transparent" height="100" class="px-2">
    <router-link to="/">
      <v-img
        style="max-width: 42px"
        :src="require('@/assets/pixelpop.png')"
        alt=""
      ></v-img>
    </router-link>
    <v-spacer></v-spacer>

    <router-link to="/work" class="text-decoration-none">
      <p class="px-3 pt-3 font-weight-medium black--text">Work</p>
    </router-link>

    <router-link to="/contact" class="text-decoration-none">
      <p class="px-3 pt-3 font-weight-medium black--text">Contact</p>
    </router-link>

    <router-link to="/services" class="text-decoration-none">
      <p class="px-3 pt-3 font-weight-medium black--text">Services</p>
    </router-link>

    <router-link to="/about" class="text-decoration-none">
      <p class="px-3 pt-3 font-weight-medium black--text">About</p>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
