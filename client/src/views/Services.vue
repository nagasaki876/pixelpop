<template>
  <v-app>
    <app-bar />
    <v-row justify="center">
      <v-col cols="5">
        <p class="text-h4">
          A design-led agency focused on <br />Product Development.
        </p>
        <p class="">
          Whether working locally with a startup or an established company, I
          take great pleasure in delivering next-level UX/UI—all from right here
          in Kingston, Jamaica.
        </p>
        <p class="">
          We pride ourselves in loving what we do as we take on complex problems
          and come up with elegant and simple solutions.
        </p>
      </v-col>
    </v-row>

    <div
      style="display: flex; justify-content: center; align-items: center"
    ></div>

    <!-- Service Offered -->
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

    <!-- Strategy -->
    <v-row>
      <v-col>
        <v-container class="pa-8">
          <p class="font-weight-medium pb-0" style="font-size: 24px">
            Strategy
          </p>
          <p>
            No one understands your business better than you, so, before
            starting anything, we get to know you. We make sure no stone is left
            unturned and no question is left unanswered so that, in the end,
            everyone is in the same page with a clear route on what's our goals
            and what's expected.
          </p>
        </v-container>
      </v-col>
      <v-col></v-col>
    </v-row>

    <!-- Product Design -->
    <v-row>
      <v-col></v-col>
      <v-col>
        <v-container class="pa-8">
          <p class="font-weight-medium pb-0" style="font-size: 24px">
            Product Design
          </p>
          <p>
            We do shiny & beautiful things. We know emotions are a big part of
            everyone's experience & we don't take them for granted. You know
            that first impact when you're using something you really like and go
            like "oh, I love this!"? That's what we're aiming for.
          </p>
        </v-container>
      </v-col>
    </v-row>

    <!-- Software Devlopment -->
    <v-container fluid class="mt-16 pixelyellow">
      <v-row>
        <v-col>
          <v-container class="pa-8">
            <p class="font-weight-medium pb-0" style="font-size: 24px">
              Software Development
            </p>
            <p>
              There's an obsession with detail when it comes to developing
              what's envisioned and that’s why we’ve adopted some of the
              industry's best practices for Code Review, Quality Assurance &
              Continuous Deployment. React is our true workhorse and our
              unquestionable tool of choice to develop almost anything.
            </p>
          </v-container>
        </v-col>
        <v-col></v-col>
      </v-row>

      <v-col class="mt-10" align="center">
        <p class="font-weight-medium pb-0" style="font-size: 24px">
          Software Made By Us
        </p>
        <p>
          We've created wonderful software to help business to get started and
        </p>
      </v-col>
      <v-row>
        <v-col>
          <v-card>
            <p></p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- New Project -->
    <v-col class="my-16" align="center">
      <p class="font-weight-medium pb-0" style="font-size: 24px">
        Have a projects of your own?
      </p>
      <p>Small or big, we've got you covered!</p>
      <v-row class="mt-5" justify="center">
        <p class="pixelblue--text ma-0 pr-2">Get In Touch</p>
        <v-icon color="pixelblue">trending_flat</v-icon>
      </v-row>
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
    return {
      works: [
        {
          name: "Grand Connection Investments & Co. Ltd",
          skillset: "UI/UX, Branding, Consultancy, Business Analysis",
          imgSrc: require("@/assets/gcic_landing.png")
        },
        {
          name: "Kingston Creative",
          skillset: "Front-End Development, UI/UX, Product Management",
          imgSrc: require("@/assets/kingston_creative_landing.png")
        },
        { name: "", skillset: "" }
      ]
    };
  },
  metaInfo: {
    title: "About",
    titleTemplate: "%s | PixelPop"
  }
};
</script>
