<template>
  <v-app>
    <!-- Landing -->
    <v-row>
      <v-img contain :src="require('@/assets/landing.png')">
        <app-bar />
        <v-container fill-height>
          <v-col align="center">
            <p class="font-weight-bold" style="font-size: 180px">PixelPop</p>
            <p class="title font-weight-regular grey--text">
              We are full stack designer working with businesses to create great
              products & brands.
            </p>
            <v-btn x-large elevation="0" color="red white--text"
              >Contact Us</v-btn
            >
          </v-col>
        </v-container>
      </v-img>
    </v-row>
    <!-- Works -->
    <v-container class="pt-16">
      <v-row wrap>
        <v-col cols="4" class="px-5" v-for="work in works" :key="work.name">
          <v-card flat>
            <v-img :src="work.imgSrc"></v-img>
            <p class="title pt-2 font-weight-bold pb-0">{{ work.name }}</p>
            <p>{{ work.skillset }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- Services -->
    <v-container class="pt-16 pb-16">
      <v-row>
        <v-col><p style="font-size: 24px">We create digital products</p></v-col>
        <v-col
          ><p style="font-size: 24px">
            By creating thoughtful experiences with the combination of design,
            business and marketing. We are passionate about building and design
            thoughtful experiences to make sure your customers and users are
            satisfied when they are using your products and services.
          </p></v-col
        >
      </v-row>
      <v-row wrap no-gutters justify="center" class="pt-16">
        <v-col cols="3"
          ><p class="font-weight-medium pb-4" style="font-size: 24px">
            Strategy
          </p>
          <p>- UX Research</p>
          <p>- Business Strategy</p>
          <p>- Brand Strategy</p>
          <p>- Product Strategy</p>
          <p>- Product Management</p></v-col
        >
        <v-col cols="3"
          ><p class="font-weight-medium pb-4" style="font-size: 24px">
            Product Design
          </p>
          <p>- User Experience</p>
          <p>- User Interface</p>
          <p>- Brand Development</p>
          <p>- Motion & Development</p>
        </v-col>
        <v-col cols="3"
          ><p class="font-weight-medium pb-4" style="font-size: 24px">
            Development
          </p>
          <p>- Front-end Development</p>
          <p>- Web Development</p>
          <p>- Mobile Application Development</p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <p class="pixelblue--text ma-0 pr-2">View Services</p>
        <v-icon color="pixelblue">trending_flat</v-icon>
      </v-row>
    </v-container>

    <!-- Testimonials -->
    <!-- <v-container fluid class="pixelred">
      <v-container>
        <v-row>
          <v-col>
            <p>What's new on Significa Blog</p>
          </v-col>
          <v-col> </v-col>
        </v-row>
      </v-container>
    </v-container> -->
    <!-- Work With Us-->
    <v-container>
      <v-row>
        <v-col></v-col>
      </v-row>
    </v-container>
   <!-- Footer -->
    <pixel-footer />
  </v-app>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import PixelFooter from '../components/PixelFooter.vue';
export default {
  components: { AppBar, PixelFooter},
  data() {
    return {
      works: [
        {
          name: "Grand Connection Investments & Co. Ltd",
          skillset: "UI/UX, Branding, Consultancy, Business Analysis",
          imgSrc: require("@/assets/gcic_landing.png"),
        },
        {
          name: "Kingston Creative",
          skillset: "Front-End Development, UI/UX, Product Management",
          imgSrc: require("@/assets/kingston_creative_landing.png"),
        },
        { name: "", skillset: "" },
      ],
    };
  },
};
</script>
