<template>
    <div>
        <fieldset>
            <h1>Abo bearbeiten <br></h1>
            Anbieter wählen: <br>
            <select name="cars">
                <v-system-bar></v-system-bar>
                <option value="netflix">Netflix</option>
                <option value="amazon">Amazon</option>
                <option value="disney+">Disney+</option>
                <option value="Anderer">Anderer</option>np
            </select><br>
            Eigenen Anbieter hinzufügen:<br>
            <input type="text">
            <br><br>
            Währung<br>
            <input type="radio" name="währung" value="male" checked> Euro<br>
            <input type="radio" name="währung" value="female"> Dollar<br>
            <input type="radio" name="währung" value="other"> Franken<br><br>
            Startdatum:<br>
            <input type="date" value="2018-09-17"><br><br>
            Laufzeit:<br>
            <input type="date" value="2020-09-17"><br><br>
            Kosten<br>
            <input type="number" value="8" min="0" step="0.01"><br><br>
            Benutzer<br>
            <input type="number" value="1" name="bentzer" min="1" max="4"><br><br>
            Kündigungsfrist<br>
            <input type="number" name="kündigungsfrist" value="4" min="0" step="1"> Wochen<br><br><br>
            <input type="submit" value="Speichern"> /
            <input type="reset" value="Abbrechen">
        </fieldset>
    </div>
</template>


<script>
    export default {
        name: "abobearbeiten"
    }
</script>

<style scoped>

</style>