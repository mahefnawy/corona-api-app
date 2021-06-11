import Vue from 'vue';
import Antd from 'ant-design-vue';
import VueApexCharts from 'vue-apexcharts';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

new Vue({
    render: (h) => h(App),
}).$mount('#app');
