import { Line, mixins } from 'vue-chartjs'
import moment from "moment";
const { reactiveProp } = mixins

export default {
    extends: Line,
    mixins: [reactiveProp],
    props: ['options'],
    mounted () {
        // this.chartData is created in the mixin.
        // If you want to pass options please create a local options object
        const locale = window.navigator.userLanguage || window.navigator.language;
        moment.locale(locale);
        this.renderChart(this.chartData, this.options)
    }
}