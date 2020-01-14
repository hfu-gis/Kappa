<template>
    <v-col>
        <v-card>
            <v-card-text class="headline font-weight-bold" v-model="name">
                {{ name }}
            </v-card-text>
        </v-card>
    <div>
        <v-breadcrumbs></v-breadcrumbs>
        <v-data-table
                :headers="headers"
                :items="Abonnements"
                :items-per-page="10"
                class="elevation-1"
        ></v-data-table>
        <v-btn normal router to="/abo_anlegen" class="purple darken-3" style="font-family: Verdana"dark>Hinzufügen</v-btn>
        <v-app>
            <v-app-bar app
                       color="purple darken-3"
                       dark
                       height="50">
                <router-link to="/Übersicht">
                    <v-img src="../assets/images/logo.png"
                        max-height="100"
                        max-width="100"
                        contain>
                    </v-img>
                </router-link>
            </v-app-bar>
            <v-main>
                <v-app>
                    <router-view></router-view>
                </v-app>
            </v-main>
        </v-app>
    </div>
    </v-col>
</template>

<script>
    export default {
        data () {
            return {
                headers: [
                    {
                        text: 'Anbieter',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Startdatum', value: 'startdatum' },
                    { text: 'Anzahl der Nutzer', value: 'anzahldernutzer' },
                    { text: 'Abbuchungsdatum (jeden Monats)', value: 'abbuchungsdatumjedenmonats' },
                    { text: 'Kündigunsfrist (in Wochen)', value: 'kündigungsfristinwochen' },
                    { text: 'Kosten pro Monat', value: 'kostenpromonat' },
                    { text: '', value: 'bearbeiten' },
                ],
                Abonnements: [
                    {
                        name: 'Netflix',
                        startdatum: 17.01,
                        kostenpromonat: 10.00,
                        anzahldernutzer: 2,
                        abbuchungsdatumjedenmonats: 24.,
                        kündigungsfristinwochen: 5,
                        bearbeiten: <v-btn normal router to="/Abo_anlegen">
                        <v-icon dark>mdi-wrench</v-icon>
                    </v-btn>,
            },
            {
                name: 'Spotify',
                startdatum: 17.01,
                kostenpromonat: 10.00,
                anzahldernutzer: 2,
                abbuchungsdatumjedenmonats: 24.,
                kündigungsfristinwochen: 5,
                bearbeiten: <v-btn normal router to="/Abo_anlegen">
                <v-icon dark>mdi-wrench</v-icon>
            </v-btn>,
        },
            {
                name: 'Amazon Prime',
                    startdatum: 17.01,
                kostenpromonat: 10.00,
                anzahldernutzer: 2,
                abbuchungsdatumjedenmonats: 24.,
                kündigungsfristinwochen: 5,
                bearbeiten: <v-btn normal router to="/Abo_anlegen">
                <v-icon dark>mdi-wrench</v-icon>
            </v-btn>,
            },
            {
                name: 'Deezer',
                    startdatum: 17.01,
                kostenpromonat: 10.00,
                anzahldernutzer: 2,
                abbuchungsdatumjedenmonats: 24.,
                kündigungsfristinwochen: 5,
                bearbeiten: <v-btn normal router to="/Abo_anlegen">
                <v-icon dark>mdi-wrench</v-icon>
            </v-btn>,
            },
            {
                name: 'Apple Music',
                    startdatum: 17.01,
                kostenpromonat: 10.00,
                anzahldernutzer: 2,
                abbuchungsdatumjedenmonats: 24.,
                kündigungsfristinwochen: 5,
                bearbeiten: <v-btn normal router to="/Abo_anlegen">
                <v-icon dark>mdi-wrench</v-icon>
            </v-btn>,
            },
            {
                name: 'Fitnessstudio',
                    startdatum: 17.01,
                kostenpromonat: 10.00,
                anzahldernutzer: 2,
                abbuchungsdatumjedenmonats: 24.,
                kündigungsfristinwochen: 5,
                bearbeiten: <v-btn normal router to="/Abo_anlegen">
                <v-icon dark>mdi-wrench</v-icon>
            </v-btn>,
            },
        ],
        }
        },
    }
</script>

<style scoped>

</style>