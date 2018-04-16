import Modal from '../components/modalComponent'
import moment from 'moment'
export default {
  name: 'Calendar',
  data () {
    return {
      showAddModal: false,
      showEditModal: false,
      eventData: {
        'title': '',
        'start': '',
        'end': ''
      },
      selectedEvent: {},
      events: [
        {
        'title': 'hi',
        'start': '2018-04-04',
        'end': '2018-04-06'
      }],
      config: {
        defaultView: 'month',
        fullDay: false,
        allDay: true,
        eventColor: '#378006',
        editable: true,
        selectable: true
      }
    }
  },
  mounted () {
    console.log(JSON.parse(this.$localStorage.get('events')));
    this.events = this.$localStorage.get('events') ? JSON.parse(this.$localStorage.get('events')) : []
  },
  methods: {
    eventCreated (event) {
      console.log(event)
      console.log(this.$refs.calendar)
      this.showAddModal = true
    },
    closeModal() {
      this.showAddModal = false;
      this.showEditModal = false;
      this.eventData= {
        'title': '',
        'start': '',
        'end': ''
      }
    },
    submitAndClose() {
      console.log(this.eventData)
      console.log(this.selectedEvent)

      this.eventData.start = moment(new Date(this.eventData.start)).format('YYYY-MM-DD')
      this.eventData.end = moment(moment(new Date(this.eventData.end))).add(1, 'days').format('YYYY-MM-DD')
      this.events.push(this.eventData)
      this.$localStorage.set('events', JSON.stringify(this.events))
      this.showAddModal = false;
      this.showEditModal = false;
      this.eventData= {
        'title': '',
        'start': '',
        'end': ''
      }
    },
    eventClick: function(calEvent, jsEvent, view) {
      this.selectedEvent = {
        title : calEvent.title,
        start : calEvent.start._i,
        end : calEvent.end ? calEvent.end._i : null
      }

      this.showEditModal = true
      console.log(calEvent)
      this.eventData = {
        title : calEvent.title,
        start : calEvent.start._i,
        end : calEvent.end ? calEvent.end._i : null
      }
    }
  },
  components: {
    Modal
  }
}
