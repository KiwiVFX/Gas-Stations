import axios from "axios";

export function initAllGasStations ({commit}) {
try {
                axios
                  // .get(
                  //   'https://api.tel-aviv.gov.il/gis/Layer?layerCode=548'
                  // )
                  .get(
                    'https://gas-stations-api.herokuapp.com/'
                  )
                  .then((res) => {
                    // console.log("HANDLE ADD TO DATABASE: ", res.data);
                    
                    // commit.allGasStations = res.data.features
                    commit("ALL_GAS_STATIONS", res.data);
                    // console.log("all are: ", all)
                    //  allOpenGasStations = res.data.features.filter(value => value.attributes.is_open === 'כן');
                    //  .filter(v => v.is_open === 'כן');
                    // console.log("open are: ", open)
                   
                  })
              } catch (error) {
                this.$q.notify({
                  color: "red-5",
                  progress: true,
                  textColor: "white",
                  icon: "warning",
                  position: "bottom-left",
                  message: error.message,
                });
              }
}
export function changeProvider ({commit}, payload) {
  try {
               
                      // commit.allGasStations = res.data.features
                      commit("CHANGE_PROVIDER", payload);
                      commit("START_LOADING");
                      // console.log("all are: ", all)
                      //  allOpenGasStations = res.data.features.filter(value => value.attributes.is_open === 'כן');
                      //  .filter(v => v.is_open === 'כן');
                      // console.log("open are: ", open)
                
                } catch (error) {
                  this.$q.notify({
                    color: "red-5",
                    progress: true,
                    textColor: "white",
                    icon: "warning",
                    position: "bottom-left",
                    message: error.message,
                  });
                }
  }
