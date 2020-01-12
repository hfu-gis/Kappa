<template>
    <div>
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
            <v-breadcrumbs></v-breadcrumbs>
            <v-breadcrumbs></v-breadcrumbs>
            <v-container>

                <v-row>
                    <v-col>
                        <v-treeview
                                v-model="selection"
                                :items="items"
                                :selection-type="selectionType"
                                selectable
                                return-object
                                open-all
                        ></v-treeview>
                        <v-btn normal router to="/Übersicht" class="purple darken-3" dark>Speichern</v-btn>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col class="pa-6" cols="6">
                        <template v-if="!selection.length">
                            Keine Auswahl getroffen.
                        </template>
                        <template v-else>
                            <div v-for="node in selection" :key="node.id">
                                {{ node.name }}
                            </div>
                        </template>
                    </v-col>
                </v-row>

            </v-container>
        </v-app>
    </div>
</template>

<script>
    export default {
        data: () => ({
            selection: [],
            items: [
                {
                    id: 1,
                    name: 'Anbieter',
                    children: [
                        { id: 2, name: 'Netflix' },
                        { id: 3, name: 'Spotify' },
                        { id: 4, name: 'Amamzon Prime' },
                    ],
                },
                {
                    id: 5,
                    name: 'Anzahl der Nutzer',
                    children: [
                        { id: 6, name: '2' },
                        { id: 7, name: '3' },
                        { id: 8, name: '4' },
                    ],
                },
                {
                    id: 9,
                    name: 'Startdatum',
                    children: [
                        { id: 10, name: '01.01.2020' },
                        { id: 11, name: '25.03.2019' },
                        { id: 12, name: '15.09.2019' },
                    ],
                },
                {
                    id: 13,
                    name: 'Abbuchungsdatum jeden Monats',
                    children: [
                        { id: 14, name: '1.' },
                        { id: 15, name: '24.' },
                        { id: 16, name: '17.' },
                    ],
                },
                {
                    id: 17,
                    name: 'Kündigungsfrist',
                    children: [
                        { id: 18, name: '2 Wochen' },
                        { id: 19, name: '3 Wochen' },
                        { id: 20, name: '5 Wochen' },
                    ],
                },
                {
                    id: 21,
                    name: 'Kosten pro Monat',
                    children: [
                        { id: 22, name: '10.00€' },
                        { id: 23, name: '20.00€' },
                        { id: 24, name: '4.99€' },
                    ],
                },
            ],
        }),
    }
</script>
<style scoped>

</style>