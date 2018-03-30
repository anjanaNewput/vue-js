/* @flow */
import LineChart from '../components/LineChart'
import data from '../../json/data.json'
export default {
  components: {
    LineChart
  },
  data () {
    return {
      dataCollection: null
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.dataCollection = {
        labels: this.getLabels(),
        datasets: [
          {
            label: 'Word Count',
            backgroundColor: '#f87979',
            data: this.getGraphData()
          }
        ]
      }
    },
    getLabels () {
      var labels = []
      for (var i = 0; i < data.data.length; i++) {
        labels.push(data.data[i].first_name)
      }
      return labels
    },
    getGraphData () {
      var graphData = []
      for (var i = 0; i < data.data.length; i++) {
        graphData.push(data.data[i].WORD_COUNT)
      }
      return graphData
    }
  }
}
