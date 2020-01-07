<template>
    <v-card
            max-width="10000"
            outlined
    >
        <v-list-item three-line>
            <v-list-item-content>
                <div class="overline mb-4">OVERLINE</div>
                <v-list-item-title class="headline mb-1">Abo Bearbeiten</v-list-item-title>
                <v-list-item-subtitle>Anbieter wählen: Abo </v-list-item-subtitle>
                <v-list-item-subtitle>Währung wählen: Euro</v-list-item-subtitle>
                <v-list-item-subtitle>Startdatum: 01.01.2020</v-list-item-subtitle>
                <v-list-item-subtitle>Laufzeit: 1 Jahr</v-list-item-subtitle>
                <v-list-item-subtitle>Kosten: 10 Euro</v-list-item-subtitle>

            </v-list-item-content>


        </v-list-item>

        <v-card-actions>
            <v-btn text>Speichern</v-btn>
            <v-btn text>Abbrechen</v-btn>
        </v-card-actions>
    </v-card>
</template>


<script>
    export default {
        name: "abobearbeiten"
    }

</script>

<style scoped>

</style>
