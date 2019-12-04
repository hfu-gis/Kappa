<template>
    <v-app>
          <v-app-bar app
                   color="red"
                   dark
                   height="50">
              <v-img
                      src="./assets/images/logo.png"
                      max-height="90"
                      max-width="90"
                      contain
              ></v-img>
            <v-toolbar-title left>
                <router-link to="/home" tag="span" style="cursor: pointer"></router-link>
            </v-toolbar-title>
            <v-spacer/>

              <v-toolbar-items>
                  <v-btn text router to="/login">
                      <v-icon left>mdi-account</v-icon> Login
                  </v-btn>
                  <v-btn text router to="/Registrieren">
                      <v-icon left>mdi-account-edit</v-icon> Registrieren
                  </v-btn>
              </v-toolbar-items>
        </v-app-bar>
        <v-main>
            <v-app>
                <router-view></router-view>
            </v-app>
        </v-main>
    </v-app>
</template>

<script>
</script>
