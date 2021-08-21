import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            pixelred: "#F03735", // #E53935
            pixelblue: "#1789FA", // #FFCDD2
            pixelyellow: "#F4D12F",
            pixelgreen: "#37B431", // #3F51B5
            pixelorange: "#F7B22D"
          }
        }
      },
      icons: {
        iconfont: 'md'
      }
});
