
<br><br><br><br>
<br><br><br><br>
<template>
    <div>
        <form>
            <fieldset>
                <h1>Abo anlegen <br></h1>
                Anbieter<br>
                <select name="cars">
                    <option value="neflix">Neflix</option>
                    <option value="amazon">Amazon</option>
                    <option value="disney+">Disney+</option>
                    <option value="Anderer">Anderer</option>
                </select><br><br>
                <input type="text">
                <br><br>
                Währung<br>
                <input type="radio" name="währung" value="male" checked> Euro<br>
                <input type="radio" name="währung" value="female"> Dollar<br>
                <input type="radio" name="währung" value="other"> Franken<br><br>
                Startdatum<br>
                <input type="date" value="2019-01-01"><br><br>
                Laufzeit<br>
                <input type="date" value="2020-01-01"><br><br>
                Kosten<br>
                <input type="number" value="10" min="0" step="0.01"><br><br>
                Benutzer<br>
                <input type="number" value="1" name="bentzer" min="1" max="4"><br><br>
                Kündigungsfrist<br>
                <input type="number" name="kündigungsfrist" value="4" min="0" step="1"> Wochen<br><br>
                <input type="submit" value="Bestätigen">
                <input type="reset" value="Zurücksetzen">
            </fieldset>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Abo_anlegen"
    }
</script>

<style scoped>

</style>