<template>
    <div class="">
        <h1>{{ msg }}</h1>
        <SwitchRadio @clicked="onSwitchViewClick" />
    </div>
</template>

<script>
import SwitchRadio from './SwitchRadio.vue';
export default {
    data() {
        return {
            currentView: 'table',
        };
    },
    name: 'MainPage',
    components: {
        SwitchRadio,
    },
    props: {
        msg: String,
    },
    methods: {
        onSwitchViewClick(value) {
            this.currentView = value;
            console.log(this.currentView);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
