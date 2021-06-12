<template>
    <div class="switch-view-wrapper">
        <a-radio-group v-model="currentView" @change="onSwitchViewClick">
            <a-radio-button value="table">
                Table view
            </a-radio-button>
            <a-radio-button value="graph">
                Graph view
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
<style>
.switch-view-wrapper {
    padding: 20px;
}
</style>
