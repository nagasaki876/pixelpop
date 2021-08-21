<template>
  <v-app>
    <app-bar />
    <div style="display: flex; justify-content: center; align-items: center">
      <p class="text-h4">
        A design-led agency focused on <br />Product Development.
      </p>
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
      <p>
        At Significa we take on products from inception to launch, from <br /> business
        
        model to people's pocket, from wireframe to continuous deployment.
      </p>
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
      <p>
        We pride ourselves in loving what we do as we take on complex problems
        <br />
        and come up with elegant and simple solutions.
      </p>
    </div>
    <v-row wrap no-gutters justify="center" class="pt-16">
      <v-col cols="3"
        ><p class="font-weight-medium pb-4" style="font-size: 24px">Strategy</p>
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
    <pixel-footer />
  </v-app>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import PixelFooter from "../components/PixelFooter.vue"
export default {
  components: { AppBar, PixelFooter },
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
