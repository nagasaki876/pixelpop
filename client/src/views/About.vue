<template>
  <v-app>
    <app-bar />

    <v-row justify="center">
      <v-col cols="6">
        <v-container>
          <p class="text-center text-h3 font-weight-light">
            Design-led strategies that <br />
            impact people’s life.
          </p>
        </v-container>
      </v-col>
    </v-row>

    <!-- About -->
    <v-row justify="center">
      <v-col cols="11">
        <v-container>
          <p class="text-h6 font-weight-light">
            I work as a User Interface & User Experience designer creating
            thoughtful experiences with the combination of design, business and
            marketing. I’m passionate about building & designing thoughtful
            experiences to make sure your customers and users are satisfied when
            they’re using your products and services online. I also love
            documenting my journey and sharing it with the community to help
            others succeed and grow.
          </p>
        </v-container>
      </v-col>
    </v-row>
    <v-col class="mt-16" align="center">
      <p class="text-h4 font-weight-light">From inception to launch.</p>
      <p>Get to know our process a little better.</p>
      <v-btn text
        ><span class="text-decoration-underline blue--text">
          View our Services</span
        ></v-btn
      >
    </v-col>
    <pixel-footer />
  </v-app>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import PixelFooter from "../components/PixelFooter.vue";
export default {
  components: { AppBar, PixelFooter },
  data() {
    return {};
  },
  metaInfo: {
    title: "About",
    titleTemplate: "%s | PixelPop"
  }
};
</script>

<style scoped>
.pixelgreen {
  background-color: #37b431;
}
</style>
