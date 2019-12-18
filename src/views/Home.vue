<template>
    <div>

        <v-img

                src="../assets/images/2148585_2.jpg"
        ></v-img>
        <v-container>
            <v-row           :align="alignment"
                             :justify="justify">
                <v-col cols="12"
                       md="8"
                       class="text-center">
                    <p class="display-2">Verwalte deine Abos</p>
                </v-col>
                <v-col cols="12"
                       md="8"
                       class="text-center">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </v-col>
            </v-row>
            <v-row           :align="alignment"
                             :justify="justify">
                <v-col cols="8"
                       md="4"
                       class="text-center">
                    <p class="title">Abos anlegen</p>
                </v-col>
                <v-col cols="8"
                       md="4"
                       class="text-center">
                    <p class="title">Abos bearbeiten</p>
                </v-col>
            </v-row>
            <v-row           :align="alignment"
                             :justify="justify">
                <v-col cols="6"
                       md="2">
                    <v-btn normal router to="/login" class="purple darken-3" dark>Login</v-btn>
                </v-col>
                <v-col cols="6"
                       md="2">
                    <v-btn normal router to="/registrieren" class="purple darken-3" dark>Registrieren</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                alignmentsAvailable: [
                    'start',
                    'center',
                    'end',
                    'baseline',
                    'stretch',
                ],
                alignment: 'center',
                dense: false,
                justifyAvailable: [
                    'start',
                    'center',
                    'end',
                    'space-around',
                    'space-between',
                ],
                justify: 'center',
            }
        },
    }
</script>

<style scoped>

</style>