<template>
<!-- Contenedor principal -->
  <v-layout wrap justify-center mt-7 align-center p-0 m-0 class="fondo_main">

    <pre class="top_code">
      {{sunrise}}
    </pre>
    <v-flex md9 sm9 p-0 m-0 xs12 class="home" :elevation="4">
      <!-- Boton Flotante Muestra la temperatura y el icono del clima -->
      <div class="btn__flotante">
         <!-- SVG simula el efecto curva en el boton -->
        <svg
          data-v-a1e948f8
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="160"
          viewBox="0 0 160 160"
          class="effect1"
        >
          <path
            data-v-a1e948f8
            id="Trazado_200"
            data-name="Trazado 200"
            d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
            transform="translate(0 10)"
          />
        </svg>
        <div class="clima_icono">
          <v-img
            pa-5
            class="pa-5"
            :src="`http://openweathermap.org/img/w/${icon}.png`"
            max-width
            height
          ></v-img>
        </div>

        <!-- Los grados Cntigrados -->
        <div class="clima_grados text-center justify-center align-center">
          <span class="text-center mt-4" style="font-size:30px; ">{{tempgrados}}°</span>
          <span class="mt-4 letra" style="color:#FFFFFF;">°C</span>
        </div>
        <!-- SVG simula el efecto curva en el boton -->
        <svg
          data-v-a1e948f8
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="160"
          viewBox="0 0 160 160"
          class="effect2"
        >
          <path
            data-v-a1e948f8
            id="Trazado_200"
            data-name="Trazado 200"
            d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
            transform="translate(0 10)"
          />
        </svg>
      </div>
      <!-- Contendor Card principal  -->
      <v-layout wrap justify-center  align-center m-0 class="container">
        <!-- primera fila Portada ṕrincipal -->
        <v-flex md12 sm12 pa-4 xs12 class="row_grid">
          <div class="imagen_contenedor">
            <!-- imagen de la portada principal -->
              <v-img
                pa-5
                class="pa-5 imagen_portada"
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                max-width="100%"
                height="220px"
            >
            <!-- Svg localizacion  -->
              <span class="country">
                <div class="svg_location">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 533.333 533.333"
                    style="enable-background:new 0 0 533.333 533.333"
                    xml:space="preserve"
                  >
                    <path
                      d="M266.666 0C174.618 0 100 74.619 100 166.667c0 166.667 166.667 366.667 166.667 366.667s166.667-200 166.667-366.667C433.333 74.619 358.713 0 266.666 0zm0 266.667c-55.229 0-100-44.771-100-100s44.771-100 100-100 100 44.771 100 100-44.771 100-100 100z"
                    />
                  </svg>
                </div>
                <div>Bogota</div>
              </span>
            </v-img>
          </div>
        </v-flex>
        <v-flex md12 sm12 pa-0 ma-0 xs12 class="row_grid">
          <!-- Fila dos, Contien 4 columnas  -->
          <v-layout wrap justify-center align-center pa-0 ma-0 class="container">
            <!-- Columna uno Dias siguientes-->
            <v-flex md3 sm6 p-0 ma-0 xs12 class="col_grid">
              <v-layout wrap justify-center align-center pa-0 ma-0 class="items_filas--titulo">
                <span class="titulo_main">
                  3 Days
                  <span class="sub_titulo">Forecast</span>
                </span>
              </v-layout>
              <v-flex md12 sm12 pa-4 ma-0 xs12 class="col_grid">
                <v-layout wrap justify-center align-center pa-2 ma-0 class="items_filas">
                  <div class="cards">
                    <v-layout wrap justify-center align-center pa-1 ma-0 class="container">
                      <v-flex
                        md2
                        sm2
                        pa-2
                        ma-0
                        xs2
                        class="col_grid_interna"
                        style="position:absolute; left:-7px;"
                      >
                        <v-img
                          pa-5
                          class="pa-5"
                          :src="`http://openweathermap.org/img/w/${icon}.png`"
                          max-width="100%"
                          height
                        ></v-img>
                      </v-flex>
                      <v-flex
                        md5
                        sm5
                        ma-0
                        pa-1
                        text-left
                        xs9
                        class="col_grid_interna texto_clima--interno"
                      >
                        <div class="peque_text--titulo">
                          Friday
                          <div class="peque_text">LLuvia</div>
                        </div>
                      </v-flex>
                      <v-flex md5 sm5 ma-0 xs4 class="col_grid_interna boton_flotante">
                        <div class="boton_tiempo">
                          <span class="linea_tiempo">31° / 27°</span>
                        </div>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-layout>
                <v-layout wrap justify-center align-center pa-2 ma-0 class="items_filas">
                  <div class="cards">
                    <v-layout wrap justify-center align-center pa-1 ma-0 class="container">
                      <v-flex
                        md2
                        sm2
                        pa-2
                        ma-0
                        xs2
                        class="col_grid_interna"
                        style="position:absolute; left:-7px;"
                      >
                        <v-img
                          pa-5
                          class="pa-5"
                          :src="`http://openweathermap.org/img/w/${icon}.png`"
                          max-width="100%"
                          height
                        ></v-img>
                      </v-flex>
                      <v-flex
                        md5
                        sm5
                        ma-0
                        pa-1
                        text-left
                        xs9
                        class="col_grid_interna texto_clima--interno"
                      >
                        <div class="peque_text--titulo">
                          Saturday
                          <div class="peque_text">Calor</div>
                        </div>
                      </v-flex>
                      <v-flex md5 sm5 ma-0 xs4 class="col_grid_interna boton_flotante">
                        <div class="boton_tiempo_next">
                          <span class="linea_tiempo">31° / 27°</span>
                        </div>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-layout>
                <v-layout wrap justify-center align-center pa-2 ma-0 class="items_filas">
                  <div class="cards">
                    <v-layout wrap justify-center align-center pa-1 ma-0 class="container">
                      <v-flex
                        md2
                        sm2
                        pa-2
                        ma-0
                        xs2
                        class="col_grid_interna"
                        style="position:absolute; left:-7px;"
                      >
                        <v-img
                          pa-5
                          class="pa-5"
                          :src="`http://openweathermap.org/img/w/${icon}.png`"
                          max-width="100%"
                          height
                        ></v-img>
                      </v-flex>
                      <v-flex
                        md5
                        sm5
                        ma-0
                        pa-1
                        text-left
                        xs9
                        class="col_grid_interna texto_clima--interno"
                      >
                        <div class="peque_text--titulo">
                          Sunday
                          <div class="peque_text">LLuvia</div>
                        </div>
                      </v-flex>
                      <v-flex md5 sm5 ma-0 xs4 class="col_grid_interna boton_flotante">
                        <div class="boton_tiempo_next">
                          <span class="linea_tiempo">31° / 27°</span>
                        </div>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-layout>
              </v-flex>
            </v-flex>
            <!-- Columna dos Fotografia del un lugar-->
            <v-flex md3 sm6 p-0 m-0 xs12 class="col_grid">
              <v-layout wrap justify-center align-center pa-0 ma-0 class="items_filas--titulo">
                <span class="titulo_main">
                  Place to
                  <span class="sub_titulo">Visit</span>
                </span>
              </v-layout>
              <v-layout wrap justify-center align-center pa-5 ma-0 class="items_fila--img">
                <div class="imagen_contenedor">
                  <v-img
                    pa-5
                    class="pa-5 imagen_portada"
                    src="https://images.unsplash.com/photo-1562685477-b4ece6c9e8ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80"
                    max-width="100%"
                    height="220px"
                  >
                    <span class="city_country">
                      <div class="svg_location">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          x="0"
                          y="0"
                          viewBox="0 0 533.333 533.333"
                          style="enable-background:new 0 0 533.333 533.333"
                          xml:space="preserve"
                        >
                          <path
                            d="M266.666 0C174.618 0 100 74.619 100 166.667c0 166.667 166.667 366.667 166.667 366.667s166.667-200 166.667-366.667C433.333 74.619 358.713 0 266.666 0zm0 266.667c-55.229 0-100-44.771-100-100s44.771-100 100-100 100 44.771 100 100-44.771 100-100 100z"
                          />
                        </svg>
                      </div>
                      <div>City Park</div>
                    </span>
                  </v-img>
                </div>
              </v-layout>
            </v-flex>

            <!-- Columna tres  -->
            <v-flex md3 sm6 p-0 m-0 xs12 class="col_grid">
              <v-layout wrap justify-center align-center pa-0 ma-0 class="items_filas--titulo">
                <v-flex md6 sm6 p-0 m-0 xs12 class="col_grid">
                  <span class="titulo_main">
                    <span class="sub_titulo">+ Top Recursos</span>
                  </span>
                </v-flex>
                <v-flex md6 sm6 pa-1 m-0 justify-center align-center xs12 class="col_grid">
                  <v-layout wrap justify-center align-center pa-0 ma-0 class="items_filas--titulo">
                    <v-flex md3 sm3 pa-2 ma-0 xs3 class="col_avatar">
                      <img
                        class="imagen_avatar"
                        src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        max-width="100%"
                        height="20px"
                      />
                    </v-flex>
                    <v-flex md3 sm3 p-0 m-0 xs3 class="col_avatar">
                      <img
                        class="imagen_avatar"
                        src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        max-width="100%"
                        height="20px"
                      />
                    </v-flex>
                    <v-flex md3 sm3 p-0 m-0 xs3 class="col_avatar">
                      <img
                        class="imagen_avatar"
                        src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        max-width="100%"
                        height="20px"
                      />
                    </v-flex>
                    <v-flex md3 sm3 p-0 m-0 xs3 class="col_avatar">
                      <span>+</span>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
              <v-layout wrap justify-center align-center pa-0 ma-0 class="items_fila--img">
                <v-flex md10 sm10 pa-0 mt-5 xs12 class="content_col">
                  <v-layout wrap justify-center align-center pa-0 ma-0 class="items_filas_img">
                    <div class="imagen_contenedor">
                      <v-img
                        pa-5
                        class="pa-5 imagen_portada"
                        src="https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        max-width="100%"
                        height="85"
                      >
                        <span class="city_country">
                          <div class="svg_location">
                            <svg
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              x="0"
                              y="0"
                              viewBox="0 0 533.333 533.333"
                              style="enable-background:new 0 0 533.333 533.333"
                              xml:space="preserve"
                            >
                              <path
                                d="M266.666 0C174.618 0 100 74.619 100 166.667c0 166.667 166.667 366.667 166.667 366.667s166.667-200 166.667-366.667C433.333 74.619 358.713 0 266.666 0zm0 266.667c-55.229 0-100-44.771-100-100s44.771-100 100-100 100 44.771 100 100-44.771 100-100 100z"
                              />
                            </svg>
                          </div>
                          <div>Mousem</div>
                        </span>
                      </v-img>
                    </div>
                  </v-layout>

                  <v-layout wrap justify-center mt-3 align-center pa-0 ma-1 class="items_filas_two">
                    <div class="imagen_contenedor">
                      <v-img
                        pa-5
                        class="pa-5 imagen_portada"
                        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        max-width="100%"
                        height="120"
                      >
                        <span class="city_country">
                          <div class="svg_location">
                            <svg
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              x="0"
                              y="0"
                              viewBox="0 0 533.333 533.333"
                              style="enable-background:new 0 0 533.333 533.333"
                              xml:space="preserve"
                            >
                              <path
                                d="M266.666 0C174.618 0 100 74.619 100 166.667c0 166.667 166.667 366.667 166.667 366.667s166.667-200 166.667-366.667C433.333 74.619 358.713 0 266.666 0zm0 266.667c-55.229 0-100-44.771-100-100s44.771-100 100-100 100 44.771 100 100-44.771 100-100 100z"
                              />
                            </svg>
                          </div>
                          <div>HousePink</div>
                        </span>
                        <div class="boton_add__tiempo">
                          <span>+</span>
                        </div>
                      </v-img>
                    </div>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>

            <!-- Columna cuatro -->
            <v-flex md3 sm6 p-0 ma-0  xs12 class="col_grid">
              <!-- componente lista de paises -->
               <!-- <country-app></country-app>  -->
                 <v-flex md11   pa-1 mt-1 xs12 class="content_col">
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
          </v-layout>
        </v-flex>
      </v-layout>
      <!-- <span>Home template</span> -->
    </v-flex>
  </v-layout>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      city: "Bogota",
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
      countrycode: "co"
    };
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

