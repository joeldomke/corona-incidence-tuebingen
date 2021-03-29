<template>
  <div id="home">
    <h1>Corona 7 Tage Inzidenz Tübingen</h1>
    <div id="filter-container">
      <div id="filter-header"
           @click="showFilters = !showFilters">
        <div>
          Filter
        </div>
        <div class="triangleContainer">
          <div class=triangle :class="[showFilters ? 'up': '']"></div>
        </div>
      </div>
      <div id="filter-list"
           v-if="showFilters">
        <div class="filter-category">
          <div class="filter-category-headline">
            Gemeinden:
          </div>
          <div class="filter-category-content">
            <div id="city-filters">
              <div v-for="possibleTimeline in possibleTimelines"
                   :key="possibleTimeline"
                   @click="changeTimelineSelection(possibleTimeline)"
                   class="filterCheckbox"
                   :class="[selectedTimelines.includes(possibleTimeline) ? 'selected' : '']">
                {{ possibleTimeline }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <line-chart class="chart" :chart-data="chartData" :options="chartOptions"></line-chart>
    <h4>Quellen:</h4>
    <ul>
      <li>Einwohnerzahlen: <a href="https://www.statistik-bw.de/BevoelkGebiet/Bevoelk_I_D_A_vj.csv">Statistisches Landesamt Baden‑Württemberg</a></li>
      <li>Infektionszahlen: <a href="https://www.kreis-tuebingen.de/17094149.html">Landkreis Tübingen</a></li>
    </ul>
  </div>
</template>

<script>
import LineChart from '../components/LineChart'
import { getCoronaData } from "@/data/corona_data";
import { getInhabitantData } from "@/data/inhabitant_data";
import MenuIcon from 'vue-material-design-icons/Menu.vue';

export default {
  name: 'Home',
  components: {
    MenuIcon,
    LineChart
  },
  data () {
    return {
      chartData: {},
      datasets: {},
      showFilters: true,
      selectedTimelines: [
          'Tübingen',
      ],
      possibleTimelines: [],
      chartOptions: {
        animation: {
          duration: 0
        },
        maintainAspectRatio: false,
        legend: {
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 0
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.fillData();
    this.filterDatasets();
  },
  methods: {
    fillData: function () {
      const coronaData = getCoronaData();
      const inhabitantData = getInhabitantData();

      // add new data points to snapshots and extend inhabitantData
      const extendedCoronaData = [];
      const extendedInhabitantData = inhabitantData;

      // extend inhabitantData
      const LKTuebingenInhabitants = 0;


      coronaData.forEach(snapshot => {
        // add LK Tübingen without city Tübingen to snapshot


        // add LK Tübingen to snapshot


        extendedCoronaData.push(snapshot);
      })

      // create timeline object
      const timelines = {}
      extendedCoronaData.forEach((snapshot) => {
        //for each datapoint check if timeline exists
        const dataPoints = snapshot.dataPoints;
        dataPoints.forEach((dataPoint) => {
          if (!timelines[dataPoint.name]) {
            timelines[dataPoint.name] = {
              newCases: [],
              cumulativeCases: [],
            };
          }
        })
      });

      // write data from snapshots into the timeline
      const timelineNames = Object.keys(timelines);

      this.possibleTimelines = timelineNames;

      extendedCoronaData.forEach((snapshot) => {
        // for each key in timeline check if snapshot has relevant data
        timelineNames.forEach((key) => {
          // lookup datapoint with the same name as the key
          const dataPoints = snapshot.dataPoints.filter(dataPoint => dataPoint.name === key);
          if (dataPoints.length > 0) {
            timelines[key].newCases.push(dataPoints[0].newCases);
            timelines[key].cumulativeCases.push(dataPoints[0].cumulativeCases);
          } else {
            timelines[key].newCases.push(null);
            timelines[key].cumulativeCases.push(null);
          }
        });
      });

      // create chart labels
      const chartLabels = [];
      extendedCoronaData.forEach(snapshot => {
        chartLabels.push(snapshot.date);
      })

      // convert timeline into dataset
      this.datasets = [];
      timelineNames.forEach(timelineName => {
        const inhabitants = extendedInhabitantData[timelineName].inhabitants;
        const randomColor = this.randomColor();
        this.datasets.push({
          label: timelineName,
          data: timelines[timelineName].newCases
              .map(datapoint => datapoint !== null ? this.round(datapoint / inhabitants * 100000) : null),
          lineTension: 0,
          fill: false,
          spanGaps: true,
          pointRadius: 4,
          borderColor: randomColor,
          backgroundColor: randomColor
        });
      });

      this.chartData = {
        labels: chartLabels,
        datasets: this.datasets,
      }

    },
    randomColor() {
      return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    },
    changeTimelineSelection(timelineName) {
      if (this.selectedTimelines.includes(timelineName)) {
        this.selectedTimelines = this.selectedTimelines.filter(name => name !== timelineName);
      } else {
        this.selectedTimelines.push(timelineName);
      }
      this.filterDatasets();
    },
    filterDatasets() {
      this.chartData = {
        labels: this.chartData.labels,
        datasets: this.datasets.filter(dataset => this.selectedTimelines.includes(dataset.label))
      }
      console.log(this.chartData);
    },
    round(num, digits = 1) {
      return Math.round(num * Math.pow(10, digits)) / Math.pow(10, digits)
    },
    sumArrays(arrays) {
      const n = arrays.reduce((max, xs) => Math.max(max, xs.length), 0);
      const result = Array.from({ length: n });
      return result.map((_, i) => arrays.map(xs => xs[i] || 0).reduce((sum, x) => sum + x, 0));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chart {
  max-height: 500px;
  margin-bottom: 3rem;
}
#home {
  padding: 1rem;
}
#filter-container {
  border-radius: 0.25rem;
  overflow: hidden;
  padding: 0 1rem;
  .icon {
    width: 1em;
  }
  margin-bottom: 1rem;
  background-color: darkgray;
}
#filter-header {
  display: flex;
  padding: 1rem 0;
  font-weight: bold;
  .triangleContainer {
    margin-left: auto;
  }
}
#filter-list {
}
.filter-category {
  margin-bottom: 1rem;
}
.filter-category-headline {
  font-weight: bold;
}
.filter-category-content {

}
#city-filters {
  display: flex;
  flex-wrap: wrap;
}
#time-filter {
  min-height: 3rem;
  background-color: lightgray;
}
.filterCheckbox {
  background-color: white;
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem 0.5rem 0.25rem 0rem;
  width: auto;
  cursor: default;
}
.filterCheckbox.selected {
  background-color: black;
  color: white;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
h4 {
  margin: 0.25rem 0;
}
a {
  color: #42b983;
}
.triangle {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid black;
  transition: .5s ease;
}
.triangle.up {
  transform:rotate(180deg);
}
</style>
