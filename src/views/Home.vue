<template>
  <div id="home">
    <h1>Landkreis Tübingen 7 Tage Corona Inzidenz</h1>
    <div id="filter-container">
      <div id="filter-header"
           @click="showFilters = !showFilters">
        <div>
          Filter
        </div>
          <font-awesome-icon
              v-if="showFilters"
              class="close-filters"
              icon="times-circle"></font-awesome-icon>
      </div>
      <div id="filter-list"
           v-if="showFilters">
        <div class="filter-category">
          <div class="filter-category-headline">
            Gemeinden:
          </div>
          <div class="filter-category-content">
            <div class="city-filters">
              <div v-for="timelineName in originalTimelines"
                   :key="timelineName"
                   @click="changeTimelineSelection(timelineName)"
                   class="filterCheckbox"
                   :class="[selectedTimelines.includes(timelineName) ? 'selected' : '']">
                {{ timelineName }}
              </div>
            </div>
          </div>
        </div>
        <div class="filter-category">
          <div class="filter-category-headline">
            Weitere Zeitreihen:
          </div>
          <div class="filter-category-content">
            <div class="city-filters">
              <div v-for="timelineName in addedTimelines"
                   :key="timelineName"
                   @click="changeTimelineSelection(timelineName)"
                   class="filterCheckbox"
                   :class="[selectedTimelines.includes(timelineName) ? 'selected' : '']">
                {{ timelineName }}
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
      <li>Infektionszahlen: <a href="https://www.kreis-tuebingen.de/17094149.html">Landratsamt Tübingen</a></li>
    </ul>
    <div id="footer">
      Created by Joel Domke <a href="https://github.com/joeldomke"><font-awesome-icon :icon="['fab', 'github']" /></a>
    </div>
  </div>
</template>

<script>
import LineChart from '../components/LineChart'
import { getCoronaData } from "@/data/corona_data";
import { getInhabitantData } from "@/data/inhabitant_data";
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import 'chartjs-plugin-colorschemes';

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
        'Landkreis Tübingen'
      ],
      originalTimelines: [],
      addedTimelines: [],
      chartOptions: {
        plugins: {
          colorschemes: {
            scheme: 'brewer.SetOne9',
          }
        },
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
      let inhabitantData = getInhabitantData();

      /**
       * Timeline Object
       * Stores the data for each timeline, each timeline is indexed by it's name
       * @type {Object<string, {
       *   newCases: Array<?number>
       *   cumulativeCases: Array<?number>
       * }>
       * }
       */
      const timelines = {}
      // add empty timeline to timelines for every timelineName
      coronaData.forEach((snapshot) => {
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
      this.originalTimelines = Object.keys(timelines);

      coronaData.forEach((snapshot) => {
        // for each key in timeline check if snapshot has relevant data
        this.originalTimelines.forEach((key) => {
          // lookup datapoint with the same name as the key
          const dataPoints = snapshot.dataPoints.filter(dataPoint => dataPoint.name === key);
          if (dataPoints.length > 0) {
            // if the datapoint exists add data to timeline
            timelines[key].newCases.push(dataPoints[0].newCases);
            timelines[key].cumulativeCases.push(dataPoints[0].cumulativeCases);
          } else {
            // otherwise add null to timeline
            timelines[key].newCases.push(null);
            timelines[key].cumulativeCases.push(null);
          }
        });
      });

      // register new timelines
      this.addedTimelines = [
        'Landkreis Tübingen',
        'LK Tübingen ohne Gemeinde Tübingen'
      ]

      // add lk tübingen without tübingen
      const timelinesToAccumulate = [
        'Ammerbuch',
        'Bodelshausen',
        'Dettenhausen',
        'Dußlingen',
        'Gomaringen',
        'Hirrlingen',
        'Kirchentelllinsfurt',
        'Kusterdingen',
        'Mössingen',
        'Nehren',
        'Neustetten',
        'Ofterdingen',
        'Rottenburg',
        'Starzach',
      ]
      this.accumulateTimelines(
          'LK Tübingen ohne Gemeinde Tübingen',
          timelinesToAccumulate,
          timelines,
          inhabitantData
      )
      const timelinesToAccumulate2 = [
        'LK Tübingen ohne Gemeinde Tübingen',
        'Tübingen'
      ]
      this.accumulateTimelines(
          'Landkreis Tübingen',
          timelinesToAccumulate2,
          timelines,
          inhabitantData
      )

      console.log(timelines);


      // create chart labels
      const chartLabels = [];
      coronaData.forEach(snapshot => {
        chartLabels.push(snapshot.date);
      })

      // convert timeline into dataset
      this.datasets = [];
      const combinedTimeLineNames = [...this.originalTimelines, ...this.addedTimelines];
      console.log(combinedTimeLineNames);
      combinedTimeLineNames.forEach(timelineName => {
        console.log(timelineName);
        const inhabitants = inhabitantData[timelineName].inhabitants;
        const randomColor = this.randomColor();
        this.datasets.push({
          label: timelineName,
          data: timelines[timelineName].newCases
              .map(datapoint => datapoint !== null ? this.round(datapoint / inhabitants * 100000) : null),
          lineTension: 0,
          fill: false,
          spanGaps: true,
          pointRadius: 4,
          //borderColor: randomColor,
          //backgroundColor: randomColor
        });
      });

      this.chartData = {
        labels: chartLabels,
        datasets: this.datasets,
      }

    },
    accumulateTimelines(newTimelineName, timelinesToAccumulate, timelines, inhabitantData) {
      let inhabitants = 0;
      const newCasesToAdd = [];
      const cumulativeCasesToAdd = [];
      timelinesToAccumulate.forEach(cityName => {
        newCasesToAdd.push(timelines[cityName].newCases);
        cumulativeCasesToAdd.push(timelines[cityName].cumulativeCases);
        inhabitants += inhabitantData[cityName].inhabitants;
      })
      const newCases = this.sumArrays(newCasesToAdd);
      const cumulativeCases = this.sumArrays(cumulativeCasesToAdd);
      timelines[newTimelineName] = {
        newCases: newCases,
        cumulativeCases: cumulativeCases
      };
      inhabitantData[newTimelineName] = {inhabitants: inhabitants};
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
      return result.map((_, i) => arrays.map(xs => xs[i]).reduce((sum, x) =>
          sum === null || x === null ? null : sum + x, 0));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chart {
  max-height: 800px;
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
.city-filters {
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
.close-filters {
  margin-left: auto;
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
#footer {
  margin-top: 3rem;
}
</style>