.svg_location {
  width: 20px;
  height: 20px;
  position: absolute;
  left: -25px;
}

.city_country {
  position: absolute;
  top: 15px;
  left: 30px;
  font-family: Poppins-Regular;
  font-size: 15px;
  color: #ffffff;
}
.country {
  position: absolute;
  top: 50px;
  left: 100px;
  font-family: Poppins-Regular;
  font-size: 22px;
  color: #7f70ec;
}
.top_code {
  position: absolute;
  top: 0px;
  left: 10px;
}



.linea_tiempo {
  font-family: Poppins-SemiBold;

  font-size: 11px;
}
.boton_flotante {
  position: absolute;
  right: -6px;
}
.titulo_main {
  font-family: Poppins-SemiBold;
  font-size: 20px;
  color:var(--titulo_col);
}

.boton_tiempo {
  width: 100%;
  height: 100%;
  background: #7f70ec;
  border-radius: 11px;
  transform: scale(1);
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  box-shadow: 0px 0px 7px 0px #666666a8;
  cursor: pointer;

  span {
    color: #ffffff;
  }
}
.boton_add__tiempo:hover{
 background: #7f70ece3;

}
.boton_add__tiempo {
  width: 55px;
  height: 100%;
  background: #7f70ec;
  border-radius: 25px;
  transform: scale(1);
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  box-shadow: 0px 0px 12px 0px #666666a8;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;

  span {
    color: #ffffff;
  }
}




