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
                    data: this.dataModel.activeArr,
                },
                {
                    name: 'Deaths',
                    data: this.dataModel.deathsArr,
                },
                {
                    name: 'Recoveries',
                    data: this.dataModel.recoveriesArr,
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
    props: ['selected', 'dataModel'],
    watch: {
        selected: function(newSelected) {
            this.chartOptions.xaxis.categories = newSelected;
        },
        dataModel: function(newDataModel) {
            this.series[0].data = newDataModel.activeArr;
            this.series[1].data = newDataModel.deathsArr;
            this.series[2].data = newDataModel.recoveriesArr;
        },
    },
};
</script>
<style scoped>
.chart-wrapper {
    padding: 20px;
}
</style>
