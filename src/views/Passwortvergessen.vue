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
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="red"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>Passwort vergessen?  </v-toolbar-title>
                                <v-spacer/>

                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            label="E-Mail Adresse:"
                                            name="mailadresse"
                                            prepend-icon="mdi-textbox-password"
                                            type="text"
                                    />


                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer/>

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