.city_img {
  transform: scale(0.9);
  position: absolute;
  bottom: 0;
  margin-top: 19px;
}
.texto_clima--interno {
  right: 66px;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  line-height: 12px;
}
.cards {
  width: 85%;
  height: 100%;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.23);
  position: relative;
}
.col_grid_interna {
  width: 100%;
  height: 100%;
  position: absolute;
}



.peque_text--titulo {
  font-size: 12px;
  font-family: Poppins-SemiBold;
}

.sub_titulo {
  color: var(--letra);
  font-family: Poppins-Regular;
  font-size: 15px;
}
.items_filas--titulo {
  width: 100%;
  height: 10%;
}
.items_filas {
  width: 100%;
  height: 30%;
}


.items_fila--img {
  width: 100%;
  height: 90%;
}
.clima_icono {
  max-width: 90%;
  height: 70px;
  background: #333d87;
  border-top-right-radius: 23px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 23px;
  transition: max-width 0.25s ease;
}

.clima_icono:hover {
  opacity: 1;
  visibility: visible;
  max-width: 90px;
  transition: max-width 0.25s ease-in;
  cursor: pointer;
}

.clima_grados:hover {
  opacity: 1;
  visibility: visible;
  width: 90px;
  transition: width 0.25s ease-in;
  cursor: pointer;
}
.clima_grados {
  width: 90%;
  height: 80px;
  background: #7f70ec;
  transition: width 0.25s ease;
  position: absolute;
  top: 45px;
  z-index: -1;
  box-shadow: 0px 0px 12px 0px #666666a8;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 19px;
}

