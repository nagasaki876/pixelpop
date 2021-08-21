<template>
  <v-app>
    <app-bar />
    <!-- Works -->
    <v-container class="pt-5">
      <v-row wrap>
        <v-col cols="6" class="px-5" v-for="work in works" :key="work.name">
          <v-card flat>
            <v-img :src="work.imgSrc"></v-img>
            <p class="text-h6 pt-2 font-weight-regular pb-0">{{ work.name }}</p>
            <p>{{ work.skillset }}</p>
          </v-card>
        </v-col>
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
    return {
      works: [
        {
          name: "Grand Connection Investments & Co. Ltd - Travel & Rewards Program",
          skillset: "UI/UX, Branding, Consultancy, Business Analysis",
          imgSrc: require("@/assets/gcic_landing.png"),
        },
        {
          name: "Kingston Creative - Empowering Creatives in the Caribbean",
          skillset: "Front-End Development, UI/UX, Product Management",
          imgSrc: require("@/assets/kingston_creative_landing.png"),
        },
        { name: "", skillset: "" },
      ],
    };
  },
};
</script>
