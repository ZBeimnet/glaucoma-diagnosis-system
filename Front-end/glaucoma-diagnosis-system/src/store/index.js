import { createStore } from 'vuex'
import diagnoseModule from './diagnose'
import patientModule from './patient'
import adminModule from './admin'

// Create a new store instance.
export default createStore({
  modules: {
    diagnose: diagnoseModule,
    patient: patientModule,
    admin: adminModule
  }
});
