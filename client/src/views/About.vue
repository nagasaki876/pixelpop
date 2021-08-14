<template>
  <v-app>
    <app-bar />

    <v-row class="px-5">
      <v-col>
        <p class="text-h3 font-weight-light">
          Design-led strategies that <br />
          impact people’s life.
        </p>
      </v-col>
    </v-row>

    <!-- Images -->
    <v-row>
      <v-col>
        <v-img></v-img>
      </v-col>
    </v-row>

    <v-col class="pa-0">
      <v-col align="center" class="pixelgreen pt-16 px-16">
        <v-card flat width="500" color="pixelgreen">
          <p class="text-left text-h4 font-weight-light">We’re global</p>
          <p class="text-left text-h6">
            Solid communication, iteration and prototyping allows us to work
            alongside clients from all around the world. We have a big office in
            Porto, Portugal that allows us to host project workshops,
            brainstorming sessions and work side by side with you and your team.
            Just like being neighbours, you can drop by for some eggs, anytime.
            We also travel regularly to do the exact same thing with the added
            bonus of getting to know new places!
          </p>
        </v-card>
      </v-col>
      <v-img :src="require('@/assets/world.png')">
        <v-row class="pa-5">
          <v-col
            ><p class="text-h4 font-weight-light">
              Life here, in the heart <br />
              of Kingston
            </p></v-col
          >

          <v-col>
            <p>
              **We spend a great deal of our days at work, so why not make it
              interesting? With a friendly and laid back environment you get all
              the perks to ensure a creative and productive day.
            </p>
          </v-col>
        </v-row>
      </v-img>
    </v-col>

    <v-col align="center">
      <p class="text-h4 font-weight-light">From inception to launch.</p>
      <p>Get to know our process a little better.</p>
      <v-btn text
        ><span class="text-decoration-underline blue--text">
          View our Services</span
        ></v-btn
      >
    </v-col>
  </v-app>
</template>

<script>
import AppBar from "../components/AppBar.vue";
export default {
  components: { AppBar },
  data() {
    return {};
  },
};
</script>

<style scoped>
.pixelgreen {
  background-color: #37b431;
}
</style>
