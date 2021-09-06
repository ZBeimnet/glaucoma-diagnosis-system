import { createStore } from 'vuex'
import diagnoseModule from './diagnose'

// Create a new store instance.
export default createStore({
  modules: {
    diagnose: diagnoseModule
  }
});
