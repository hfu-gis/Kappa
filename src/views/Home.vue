<template>
    <div>
        <v-img src="../assets/images/2148585.jpg"></v-img>
        <v-container>
            <v-row :align="alignment"
                   :justify="justify">
                <v-col cols="12"
                       md="8"
                       class="text-center"
                       style="font-family: Verdana">
                    <p class="display-2">Verwalte deine Abos</p>
                </v-col>
                <v-col cols="12"
                       md="6"
                       class="text-center">
                    <p style="font-family: Verdana">Ob Spotify, Netflix oder einfach die Tageszeitung. <br>Weißt du wie viel Geld du monatlich für Abonnements ausgibst? <br> Nein? Wir wollen euch Abhilfe verschaffen. <br></p>
                    <p style="font-family: Verdana"> Und so geht’s: <br> Du trägst deine Abos ein, gibst an wann dein Abo gestartet hat, ob du dein Abo mit jemand teilst und ob du einen Alarm für deine Kündigung möchtest. In der Übersicht kannst du dann sehen wie viel du monatlich ausgibst.</p>
                </v-col>
            </v-row>
            <v-row :align="alignment"
                   :justify="justify">
                <v-col cols="6"
                       md="2"
                       style="font-family: Verdana">
                    <v-btn normal router to="/login" class="purple darken-3" dark>Login</v-btn>
                </v-col>
                <v-col cols="6"
                       md="2"
                       style="font-family: Verdana">
                    <v-btn normal router to="/registrieren" class="purple darken-3" dark>Registrieren</v-btn>
                </v-col>
            </v-row >
            <v-footer :align="alignment"
                      :justify="justify"
            >
                <v-col cols="12"
                       md="6"
                       class="text-center"
                       style="font-family: Verdana">
                    <v-btn text router to="/Datenschutz" class="caption"> Datenschutz </v-btn>
                </v-col>
                <v-col cols="12"
                       md="6"
                       class="text-center"
                       style="font-family: Verdana">
                    <v-btn text router to="/Impressum" class="caption"> Impressum </v-btn>
                </v-col>
            </v-footer>
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