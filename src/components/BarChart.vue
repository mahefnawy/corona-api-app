<template>
    <div class="chart-wrapper">
        <apexchart
            :key="selected"
            type="bar"
            height="350"
            :options="chartOptions"
            :series="series"
        ></apexchart>
    </div>
</template>
<script>
export default {
    data() {
        return {
            series: [
                {
                    name: 'Active',
                    data: this.activeData,
                },
                {
                    name: 'Deaths',
                    data: this.deathsData,
                },
                {
                    name: 'Recoveries',
                    data: this.recoveriesData,
                },
            ],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                    toolbar: {
                        show: true,
                    },
                    zoom: {
                        enabled: true,
                    },
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            legend: {
                                position: 'bottom',
                                offsetX: -10,
                                offsetY: 0,
                            },
                        },
                    },
                ],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        borderRadius: 10,
                    },
                },
                xaxis: {
                    type: 'countryNames',
                    categories: this.selected,
                },
                legend: {
                    position: 'right',
                    offsetY: 40,
                },
                fill: {
                    opacity: 1,
                },
            },
        };
    },
    props: ['selected', 'activeData', 'deathsData', 'recoveriesData'],
    watch: {
        selected: function(newSelected) {
            this.chartOptions.xaxis.categories = newSelected;
        },
        activeData: function(newActiveData) {
            this.series[0].data = newActiveData;
        },
        deathsData: function(newDeathsData) {
            this.series[1].data = newDeathsData;
        },
        recoveriesData: function(newRecoveriesData) {
            this.series[2].data = newRecoveriesData;
        },
    },
};
</script>
<style scoped>
.chart-wrapper {
    padding: 20px;
}
</style>
