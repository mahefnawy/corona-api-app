<template>
    <div class="">
        <h1>{{ msg }}</h1>
        <SwitchRadio @clicked="onSwitchViewClick" />
        <CountrySelect />
        <h1 v-if="currentView === 'table'">Table</h1>
        <h1 v-else>Graph</h1>
    </div>
</template>

<script>
import SwitchRadio from './SwitchRadio.vue';
import CountrySelect from './CountrySelect.vue';
export default {
    data() {
        return {
            currentView: 'table',
        };
    },
    name: 'MainPage',
    components: {
        SwitchRadio,
        CountrySelect,
    },
    props: {
        msg: String,
    },
    methods: {
        onSwitchViewClick(value) {
            this.currentView = value;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
