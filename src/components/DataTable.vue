<template>
    <a-table
        class="data-table"
        :columns="tableColumns"
        :data-source="tableData"
        :loading="tableLoading"
        :pagination="false"
    >
        <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
</template>
<script>
import { tableColumns } from '../utils/tableColumns.js';

export default {
    data() {
        return {
            tableColumns,
        };
    },
    props: ['tableData', 'tableLoading'],
};
</script>
<style>
.data-table {
    padding: 20px;
}
table tr:last-child {
    background-color: #fbfbfb;
    font-weight: bold;
}
</style>
