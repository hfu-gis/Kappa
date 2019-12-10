<template>
    <v-app>
        <v-app-bar dark
                   absolute
                   color="transparent"
                   elevate-on-scroll
                   scroll-target="#scrolling-techniques-7"
                   height="50"
                   >
            <router-link to="/home">
                <v-img
                        src="./assets/images/logo.png"
                        max-height="90"
                        max-width="90"
                        contain>
                </v-img>
            </router-link>
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
        <v-sheet
                id="scrolling-techniques-7"
                class="overflow-y-auto"
                max-height="600"
        >
        </v-sheet>
        <v-main>
            <v-app>
                <router-view></router-view>
            </v-app>
        </v-main>
    </v-app>
</template>

<script>
