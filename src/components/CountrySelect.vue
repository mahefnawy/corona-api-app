<template>
    <a-select
        class="country-select"
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
const OPTIONS = countryList.map((countryObj) => {
    return countryObj.Country;
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
<style>
.country-select {
    padding: 20px;
}
</style>
