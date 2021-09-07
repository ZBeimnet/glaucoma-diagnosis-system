import { createStore } from 'vuex'
import diagnoseModule from './diagnose'
import patientModule from './patient'

// Create a new store instance.
export default createStore({
  modules: {
    diagnose: diagnoseModule,
    patient: patientModule
  }
});
