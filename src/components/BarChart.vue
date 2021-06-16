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
                    data: this.dataObject.activeArr,
                },
                {
                    name: 'Deaths',
                    data: this.dataObject.deathsArr,
                },
                {
                    name: 'Recoveries',
                    data: this.dataObject.recoveriesArr,
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
    props: ['selected', 'dataObject'],
    watch: {
        selected: function(newSelected) {
            this.chartOptions.xaxis.categories = newSelected;
        },
        dataObject: function(newDataObject) {
            this.series[0].data = newDataObject.activeArr;
            this.series[1].data = newDataObject.deathsArr;
            this.series[2].data = newDataObject.recoveriesArr;
        },
    },
};
</script>
<style scoped>
.chart-wrapper {
    padding: 20px;
}
</style>
