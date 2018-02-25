<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{pool.name}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Pool: {{pool.buyin * pool.participants}} NANO</h6>
            <p class="card-text">
                {{pool.participants}} participants<br>
                Buy-in: {{pool.buyin}} NANO
            </p>
            <button v-on:click="join(pool)" class="btn btn-sm btn-success">Join Bet</button>
            <router-link to="/" class="btn btn-sm btn-info">Info</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['pool'],
        name: "pool",

        methods: {
            join: function(pool){
                alert('Joined '+ pool.name);
            },
        }
    }
</script>

<style scoped>

</style>