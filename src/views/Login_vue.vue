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
                                    color="purple darken-3"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>Login</v-toolbar-title>
                                <v-spacer/>

                            </v-toolbar>
                            <v-card-text>
                                <v-form @submit="verifyLogin">
                                    <v-text-field
                                            label="Login"
                                            name="login"
                                            v-model="login"
                                            prepend-icon="mdi-account"
                                            type="text"
                                    />

                                    <v-text-field
                                            id="password"
                                            label="Password"
                                            name="password"
                                            v-model="password"
                                            prepend-icon="mdi-textbox-password"
                                            type="password"
                                    />
                                    <v-spacer/>
                                    <v-btn type="submit" color="purple darken-3" dark>
                                        Login
                                    </v-btn>

                                    <a href="Passwortvergessen.vue" > Passwort vergessen? </a>

                                </v-form>
                            </v-card-text>
                            <v-card-actions>

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
        },
        data: {
            login: null,
            password: null
        },
        methods: {
            verifyLogin: function (e) {
                console.log(this.login);
                if(this.login == "user" && this.password == "password"){
                    this.$router.push('/Übersicht');
                }


            }
        }
    }
</script>