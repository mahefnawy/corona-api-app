<template>
    <a-table
        :columns="tableColumns"
        :data-source="tableData"
        :loading="tableLoading"
    >
        <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
</template>
<script>
import { tableColumns } from '../utils/tableColumns.js';
import { mockData } from '../utils/mockData.js';

export default {
    data() {
        return {
            mockData,
            tableColumns,
        };
    },
    props: ['tableData', 'tableLoading'],
};
</script>
