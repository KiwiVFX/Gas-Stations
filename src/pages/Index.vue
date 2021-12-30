<template>
  <q-page class="text-center">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
    <div v-if="loading"></div>
    
    <div v-else class="row align-center justify-center items-center">


    

    <!-- <div class="col-12">
         <q-toggle
      :label="open"
      color="primary"
      false-value="Closed"
      true-value="Open"
      v-model="open"
    />
    </div> -->
    
    <div class="q-pa-md col-12" style="max-width: 700px">
      <q-input
        v-model="search"
        debounce="500"
        filled
        placeholder="חיפוש"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>

    <q-list padding bordered class="rounded-borders">
<div v-for="(item, index) in allGasStations" :key="index">
      <q-expansion-item
      group="somegroup"
        dense
        dense-toggle
        expand-separator
      
        
      >
            <template v-slot:header>
          <q-item-section avatar>
            <q-avatar v-if="isOpenCheck(item.attributes.is_open)" icon="local_gas_station" color="green" text-color="white" />
            <q-avatar v-else icon="do_not_disturb_on" color="grey" text-color="white" />
          </q-item-section>

          <q-item-section>
            {{item.attributes.shem_esek}}
          </q-item-section>

         
        </template>
        <q-card class="bg-grey-4">
          <q-card-section class="content-offset">
            <!-- <q-icon v-if="isOpenCheck(item.attributes.is_open)" class="text-green" name="font_download" />
            <q-icon v-else name="font_download" /> -->
            <span v-if="isOpenCheck(item.attributes.is_open)" class="text-green text-h6"> פתוח</span>
            <span v-else class="text-h6"> סגור</span>
          </q-card-section>
          <q-card-section class="content-offset">
           {{calcAdress(item.attributes.t_ktovet)}}
          </q-card-section>
        
            <q-card-actions class="justify-center align-center items-center content-offset">
        <q-btn color="primary" @click="onLoadStationId(item.attributes.oid_delek)">ראה על המפה</q-btn>
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


// import { Quasar } from 'quasar'
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      // search: null,
      // open: 'Open'
      // effectOptions: ["Mix", "Wipe", "Push", "Cut"],
    };
  },
  
  computed: {
    // gasStations() {
    //   if (this.search) {
    //      console.log("search is: ", this.search)
    //     //  console.log("res is: ", res)
       
    //     // .filter(s => {
    //     //   console.log("test is: ", s.attributes.shem_esek === this.search)
    //     //       return s.attributes.shem_esek === this.search;
          search: {
      get() {
        return this.$store.getters["example/search"];
      },
      set(value) {
        this.$store.commit("example/CHANGE_SEARCH", value)
      },
    },  
         
    //     // });
    //     //  console.log("res is: ", res)
    //     return this.allGasStations.filter(station => station.attributes.shem_esek = this.search)
    //   } else return this.allGasStations
    // },
allGasStations() {
      return this.$store.getters["example/selectedGasStations"];
    },
    loading() {
      return this.$store.getters["example/loading"];
    },
   
    
  },
  methods: {
    startSearch(val){
      // search
      
// this.selectedItem = index
    },
     calcAdress(adress){
      //  console.log("adress is: ", adress)
       // return array of 3
      return adress
    },
    isOpenCheck(val) {
      if(val === 'כן'){
        return true
      } else return false
    },
     onLoadStationId(id) {
      // console.log("id is: ", id)
        this.$router.replace("/" + id);
    }
  },
//   created () {
//     this.$store.commit("main/NEW_ITEM", name);

//     const allGasStations = ref(false)
//     const allOpenGasStations = ref(false)
// try {
//                 axios
//                   .get(
//                     'https://api.tel-aviv.gov.il/gis/Layer?layerCode=548'
//                   )
//                   .then((res) => {
//                     // console.log("HANDLE ADD TO DATABASE: ", res.data);
                    
//                     allGasStations = res.data.features
//                     // console.log("all are: ", all)
//                      allOpenGasStations = res.data.features.filter(value => value.attributes.is_open === 'כן');
//                     //  .filter(v => v.is_open === 'כן');
//                     // console.log("open are: ", open)
                   
//                   })
//               } catch (error) {
//                 // this.$q.notify({
//                 //   color: "red-5",
//                 //   progress: true,
//                 //   textColor: "white",
//                 //   icon: "warning",
//                 //   position: "bottom-left",
//                 //   message: error.message,
//                 // });
//               }
//     return {
//       allGasStations,
//       allOpenGasStations
//       // essentialLinks: linksList,
//       // leftDrawerOpen,
//       // toggleLeftDrawer () {
//       //   leftDrawerOpen.value = !leftDrawerOpen.value
//       // }
//     }
  // }
})
</script>

<style lang="sass" scoped>

.content-offset
  margin-right: -20px
  
.sortable-selected-item
  background: lightgrey

</style>