import {
  Loading,

  // optional!, for example below
  // with custom spinner
  // QSpinnerGears
} from "quasar";

export function ALL_GAS_STATIONS(state, payload) {
  state.allGasStations = payload;
  state.paz = payload.paz;
  state.sonol = payload.sonol;
  state.delek = payload.delek;
  state.dor = payload.dor;
  state.others = payload.others;
  state.loading = false;
  Loading.hide();
}
export function CHANGE_PROVIDER(state, payload) {
  if (payload === "paz") {
    state.provider = "paz";
    state.loading = false;
    Loading.hide();
  } else if (payload === "sonol") {
    state.provider = "sonol";
    state.loading = false;
    Loading.hide();
  } else if (payload === "delek") {
    state.provider = "delek";
    state.loading = false;
    Loading.hide();
  } else if (payload === "dor") {
    state.provider = "dor";
    state.loading = false;
    Loading.hide();
  } else {
    state.provider = "other";
    state.loading = false;
    Loading.hide();
  }
}
export function START_LOADING(state) {
  state.loading = true;
  Loading.show({
    // spinner: QSpinnerGears,
    message: "טוען תחנות דלק באיזור תל אביב, תחזיקו מעמד...",
    boxClass: "text-white",
    // other props
  });
}

export function CHANGE_SEARCH(state, payload) {
  state.search = payload;
  if (state.search) {
    if (state.provider === "paz") {
      state.selectedStations = state.paz.filter((x) =>
        x.attributes.shem_esek.toLowerCase().includes(payload.toLowerCase())
      );
    } else if (state.provider === "sonol") {
      state.selectedStations = state.sonol.filter((x) =>
        x.attributes.shem_esek.toLowerCase().includes(payload.toLowerCase())
      );
    } else if (state.provider === "delek") {
      state.selectedStations = state.delek.filter((x) =>
        x.attributes.shem_esek.toLowerCase().includes(payload.toLowerCase())
      );
    } else if (state.provider === "dor") {
      state.selectedStations = state.dor.filter((x) =>
        x.attributes.shem_esek.toLowerCase().includes(payload.toLowerCase())
      );
    } else {
      state.selectedStations = state.others.filter((x) =>
        x.attributes.shem_esek.toLowerCase().includes(payload.toLowerCase())
      );
    }
  } else {
    if (state.provider === "paz") {
      state.provider = "paz";
      state.loading = false;
      Loading.hide();
    } else if (state.provider === "sonol") {
      state.provider = "sonol";
      state.loading = false;
      Loading.hide();
    } else if (state.provider === "delek") {
      state.provider = "delek";
      state.loading = false;
      Loading.hide();
    } else if (state.provider === "dor") {
      state.provider = "dor";
      state.loading = false;
      Loading.hide();
    } else {
      state.provider = "other";
      state.loading = false;
      Loading.hide();
    }
  }
}
