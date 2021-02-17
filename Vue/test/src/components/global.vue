<template>
    <div class="globalArea">
        <header>
            <h1>
                <router-link to="">
                    <img src="../images/logo.png" alt="logo">
                </router-link>
            </h1>
            <h2>HOME</h2>
            <button>CONTACT</button>
        </header>

        <aside>
            <button>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav>
                <ul>
                    <li>
                        <router-link to="home">HOME</router-link>
                    </li>
                    <li>
                        <router-link to="brand">BRAND</router-link>
                    </li>
                    <li>
                        <router-link to="channel">CHANNEL</router-link>
                    </li>
                    <li>
                        <router-link to="magazines">MAGAZINES</router-link>
                    </li>
                </ul>
            </nav>
        </aside>

        <footer>

        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>