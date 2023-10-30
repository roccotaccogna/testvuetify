/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VDatePicker } from 'vuetify/labs/VDatePicker'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
      primary: '#C5CAE9',
		  success: '#3cd1c2',
		  info: '#ffaa2c',
		  error: '#f83e70'
  },
  components: {
    VDatePicker,
  },
})
