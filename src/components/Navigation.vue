<template>
    <header>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light scrolling-navbar">
            <a class="navbar-brand" href="#"><strong>NanoBet.co</strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" v-bind:class="{'active': $route.name === 'Home'}">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item" v-bind:class="{'active': $route.name === 'PublicPools'}">
                        <router-link class="nav-link" to="/pools/public">Public Pools</router-link>
                    </li>
                    <li class="nav-item" v-bind:class="{'active': $route.name === 'CreatePrivatePool'}">
                        <router-link class="nav-link" to="/pools/create">Create Private Pool</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "navigation"
    }
</script>

<style scoped>

</style>