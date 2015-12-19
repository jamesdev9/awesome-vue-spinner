import PulseLoader from './PulseLoader.vue'
import ScaleLoader from './ScaleLoader.vue'
import ClipLoader from './ClipLoader.vue'
import RiseLoader from './RiseLoader.vue'


Vue.config.debug = true

new Vue({
	el: '#app',
	components: {
    PulseLoader,
    ScaleLoader,
    ClipLoader,
    RiseLoader
    
  },
  data () {
    return {

   		color: '#5dc596',
      height: '15px',
      width: '15px',
      margin: '2px',
      radius: '100%'
    }
  }
})

