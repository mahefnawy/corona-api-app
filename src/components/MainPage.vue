<template>
    <div class="">
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
        onSelectCountries(value) {
            let allApiData = this.apiData;
            let selectedCountries = value;
            let tableData = [];
            let activeArr = [];
            let deathsArr = [];
            let recoveriesArr = [];
            let totalActive = 0;
            let totalDeaths = 0;
            let totalRecoveries = 0;
            let totalDataObj;
            this.selected = selectedCountries;

            selectedCountries.map((countryString, selectedIndex) => {
                allApiData.Countries.map((apiCountryObj) => {
                    if (apiCountryObj.Country === countryString) {
                        let countryData = {
                            key: selectedIndex,
                            countryName: apiCountryObj.Country,
                            active: apiCountryObj.TotalConfirmed,
                            deaths: apiCountryObj.TotalDeaths,
                            recoveries: apiCountryObj.TotalRecovered,
                        };

                        tableData.push(countryData);
                        activeArr.push(countryData.active);
                        deathsArr.push(countryData.deaths);
                        recoveriesArr.push(countryData.recoveries);
                    }
                });
            });

            tableData.map((tableDataObject) => {
                totalActive += parseInt(tableDataObject.active);
                totalDeaths += parseInt(tableDataObject.deaths);
                totalRecoveries += parseInt(tableDataObject.recoveries);
            });
            if (tableData.length > 0) {
                totalDataObj = {
                    key: tableData.length + 1,
                    countryName: 'Total',
                    active: totalActive,
                    deaths: totalDeaths,
                    recoveries: totalRecoveries,
                };
                tableData.push(totalDataObj);
            }

            this.tableData = tableData;
            this.activeData = activeArr;
            this.deathsData = deathsArr;
            this.recoveriesData = recoveriesArr;
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
