<template>
  <!-- Footer -->
  <v-container>
    <v-row>
      <v-col>
        <v-img
          style="max-width: 28px"
          :src="require('@/assets/pixelpop.png')"
          class="mb-2"
          alt=""
        ></v-img>
        <p class="pb-4">popthatpixel@gmail.com</p>
        <p>Legal ⓒ 2021</p></v-col
      >
      <v-col
        ><p>Who we are</p>
        <p>About</p>
        <p>Careers</p>
        <p>Contact</p>
      </v-col>
      <v-col
        ><p>Things we do</p>
        <p>Showcase</p>
        <p>Services</p>
        <p>Handbook</p>
        <p>Blog</p>
        <p>Labs</p></v-col
      >
      <v-col
        ><p>Follow us</p>
        <v-row></v-row
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>