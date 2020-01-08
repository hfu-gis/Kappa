<template>
    <div>


        <v-container>
            <v-row           :align="alignment"
                             :justify="justify">
                <v-col cols="12"
                       md="8"
                       class="text-center">
                    <p class="display-2">Datenschutz</p>
                </v-col>
                <v-col cols="12"
                       md="8"
                       class="text-center">
                    <p>
                    </p>
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