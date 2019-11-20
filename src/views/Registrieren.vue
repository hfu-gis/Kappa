<template>
    <vue>
        <div class="container">
            <h1>Registrierung</h1>
            <p>Bitte die Felder ausfüllen um einen Account zu erstellen</p>
            <hr>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
            <hr>

            <p>Durch erstellen des Accounts stimmen sie unseren <a href="#">AGBs</a> zu.</p>
            <button type="submit" class="registerbtn">Registrieren</button>
        </div>

        <div class="container signin">
            <p>Du hast schon einen Account? <a href="login.html">Login</a>.</p>
        </div>
        </form>
    </vue>
</template>

<script>
    export default {
        name: "Registrieren"
    }
</script>

<style scoped>

</style>