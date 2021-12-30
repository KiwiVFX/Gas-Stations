export function loading(state) {
    return state.loading;
  }

  export function selectedGasStations(state) {
    return state.selectedStations;
  }

  export function search(state) {
    return state.search;
  }
  export function provider(state) {
    return state.provider;
  }
  // export function gasStationById(state) {
  //   id => {
  //     return state.selectedStations.find(station => {
  //         console.log("id is: ", id)
  //         console.log("station is: ", station.attributes.oid_delek)
  //       //   console.log(station.attributes.oid_delek === parseInt(gasStationById))
  //       //   console.log("station is: ", station.attributes.oid_delek)
  //       return station.attributes.oid_delek === id;
  //     });
  //   };
  // }

  export function gasStationById(state) {
    return id => {
      return state.selectedStations.find(station => {
        // console.log("match station and id: ", station.attributes.oid_delek === parseInt(id))
        return station.attributes.oid_delek === parseInt(id);
      });
    };
  }