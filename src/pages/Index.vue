<template>
  <q-page class="text-center">
    <div v-if="loading"></div>

    <div v-else class="row align-center justify-center items-center">
      <div class="q-pa-md col-12" style="max-width: 700px">
        <q-input v-model="search" debounce="500" filled placeholder="חיפוש">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

<div v-if="allGasStations.length === 0" class="q-my-md text-red text-h6">לא נמצאו תוצאות.</div>
        <q-list v-else padding bordered class="rounded-borders">
          <div v-for="(item, index) in allGasStations" :key="index">
            <q-expansion-item
              group="somegroup"
              dense
              dense-toggle
              expand-separator
            >
              <template v-slot:header>
                <q-item-section avatar>
                  <q-avatar
                    v-if="isOpenCheck(item.attributes.is_open)"
                    icon="local_gas_station"
                    color="green"
                    text-color="white"
                  />
                  <q-avatar
                    v-else
                    icon="do_not_disturb_on"
                    color="grey"
                    text-color="white"
                  />
                </q-item-section>

                <q-item-section>
                  {{ item.attributes.shem_esek }}
                </q-item-section>
              </template>
              <q-card class="bg-grey-4">
                <q-card-section class="content-offset">
                  <!-- <q-icon v-if="isOpenCheck(item.attributes.is_open)" class="text-green" name="font_download" />
            <q-icon v-else name="font_download" /> -->
                  <span
                    v-if="isOpenCheck(item.attributes.is_open)"
                    class="text-green text-h6"
                  >
                    פתוח</span
                  >
                  <span v-else class="text-h6"> סגור</span>
                </q-card-section>
                <q-card-section class="content-offset">
                  {{ calcAdress(item.attributes.t_ktovet) }}
                </q-card-section>

                <q-card-actions
                  class="
                    justify-center
                    align-center
                    items-center
                    content-offset
                  "
                >
                  <q-btn
                    color="primary"
                    @click="onLoadStationId(item.attributes.oid_delek)"
                    >ראה על המפה</q-btn
                  >
                </q-card-actions>
              </q-card>
            </q-expansion-item>
          </div>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {};
  },

  computed: {
    search: {
      get() {
        return this.$store.getters["example/search"];
      },
      set(value) {
        this.$store.commit("example/CHANGE_SEARCH", value);
      },
    },
    allGasStations() {
      if (this.search) {
        return this.$store.getters["example/selectedGasStations"];
      } else {
        if (this.provider === "paz") {
          return this.$store.getters["example/paz"];
        } else if (this.provider === "sonol") {
          return this.$store.getters["example/sonol"];
        } else if (this.provider === "delek") {
          return this.$store.getters["example/delek"];
        } else if (this.provider === "dor") {
          return this.$store.getters["example/dor"];
        } else {
          return this.$store.getters["example/other"];
        }
      }
    },
    loading() {
      return this.$store.getters["example/loading"];
    },
    provider() {
      return this.$store.getters["example/provider"];
    },
  },
  methods: {
    calcAdress(adress) {
      return adress;
    },
    isOpenCheck(val) {
      if (val === "כן") {
        return true;
      } else return false;
    },
    onLoadStationId(id) {
      this.$router.replace("/" + id);
    },
  },
});
</script>

<style lang="sass" scoped>

.content-offset
  margin-right: -20px

.sortable-selected-item
  background: lightgrey
</style>