.effect1 {
  top: -30px;
  transform: rotate(182deg);
}
.effect1 {
  position: absolute;
  left: -1px;
  max-width: 25px;
  height: 40px;
  pointer-events: none;
  transition: all 0.2s ease, opacity 0.1s ease;
  fill: #333d87;
}
.effect2 {
  bottom: -25px;
  transform: rotate(-92deg);
}

.effect2 {
  position: absolute;
  left: -1px;
  max-width: 25px;
  max-height: 40px;
  pointer-events: none;
  transition: all 0.2s ease, opacity 0.1s ease;
  fill: #7f70ec;
}

.btn__flotante {
  width: 80px;
  height: 120px;
  // background: darkcyan;
  position: absolute;
  z-index: 2;
  top: 20%;
}

.imagen_portada {
  background-size: cover;
  border-radius: 25px;
  box-shadow: 0px 0px 2px 0px #666666a8;
}


.imagen_contenedor {
  width: 100%;
  height: 100%;
  padding: 0px;
  border-radius: 25px;
}


// div .v-image__image .v-image__image--cover{
//   margin-top: 14px;
// }


.col_grid {
  width: 100%;
  height: 100%;
}
.col_avatar {
  width: 100%;
  height: 25px;
  position: relative;
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0px 0px 2px 0px #666666a8;
  cursor: pointer;
}
.fondo_main {
  background: var(--fondo_body);
  width: 100%;
  height: 100%;
}
.home {
  background: var(--fondo_card);
  width: 100%;
  height: 100%;
  border-radius: 25px;
  margin-top: -50px;
  // -webkit-box-shadow: 0px 1px 9px -2px #666666a8;
  box-shadow: var(--sombra);
}

@media (max-width: 600px) {
  .row_grid {
    height: 271px;
  }
}
</style>
