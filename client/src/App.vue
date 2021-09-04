<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  metaInfo: {
    title: "App",
    titleTemplate: "%s | PixelPop",
    htmlAttrs: {
      lang: "en-US"
    },
    meta: [
      { charset: "utf-8" },
      { name: "description", content: "" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;400;500;600;700;900&display=swap");
html,
body {
  font-family: "Raleway", sans-serif;
}

.v-application {
  font-family: "Raleway", sans-serif !important;
}
</style>
