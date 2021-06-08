<template>
    <a-select
        mode="multiple"
        placeholder="Please select country(s)"
        :value="selectedItems"
        style="width: 50%"
        @change="handleChange"
    >
        <a-select-option
            v-for="item in filteredOptions"
            :key="item"
            :value="item"
        >
            {{ item }}
        </a-select-option>
    </a-select>
</template>
<script>
import { countryList } from '../utils/countryList.js';
const OPTIONS = countryList.map((obj) => {
    return obj.Country;
});
export default {
    data() {
        return {
            selectedItems: [],
        };
    },
    computed: {
        filteredOptions() {
            return OPTIONS.filter((o) => !this.selectedItems.includes(o));
        },
    },
    methods: {
        handleChange(selectedItems) {
            this.selectedItems = selectedItems;
            this.$emit('selected', selectedItems);
        },
    },
};
</script>
