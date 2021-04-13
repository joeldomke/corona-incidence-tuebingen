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
            Typ:
          </div>
          <div class="filter-category-content">
            <div class="city-filters">
              <div v-for="timelineType in timelineTypes"
                   :key="timelineType.displayName"
                   @click="changeTimelineType(timelineType.displayName)"
                   class="filterCheckbox"
                   :class="[selectedTimelineType.displayName === timelineType.displayName ? 'selected' : '']">
                {{ timelineType.displayName }}
              </div>
            </div>
          </div>
        </div>
        <div v-for="timelineType in TimelineCategories"
             class="filter-category">
          <div class="filter-category-headline">
            {{ timelineType }}:
          </div>
          <div class="filter-category-content">
            <div class="city-filters">
              <div v-for="cityName in cityNamesByTimelineCategory(timelineType)"
                   :key="cityName"
                   @click="changeTimelineSelection(cityName)"
                   class="filterCheckbox"
                   :class="[selectedTimelines.includes(cityName) ? 'selected' : '']">
                {{ cityName }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <line-chart class="chart" :chart-data="chartData" :options="chartOptions"></line-chart>
    <h4>Quellen:</h4>
    <ul>
      <li>Einwohnerzahlen: <a href="https://www.statistik-bw.de/BevoelkGebiet/Bevoelkerung/01515020.tab?R=LA">Statistisches
        Landesamt Baden‑Württemberg</a></li>
      <li>Infektionszahlen Gemeinden: <a href="https://www.kreis-tuebingen.de/17094149.html">Landratsamt Tübingen</a>
      </li>
      <li>Infektionszahlen Landkreise: <a
          href="https://www.baden-wuerttemberg.de/de/service/presse/pressemitteilung/pid/infektionen-und-todesfaelle-in-baden-wuerttemberg/">Landesgesundheitsamt
        Baden-Württemberg</a></li>
    </ul>
    <div id="footer">
      Created by Joel Domke <a href="https://github.com/joeldomke">
      <font-awesome-icon :icon="['fab', 'github']"/>
    </a>
    </div>
  </div>
</template>

<script>
import LineChart from '../components/LineChart'
import {getCoronaData} from "@/data/corona_data";
import {getTimelineData, TimelineCategories} from "@/data/timeline_data";
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import 'chartjs-plugin-colorschemes';
import axios from 'axios';
import Vue from "vue";

export default {
  name: 'Home',
  components: {
    MenuIcon,
    LineChart
  },
  data() {
    return {
      TimelineCategories: TimelineCategories,
      timelineTypes: [
        {
          displayName: '7-Tage-Inzidenz',
          function: (timeline, inhabitants) => {
            return timeline.newCasesLast7Days.map(datapoint => {
              return datapoint !== null ? this.round(datapoint / inhabitants * 100000) : null;
            });
          }
        },
        {
          displayName: 'Fälle in den letzten 7 Tagen',
          function: (timeline, inhabitants) => {
            return timeline.newCasesLast7Days;
          }
        },
        {
          displayName: 'Fallzahlen kumuliert',
          function: (timeline, inhabitants) => {
            return timeline.cumulativeCases;
          }
        },
      ],
      chartData: {},
      datasets: {},
      showFilters: true,
      selectedTimelineTypeName: '7-Tage-Inzidenz',
      selectedTimelines: [
        'Tübingen',
        'Landkreis Tübingen'
      ],

      timelineData: {},
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
          }],
          xAxes: [{
            type: 'time',
            time: {
              unit: 'week',
              parser: 'DD.MM.YYYY'
            },
            ticks: {
              min: '2021',
            }
          }]
        }
      }
    }
  },
  mounted() {
    this.logUser();
    this.fillData();
    this.filterDatasets();
  },
  computed: {
    selectedTimelineType() {
      return this.timelineTypes.filter(timeline => {
        return timeline.displayName === this.selectedTimelineTypeName;
      })[0];
    },
  },
  methods: {
    logUser() {
      axios.get("/.netlify/functions/countUser");
    },
    /**
     * Takes the raw incidence date and creates timelines for the chart
     */
    fillData() {
      const coronaData = getCoronaData();
      let timelineData = getTimelineData();

      /**
       * Timeline Object
       * Stores the data for each timeline, each timeline is indexed by it's name
       * @type {Object<string, {
       *   newCasesLast7Days: Array<?number>
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
              newCasesLast7Days: [],
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
            timelines[key].newCasesLast7Days.push(dataPoints[0].newCasesLast7Days);
            timelines[key].cumulativeCases.push(dataPoints[0].cumulativeCases);
          } else {
            // otherwise add null to timeline
            timelines[key].newCasesLast7Days.push(null);
            timelines[key].cumulativeCases.push(null);
          }
        });
      });

      // add lk tübingen without tübingen
      // const timelinesToAccumulate = [
      //   'Ammerbuch',
      //   'Bodelshausen',
      //   'Dettenhausen',
      //   'Dußlingen',
      //   'Gomaringen',
      //   'Hirrlingen',
      //   'Kirchentelllinsfurt',
      //   'Kusterdingen',
      //   'Mössingen',
      //   'Nehren',
      //   'Neustetten',
      //   'Ofterdingen',
      //   'Rottenburg',
      //   'Starzach',
      // ]
      // this.addTimelines(
      //     'LK Tübingen ohne Gemeinde Tübingen',
      //     timelinesToAccumulate,
      //     timelines,
      //     timelineData,
      // );

      this.timelineData = timelineData;

      // create chart labels
      const chartLabels = [];
      coronaData.forEach(snapshot => {
        chartLabels.push(snapshot.date);
      })

      // convert timeline into dataset
      this.datasets = [];
      const combinedTimeLineNames = Object.keys(this.timelineData);
      combinedTimeLineNames.forEach(timelineName => {
        const inhabitants = timelineData[timelineName].inhabitants;
        const timeline = timelines[timelineName];
        this.datasets.push({
          label: timelineName,
          data: this.selectedTimelineType.function(timeline, inhabitants),
          lineTension: 0,
          fill: false,
          spanGaps: true,
          pointRadius: 4,
        });
      });

      this.chartData = {
        labels: chartLabels,
        datasets: this.datasets,
      }


    },
    /**
     * Takes multiple timelines and adds them together to create a new timeline
     * @param {string} newTimelineName
     * @param {string[]} timelinesToAccumulate - Names of the timelines to add up
     * @param timelines - Existing timelines
     * @param inhabitantData
     * @param timelineCategory - Timeline category of the new timeline
     */
    addTimelines(newTimelineName, timelinesToAccumulate, timelines, inhabitantData, timelineCategory = TimelineCategories.additionalTimeline) {
      let inhabitants = 0;
      const newCasesLast7DaysToAdd = [];
      const cumulativeCasesToAdd = [];
      timelinesToAccumulate.forEach(cityName => {
        newCasesLast7DaysToAdd.push(timelines[cityName].newCasesLast7Days);
        cumulativeCasesToAdd.push(timelines[cityName].cumulativeCases);
        inhabitants += inhabitantData[cityName].inhabitants;
      });
      const newCasesLast7Days = this.sumArrays(newCasesLast7DaysToAdd);
      const cumulativeCases = this.sumArrays(cumulativeCasesToAdd);
      timelines[newTimelineName] = {
        newCasesLast7Days: newCasesLast7Days,
        cumulativeCases: cumulativeCases
      };
      inhabitantData[newTimelineName] = {inhabitants: inhabitants, category: timelineCategory};
    },
    /**
     * Activate or deactivate a timeline
     * @param {string} timelineName
     */
    changeTimelineSelection(timelineName) {
      if (this.selectedTimelines.includes(timelineName)) {
        this.selectedTimelines = this.selectedTimelines.filter(name => name !== timelineName);
      } else {
        this.selectedTimelines.push(timelineName);
      }
      this.filterDatasets();
    },
    changeTimelineType(timelineTypeName) {
      this.selectedTimelineTypeName = timelineTypeName;
      this.fillData();
      this.filterDatasets();
    },
    /**
     * Filter out the timelines that are not selected
     */
    filterDatasets() {
      this.chartData = {
        labels: this.chartData.labels,
        datasets: this.datasets.filter(dataset => this.selectedTimelines.includes(dataset.label))
      }
    },
    /**
     * Returns all city names for a give timeline type
     * @param timelineCategory
     * @returns {string[]}
     */
    cityNamesByTimelineCategory(timelineCategory) {
      const allCityNames = Object.keys(this.timelineData);
      return allCityNames.filter(cityName => this.timelineData[cityName].category === timelineCategory)
    },
    round(num, digits = 1) {
      return Math.round(num * Math.pow(10, digits)) / Math.pow(10, digits)
    },
    sumArrays(arrays) {
      const n = arrays.reduce((max, xs) => Math.max(max, xs.length), 0);
      const result = Array.from({length: n});
      return result.map((_, i) => arrays.map(xs => xs[i]).reduce((sum, x) =>
          sum === null || x === null ? null : sum + x, 0));
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chart {
  height: 50rem;
  max-height: 100vw;
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



