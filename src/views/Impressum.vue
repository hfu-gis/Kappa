<template>
    <v-col>
        <div>
            <v-breadcrumbs></v-breadcrumbs>
            <v-app>
                <v-app-bar app
                           color="purple darken-3"
                           dark
                           height="50">
                    <router-link to="/Impressum">
                        <v-img src="../assets/images/logo.png"
                               max-height="100"
                               max-width="100"
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
                <v-container>
                    <v-row           :align="alignment"
                                     :justify="justify">
                        <v-col cols="12"
                               md="8"
                               class="text-center">
                            <p class="display-2">Impressum</p>
                        </v-col>
                        <v-col cols="12"
                               md="8"
                               class="text-center">
                            <p style="font-family: Verdana">

                                Erstellt vom Team Kappa: <br>
                                Redou Ainouz <br>
                                Daniel Apfel<br>
                                Lukas Bäumchen<br>
                                Rena Böhringer<br>
                                Jan-Luca Haspel<br>
                                <br>
                                In Zusammenarbeit mit der Hochschule Furtwangen<br>
                                Robert-Gerwig-Platz 1,<br>
                                78120 Furtwangen im Schwarzwald<br>
                                <br>
                                Bei technischen Problemen:<br>
                                Telefonnummer 07723 920-0<br>
                                INFO(AT)HS-FURTWANGEN.DE<br>

                            </p>
                        </v-col>
                    </v-row>


                </v-container>
            </v-app>
        </div>
    </v-col>
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

