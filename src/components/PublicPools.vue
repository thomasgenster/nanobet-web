<template>
    <div class="row">
        <div class="col-md-4" v-for="pool in pools">
            <pool
                v-bind:pool="pool"
                v-bind:key="pool.id">
            ></pool>

        </div>
    </div>
</template>

<script>
    import ApiService from "../lib/api/Api";
    import Pool from "./items/Pool";

    const Api = new ApiService();

    export default {
        name: "public-pools",
        components: {Pool},
        data () {
            return {
                pools: [],
            }
        },
        created () {
            // fetch the data when the view is created and the data is
            // already being observed
            this.getPools()
        },
        watch: {
            // call again the method if the route changes
            '$route': 'PublicPools'
        },
        methods: {
            getPools: function(){
                Api.getPublicPools().then((pools) => {
                    this.pools = pools;
                });
            },
        }
    }
</script>

<style scoped>

</style>