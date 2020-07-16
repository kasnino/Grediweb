<template>
    <div>
         <v-flex md12 s12 p-0 ma-0  xs12 class="col_grid">
        <v-flex md11  red pa-1 mt-1 xs12 class="content_col">
                <v-layout wrap  justify-center  align-center pa-0 ma-0 class="items_filas_img">
                  <div class="imagen_contenedor--citys">
                    <v-layout wrap justify-center align-center pa-0 ma-0 class="items_citys">
                      <v-flex md4 sm4 ma-0 xs12 class="col_grid_citys">
                        <div class="boton_tiempo_next">
                          <v-img
                            pa-5
                            class="pa-5"
                            :src="`http://openweathermap.org/img/w/${icon}.png`"
                            max-width
                            height
                          ></v-img>
                        </div>
                      </v-flex>

                      <v-flex md4 sm4 ma-0 xs12 class="col_grid_citys">
                        <div class="text-center justify-center align-center">
                          <span class="text-center">12</span>
                          <span class="letra">°C</span>
                        </div>
                        <v-divider class="mx-0 pa-1" inset vertical></v-divider>
                      </v-flex>

                      <v-flex md4 sm4 ma-0 text-left xs12 class="col_grid_citys">
                        <div class="peque_text--titulo text-left">
                          {{name_city}}
                          <div class="peque_text text-left">Francia</div>
                        </div>
                      </v-flex>
                    </v-layout>
                    <v-layout wrap justify-center align-center pa-0 ma-0 class="items_citys--text">
                      <v-flex md4 sm4 ma-0 text-center xs12 class="col_grid_citys">
                        <span class="sub--txto">humidity</span>
                      </v-flex>

                      <v-flex md4 sm4 ma-0 text-center xs12 class="col_grid_citys">
                        <span class="sub--txto">West</span>
                      </v-flex>

                      <v-flex md4 sm4 ma-0 text-center xs12 class="col_grid_citys">
                        <span class="sub--txto">0.3km/h</span>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-layout>

                <v-layout wrap justify-center mt-3 align-center pa-0 ma-1 class="items_filas_two">
                  <div class="ciudad_contenedor">
                    <v-img
                      pa-5
                      class="pa-0 mt-6 city"
                      src="@/assets/city.png"
                      max-width="100%"
                      height="130"
                      position="false"
                      style="border: rgba(102, 102, 102, 0.23) 2px dashed;"
                    >
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field
                          placeholder="+ add Location"
                          v-model="city"
                          v-on:keyup.enter="getClima, getCode(city)"
                          filled
                          rounded
                          dense
                          text-center
                        ></v-text-field>
                      </v-col>
                    </v-img>
                  </div>
                </v-layout>
              </v-flex>
         </v-flex>
    </div>
</template>

<script>
    export default {
         data() {
            return {
                city: "Paris",
                apykey: "6efcbafab3a9c69d94a3b57ade046d51",
                todos: "",
                indx: 0,
                currentTemp: "",
                minTemp: "",
                maxTemp: "",
                sunrise: "",
                sunset: "",
                pressure: "",
                humidity: "",
                wind: "",
                overcast: "",
                icon: "",
                tempgrados: "",
                namecity: '',
                countrycode: "FR"
            }
         },
         methods: {
    // convrsion de kelvin a celsius
            convertKelvinToCelsius(kelvin) {
            if (kelvin < 0) {
                    return "below absolute zero (0 K)";
                } else {
                    return (this.tempgrados = kelvin - 273.15);
                }
            },
    // obteniendo los datos 
    getClima() {
      const uri = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countrycode}&appid=${this.apykey}`;
      this.$http.get(uri).then(
        response => {
                this.todos       = response.data;
                this.currentTemp = response.data.main.temp;
                this.countrycode = response.data.sys.country;
                this.minTemp     = response.data.main.temp_min;
                this.maxTemp     = response.data.main.temp_max;
                this.pressure    = response.data.main.pressure;
                this.humidity    = response.data.main.humidity + "%";
                this.wind        = response.data.wind.speed + "m/s";
                this.overcast    = response.data.weather[0].description;
                this.icon        = response.data.weather[0].icon;
                this.namecity    = response.data.name;
                this.convertKelvinToCelsius(this.currentTemp);
                this.sunrise     = new Date(response.data.sys.sunrise * 1000)
            .toLocaleTimeString("en-GB")
            .slice(0, 4);
          this.sunset = new Date(response.data.sys.sunset * 1000)
            .toLocaleTimeString("en-GB")
            .slice(0, 4);
          console.log(this.todos);
        },
        error => {
          console.error(error);
        }
      );
    }
  },
  beforeMount() {
    this.getClima();
  },
  mounted() {
    this.getClima();
  },
  computed: {}
}; 
    

</script>

<style lang="scss" scoped>
@import "../sass/globals";
</style>