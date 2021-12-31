export function loading(state) {
  return state.loading;
}

export function selectedGasStations(state) {
  return state.selectedStations;
}

export function paz(state) {
  return state.paz;
}

export function sonol(state) {
  return state.sonol;
}

export function delek(state) {
  return state.delek;
}

export function dor(state) {
  return state.dor;
}

export function other(state) {
  return state.others;
}

export function search(state) {
  return state.search;
}
export function provider(state) {
  return state.provider;
}

export function gasStationById(state) {
  return (id) => {
    return state.selectedStations.find((station) => {
      return station.attributes.oid_delek === parseInt(id);
    });
  };
}
