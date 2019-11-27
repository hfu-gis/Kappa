<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <v-btn normal router to="/login">Login</v-btn>
            </v-flex>
            <v-flex xs12 sm6>
                <v-btn normal router to="/Registrieren">Registrieren</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "HomePage"
    }
</script>

<style scoped>

</style>