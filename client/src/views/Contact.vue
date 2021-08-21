<template>
  <v-app>
    <app-bar />
    <v-container class="mb-16">
      <v-row justify="center">
        <v-card flat width="500">
          <v-col>
            <p class="text-h3">
              Hello There! <br />
              How can we help you?
            </p>
            <p>
              Want to email us instead?
              <router-link to="">
                <span class="text-decoration-underline"
                  >pixelpopja@gmail.com</span
                >
              </router-link>
            </p>

            <v-text-field label="Your Name"></v-text-field>
            <v-text-field label="Your Email"> </v-text-field>
            <v-text-field label="Budget(Optional)"> </v-text-field>
            <v-text-field label="Your Message"></v-text-field>
            <v-btn block dark elevation="0" color="pixelgreen" class="mt-10"
              >Send</v-btn
            >
          </v-col>
        </v-card>
      </v-row>
    </v-container>
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
};
</script>