<template>
    <div class="">
        <h1>{{ msg }}</h1>
        <SwitchRadio @clicked="onSwitchViewClick" />
        <CountrySelect @selected="onSelectCountries" />
        <DataTable v-if="currentView === 'table'" />
        <h1 v-else>Graph</h1>
    </div>
</template>

<script>
import SwitchRadio from './SwitchRadio.vue';
import CountrySelect from './CountrySelect.vue';
import DataTable from './DataTable.vue';
export default {
    data() {
        return {
            currentView: 'table',
            selected: [],
            apiData: '',
        };
    },
    name: 'MainPage',
    components: {
        SwitchRadio,
        CountrySelect,
        DataTable,
    },
    props: {
        msg: String,
    },
    beforeMount() {
        this.getData();
    },
    methods: {
        onSwitchViewClick(value) {
            this.currentView = value;
        },
        onSelectCountries(value) {
            this.selected = value;
            console.log(this.selected);
        },
        async getData() {
            const res = await fetch('https://api.covid19api.com/summary');
            const data = await res.json();
            this.apiData = data;
            console.log(this.apiData);
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
