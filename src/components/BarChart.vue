<template>
    <div id="chart">
        <h1>graph</h1>

        <apexchart
            width="500"
            type="bar"
            :options="chartOptions"
            :series="series"
        ></apexchart>
    </div>
</template>
<script>
export default {
    data() {
        return {
            chartOptions: {
                chart: {
                    id: 'vuechart-example',
                },
                xaxis: {
                    categories: [
                        1991,
                        1992,
                        1993,
                        1994,
                        1995,
                        1996,
                        1997,
                        1998,
                    ],
                },
            },
            series: [
                {
                    name: 'series-1',
                    data: [30, 40, 35, 50, 49, 60, 70, 91],
                },
            ],
        };
    },

    props: ['tableData'],
};
</script>
<style></style>
