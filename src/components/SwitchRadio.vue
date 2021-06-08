<template>
    <div>
        <a-radio-group v-model="currentView" @change="onSwitchViewClick">
            <a-radio-button value="table">
                Table View
            </a-radio-button>
            <a-radio-button value="graph">
                Graph View
            </a-radio-button>
        </a-radio-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentView: 'table',
        };
    },
    methods: {
        onSwitchViewClick(e) {
            this.currentView = e.target.value;
            this.$emit('clicked', e.target.value);
        },
    },
};
</script>
<style scoped></style>
