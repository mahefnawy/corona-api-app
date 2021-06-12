<template>
    <div class="main-page-wrapper">
        <h1>{{ msg }}</h1>
        <SwitchRadio @clicked="onSwitchViewClick" />
        <CountrySelect @selected="onSelectCountries" />
        <DataTable
            v-if="currentView === 'table'"
            v-bind:tableData="this.tableData"
        />

        <BarChart
            v-if="currentView === 'graph'"
            v-bind:selected="this.selected"
            v-bind:activeData="this.activeData"
            v-bind:deathsData="this.deathsData"
            v-bind:recoveriesData="this.recoveriesData"
        />
    </div>
</template>

<script>
import SwitchRadio from './SwitchRadio.vue';
import CountrySelect from './CountrySelect.vue';
import DataTable from './DataTable.vue';
import BarChart from './BarChart.vue';
import { dataModulatorService } from '../utils/services.js';
export default {
    data() {
        return {
            currentView: 'table',
            selected: [],
            apiData: [],
            tableData: [],
            activeData: [],
            deathsData: [],
            recoveriesData: [],
        };
    },
    name: 'MainPage',
    components: {
        SwitchRadio,
        CountrySelect,
        DataTable,
        BarChart,
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
        onSelectCountries(selectedCountries) {
            const countriesApiData = this.apiData;
            let dataModel = dataModulatorService(
                selectedCountries,
                countriesApiData
            );

            this.selected = selectedCountries;
            this.tableData = dataModel.tableData;
            this.activeData = dataModel.activeArr;
            this.deathsData = dataModel.deathsArr;
            this.recoveriesData = dataModel.recoveriesArr;
        },
        async getData() {
            const res = await fetch('https://api.covid19api.com/summary');
            const data = await res.json();
            this.apiData = data;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-page-wrapper {
    padding: 20px;
}
</style>
