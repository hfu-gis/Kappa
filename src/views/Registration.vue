<template>
    <v-form ref="form" v-model="valid">
        <v-row v-if="success" align="center" justify="center">
            <v-card elevation="10">
                <v-img src="http://picsum.photos/200"
                       class="white--text align-end"
                       gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                    <v-card-title v-text>Registration<br/>successful</v-card-title>
                </v-img>
            </v-card>
        </v-row>
        <v-row v-else align="top" justify="center">
            <v-col cols="12" md="6">
                <v-text-field label="Nickname" v-model="userData.nickName" required maxlength="25"
                              :disabled="this.userData.isAlreadyRegistered"
                              :rules="nameRules"/>
                <v-text-field label="Password" v-model="userData.password" required  maxlength="25"
                              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="showPassword ? 'text' : 'password'"
                              @click:append="showPassword = !showPassword"
                              :rules="nameRules"
                />
                <v-text-field label="Name" v-model="userData.name" required  maxlength="25"
                              :rules="nameRules"/>
                <v-text-field label="Family name" v-model="userData.familyName" required  maxlength="25"
                              :rules="nameRules"/>
            </v-col>

            <v-col cols="12" sm="6" md="6">
                <v-text-field label="Street" v-model="userData.streetName" required
                              :rules="nameRules"/>
                <v-text-field label="No" v-model="userData.streetNr" required
                              :rules="nameRules"/>
                <v-text-field label="ZIP" v-model="userData.zipCode" required
                              :rules="nameRules"/>
                <v-text-field label="City" v-model="userData.city" required
                              :rules="nameRules"/>
                <v-select label="Country" :items="countries" v-model="userData.country" required clearable
                          :rules="selectionRules"
                />
            </v-col>
            <v-btn text outlined shaped
                   @click="validate">Register
            </v-btn>

        </v-row>
    </v-form>
</template>

<script>
    import db from '../db'
    export default {
        props: {},
        data: () => ({
            success: false,
            valid: true,
            showPassword: false,
            Abos: {
                Abo_1: 'Netflix',
                Abo2: 'Spotify',
                Abo3: 'Prime',
                Abo4: 'Deezer',
                Abo5: 'Fitnessstudio',
                Abo6: 'Adobe Suite',
                Abo7: 'AppleMusic',
                Abo8: 'Handyvertrag',
                Abo9: 'Youtube Premium',
                Abo10: 'Disney+',
                Abo11: 'Maxdome',
                Abo12: 'Sky',
                Abo13: 'Google Play Music',
                Abo14: 'Soundcloud',
            },
            countries: [],
            nameRules: [
                value => (!!value && value.trim().length > 0) || 'Field is required',
                value => (value && value.length <= 25) || 'Field must be less than 25 characters',
            ],
            selectionRules: [
                value => !!value || 'Field is required'
            ]
        }),
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    console.debug('Validation success')
                    this.register()
                }
            },
            register()  {
                this.userData.isAlreadyRegistered = true
                let docRef = db.collection('User').doc( this.userData.nickName)
                docRef.set(this.userData)
                    .catch(error => console.debug('Error', error))
                    .then(() => this.success = true)
                // docRef.update(userData)
            }
        },
        created() {
            let docRef = db.collection('Abos')
            docRef.get().then(docs => {
                docs.forEach(doc => this.countries.push(doc.data().name))
            })
            docRef = db.collection('User').doc('')
            docRef.get().then(doc => this.userData = doc.data())
        }
    }
</script>