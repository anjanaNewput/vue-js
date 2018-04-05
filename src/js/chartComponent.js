/* @flow */
import LineChart from '../components/LineChart'
import data from '../../json/data.json'
export default {
  components: {
    LineChart
  },
  data () {
    return {
      dataCollection: null,
      center: {lat: 10.0, lng: 10.0},
      markers: [],
      currentPlace: null,
      places: [],
      gridData: [],
      gridColumns: ['WORD_COUNT', 'first_name'],
    }
  },
  mounted () {
    this.fillData()
    this.geolocate()
    this.getGraphData()
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
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
      var tableData = []
      for (var i = 0; i < data.data.length; i++) {
        graphData.push(data.data[i].WORD_COUNT)
        tableData.push(data.data[i])
      }
      this.gridData = tableData
      return graphData
    },
    addMarker () {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        console.log(this.markers)
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
}
