<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-app-bar dark color="primary darken-1">
        <v-toolbar-title>Menu</v-toolbar-title>
      </v-app-bar>
      <MenuVue />
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify 2 Sandbox</v-toolbar-title>
      <v-spacer></v-spacer>
      <div style="margin-top: 20px">
        <v-input>
          <v-responsive max-width="260">
            <v-text-field
              dense
              flat
              hide-details
              rounded
              solo-inverted
              label="Search"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-responsive>
        </v-input>
      </div>
    </v-app-bar>
    <v-main style="padding-top: 65px !important">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import MenuVue from "./components/Menu";
export default {
  components: {
    MenuVue,
  },
  data: () => ({
    drawer: null,
    overlay: false,
    dotsMenu: {
      selectedItem: 1,
      items: [
        { text: "Calendar", path: "/" },
        { text: "Search", path: "search" },
      ],
    },
  }),
  methods: {
    showOverlay: function () {
      this.overlay = true;
    },
  },
};
</script>

<style scoped>
.v-main {
  padding-top: 0 !important;
}
.rounded-input {
  background: #FFF;
  border-radius: 10px;
}
</style>