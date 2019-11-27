<template>
    <div class="home">
        <p>Lorem Ipsum</p>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <v-btn normal router to="/login" class="red" dark>Login</v-btn>
            </v-flex>
            <v-flex xs12 sm6>
                <v-btn normal router to="/Registrieren" class="red" dark>Registrieren</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
    </div>
</template>

<script>
    export default {
        name: "HomePage"
    }
</script>

<style scoped>

</style>