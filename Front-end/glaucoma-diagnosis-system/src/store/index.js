import { createStore } from 'vuex'
import diagnoseModule from './diagnose'
import patientModule from './patient'
import healthcenterModule from './healthcenter'
import userModule from './user'

// Create a new store instance.
export default createStore({
  modules: {
    diagnose: diagnoseModule,
    patient: patientModule,
    healthcenter: healthcenterModule,
    user: userModule
  }
});
