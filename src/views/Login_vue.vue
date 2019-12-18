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
                                <v-form
                                        id="form"
                                        @submit.prevent="verifyLogin"
                                >
                                    <v-text-field
                                            label="Login"
                                            name="login"
                                            v-model="login"
                                            prepend-icon="mdi-account"
                                            type="text"
                                            :class="errorClassL"
                                    />

                                    <v-text-field
                                            id="password"
                                            label="Password"
                                            name="password"
                                            v-model="password"
                                            prepend-icon="mdi-textbox-password"
                                            type="password"
                                            :class="errorClassP"
                                    />
                                    <v-spacer/>
                                    <v-btn type="submit" color="purple darken-3" dark>
                                        Login
                                    </v-btn>
                                    <a href="/#/Passwortvergessen">Passwort vergessen?</a>
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
            source: String
        },
        data() {
            return{
                login: null,
                password: null,
                errorClassP: "",
                errorClassL: ""
            }
        }
        ,
        methods: {
            verifyLogin: function (e) {
                if(this.login == "user" && this.password == "password"){
                    this.$router.push('/Übersicht');
                    return true;
                } else if(this.password != "password" && this.login != "user"){
                    this.errorClassL = "input-error-login"
                    this.errorClassP = "input-error-psw"
                    e.preventDefault();
                } else if(this.login != "user"){
                    this.errorClassL = "input-error-login";
                    e.preventDefault();
                } else if(this.password != "password"){
                    this.errorClassP = "input-error-psw"
                    e.preventDefault();
                }
            }
        }
    }

</script>

<style scoped>

    a{
        float: right;
    }
    .input-error-login{
        border: 2px solid red;
        -webkit-animation: shake .6s linear;
    }
    .input-error-login::after{
        position: relative;
        content: "Falscher Login";
        color: red;
        width: 500px;
        top: 35px;
    }
    .input-error-psw{
        border: 2px solid red;
        -webkit-animation: shake .6s linear;
    }
    .input-error-psw::after{
        position: relative;
        content: "Falsches Passwort";
        color: red;
        width: 500px;
        top: 35px;
    }

    @-webkit-keyframes shake{
        8%, 41% {
            -webkit-transform: translateX(-10px)
        }
        25%, 58%{
            -webkit-transform: translateX(10px)
        }
        75%{
            -webkit-transform: translateX(-5px)
        }
        92%{
            -webkit-transform: translateX(5px)
        }
        0%,100%{
            -webkit-transform: translateX(0)
        }
    }

</style>