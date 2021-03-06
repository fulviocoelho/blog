import Vue from 'vue'
import App from './App.vue'

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
