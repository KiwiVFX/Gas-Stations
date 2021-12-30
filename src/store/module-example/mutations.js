import {
    Loading,
  
    // optional!, for example below
    // with custom spinner
    // QSpinnerGears
  } from 'quasar'


export function ALL_GAS_STATIONS (state, payload) {
    state.allGasStations = payload
    state.selectedStations = payload.paz
    state.loading = false
    Loading.hide()
// console.log("mutated", payload)
}
export function CHANGE_PROVIDER (state, payload) {
    // state.allGasStations = payload
    // state.selectedStations = payload.paz
// console.log("change provider is", payload)
if (payload === 'paz') {
    state.provider = 'paz'
    state.selectedStations = null
    state.selectedStations = state.allGasStations.paz
    state.loading = false
    Loading.hide()
} else if (payload === 'sonol') {
    state.provider = 'sonol'
    state.selectedStations = null
    state.selectedStations = state.allGasStations.sonol
    state.loading = false
    Loading.hide()
} else if (payload === 'delek') {
    state.provider = 'delek'
    // console.log("change provider is", payload)
    state.selectedStations = null
    state.selectedStations = state.allGasStations.delek
    state.loading = false
    Loading.hide()
} else if (payload === 'dor') {
    state.provider = 'dor'
    state.selectedStations = null
    state.selectedStations = state.allGasStations.dor
    state.loading = false
    Loading.hide()
} else {
    state.provider = 'other'
    state.selectedStations = null
    state.selectedStations = state.allGasStations.others
    state.loading = false
    Loading.hide()
}
}
export function START_LOADING (state) {
    state.loading = true
    Loading.show({
        // spinner: QSpinnerGears,
        message: 'טוען תחנות דלק באיזור תל אביב, תחזיקו מעמד...',
        boxClass: 'text-white'
        // other props
      })
      
    //   Loading.hide()
  
}

export function CHANGE_SEARCH (state, payload) {
    state.search = payload
    if(state.search) {
        
    state.selectedStations = state.selectedStations.filter(x => x.attributes.shem_esek.toLowerCase().includes(payload.toLowerCase()))
    // .filter((s) => {
    //        console.log("shem esek is: ", s.attributes.shem_esek)
    //        console.log("state search is: ", payload)
    //             return s.attributes.shem_esek === payload;
             
    //       });
          
    } else {
        if (state.provider === 'paz') {
            state.provider = 'paz'
            state.selectedStations = null
            state.selectedStations = state.allGasStations.paz
            state.loading = false
            Loading.hide()
        } else if (state.provider === 'sonol') {
            state.provider = 'sonol'
            state.selectedStations = null
            state.selectedStations = state.allGasStations.sonol
            state.loading = false
            Loading.hide()
        } else if (state.provider === 'delek') {
            state.provider = 'delek'
            // console.log("change provider is", payload)
            state.selectedStations = null
            state.selectedStations = state.allGasStations.delek
            state.loading = false
            Loading.hide()
        } else if (state.provider === 'dor') {
            state.provider = 'dor'
            state.selectedStations = null
            state.selectedStations = state.allGasStations.dor
            state.loading = false
            Loading.hide()
        } else {
            state.state.provider = 'other'
            state.selectedStations = null
            state.selectedStations = state.allGasStations.others
            state.loading = false
            Loading.hide()
        }
    }
        // if (this.search) {
        //   var res = this.selectedProject.items.filter((p) => {
        //     return (
        //       p.elements.filter((s) => {
        //         return s.name.toLowerCase() === this.search.toLowerCase();
        //       }).length > 0
        //     );
        //   });
        //   //  console.log("res is: ", res)
        //   return res;
        // } else return this.$store.getters["main/selectedProject"].items;
      
    // Loading.show({
    //     // spinner: QSpinnerGears,
    //     message: '...טוען תחתנות דלק באיזור תל אביב במהירות הבזק. תחזיקו מעמד',
    //     boxClass: 'text-white'
    //     // other props
    //   })
      
    //   Loading.hide()
  
}
