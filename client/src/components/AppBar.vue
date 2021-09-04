<template>
  <v-app-bar flat color="transparent" height="100" class="px-2">
    <router-link to="/" class="text-decoration-none">
      <v-row>
        <v-img
          class="ml-3"
          style="max-width: 42px"
          :src="require('@/assets/pixelpop.png')"
          alt=""
        ></v-img>
        <p class="mt-3 mb-0 ml-3 text-h5 font-weight-bold black--text">
          PixelPop
        </p>
      </v-row>
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
  }
};
</script>
