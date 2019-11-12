<template>
    <div>
        <h1>Abos hinzufügen</h1> <br>

        <p>
        <form action="/action_page.php">
            <select name="Abos" size="4" multiple>
                <option value="Netflix">Volvo</option>
                <option value="Amazon">Saab</option>
                <option value="Audible">Fiat</option>
                <option value="Süddeutsche Zeitung">Audi</option>
            </select>
            <br><br>
            <input type="submit"> </form></p>

        </form>
        <p> <form>
        Abo Name:<br>
        <input type="text" name="Abo Name"><br>
        Kosten pro Monat:<br>
        <input type="text" name="Kosten pro Monat:"><br>
        Startdatum:<br>
        <input type="text" name="Startdatum:"><br>
        Laufzeit:<br>
        <input type="text" name="Laufzeit:"><br>
        Kündigungsfrist:<br>
        <input type="text" name="Kündigungsfrist:"><br>
    </form>  </p>
    </div>


</template>

<script>
    export default {
        name: "Abo"
    }
</script>

<style scoped>

</style>