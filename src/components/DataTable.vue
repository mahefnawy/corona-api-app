<template>
    <a-table :columns="tableColumns" :data-source="mockData">
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
};
</script>
