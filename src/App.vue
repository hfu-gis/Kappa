<template>
  <div>
      <v-toolbar info>
          <v-toolbar-title>MySub</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
              <v-btn router to="/login">
              <v-icon left >mdi-account</v-icon>
              Einloggen
              </v-btn>
              <v-btn router to="/Registrieren">
                  <v-icon left>mdi-account</v-icon>
                  Registrieren
              </v-btn>
          </v-toolbar-items>
      </v-toolbar>
        <main>
        <router-view></router-view>
        </main>
  </div>
</template>

<script>
  import Home from './views/Home';
  export default {
    name: 'App',
    components: {
      Home,
    },
    data: () => ({
      //
    }),
    created() {
      this.$router.push({path: '/home'})
    }
  };
</script>