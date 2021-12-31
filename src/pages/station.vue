<template>
  <q-page>
    <div v-if="gasStation" class="q-pa-md">
      <div class="row justify-center items-center align-center text-center">
        <div class="col-12 text-h5">{{ gasStation.attributes.shem_esek }}</div>
        <div
          v-if="isOpenCheck(gasStation.attributes.is_open)"
          class="col-12 text-h6 text-green blink"
        >
          פתוח
        </div>
        <div v-else class="col-12 text-h6">סגור</div>
        <div
          v-if="
            breakAdress(gasStation.attributes.t_ktovet)[0] &&
            breakAdress(gasStation.attributes.t_ktovet)[1]
          "
          class="col-12 text-h6"
        >
          {{ breakAdress(gasStation.attributes.t_ktovet)[0] }}
          {{ breakAdress(gasStation.attributes.t_ktovet)[1] }}
        </div>
        <div
          v-if="breakAdress(gasStation.attributes.t_ktovet)[2]"
          class="col-12 text-h6"
        >
          {{ breakAdress(gasStation.attributes.t_ktovet)[2] }}
        </div>

        <GoogleMap
          api-key=""
          style="width: 100%; height: 700px"
          :center="center"
          :zoom="15"
        >
          <Marker :options="{ position: center }" />
        </GoogleMap>
      </div>
    </div>
    <div v-else></div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  name: "PageIndex",
  components: { GoogleMap, Marker },
  props: ["stationId"],
  data() {
    return {};
  },

  computed: {
    gasStation() {
      return this.$store.getters["example/gasStationById"](this.stationId);
    },
    center() {
      return {
        lat: this.gasStation.attributes.lat,
        lng: this.gasStation.attributes.lon,
      };
    },
  },
  methods: {
    isOpenCheck(val) {
      if (val === "כן") {
        return true;
      } else return false;
    },
    breakAdress(value) {
      var newArray = [];
      var oneLinerTest = value
        .split(/(?=רחוב: )|(?=מספר בית: )|(?=שכונה: )/gi)
        .filter(String);

      if (value.includes("רחוב: ")) {
        var updatedStreet = oneLinerTest[0].replace(/רחוב: /g, "");
        newArray.push(updatedStreet.trim());
      }
      if (value.includes("מספר בית: ")) {
        var updatedNumber = oneLinerTest[1].replace(/מספר בית: /g, "");
        newArray.push(updatedNumber.trim());
      }
      if (value.includes("שכונה: ")) {
        var updatedNeighbourhood = oneLinerTest[2].replace(/שכונה: /g, "");
        newArray.push(updatedNeighbourhood.trim());
      }
      return newArray;
    },
  },
});
</script>

<style lang="sass" scoped>

.blink
  animation: blink-animation 1s steps(5, start) infinite
  -webkit-animation: blink-animation 1s steps(5, start) infinite

@keyframes blink-animation
  to
    visibility: hidden


@-webkit-keyframes blink-animation
  to
    visibility: hidden
</style>
