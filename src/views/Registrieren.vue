<template>
    <v-app id="inspire">
        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            sm="8"
                            md="4"
                            style="font-family: Verdana"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="purple darken-3"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>Registrieren </v-toolbar-title>
                                <v-spacer/>

                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            label="Vorname"
                                            name="Vorname"
                                            prepend-icon="mdi-account"
                                            type="text"
                                    />

                                    <v-text-field
                                            label="Nachname"
                                            name="Nachname"
                                            prepend-icon="mdi-account-circle"
                                            type="text"
                                    />
                                    <v-text-field
                                            label="Geburtsdatum"
                                            name="Geburtsdatum"
                                            prepend-icon="mdi-ambulance"
                                            type="text"
                                    />
                                    <v-text-field
                                            label="E-Mailadresse"
                                            name="E-Mailadresse"
                                            prepend-icon="mdi-textbox-password"
                                            type="text"
                                    />
                                    <v-text-field
                                            label="Passwort"
                                            name="Passwort"
                                            prepend-icon="mdi-book-lock"
                                            type="password"
                                    />
                                    <v-text-field
                                            label="Passwort bestätigen"
                                            name="PasswortBestätigen"
                                            prepend-icon="mdi-book-lock"
                                            type="password"
                                    />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn color="purple darken-3" dark to="/Übersicht" >
                                   Registrieren
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        }
    }
</script>