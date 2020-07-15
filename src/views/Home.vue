<template>
  <v-layout wrap justify-center align-center p-0 m-0 class="fondo_main">
                  <v-flex md9 sm9 p-0 m-0  xs12 class="home " :elevation="4" >
                      <div class="btn__flotante">

                        <svg data-v-a1e948f8="" xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160" class="effect1"><path data-v-a1e948f8="" id="Trazado_200" data-name="Trazado 200" d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z" transform="translate(0 10)"></path></svg>
                        <div class="clima_icono">

                        </div>
                           <div class="clima_grados text-center justify-center align-center">
                              <span class="text-center">31°C</span>
                        </div>
                        <svg data-v-a1e948f8="" xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160" class="effect2"><path data-v-a1e948f8="" id="Trazado_200" data-name="Trazado 200" d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z" transform="translate(0 10)"></path></svg>
                      </div>
                      <v-layout wrap justify-center align-center  m-0 class="container">
                            <v-flex md12 sm12 pa-4 xs12 class="row_grid">
                              
                              <div class="imagen_contenedor">
                                  <v-img
                                  pa-5
                                  class=" pa-5 imagen_portada"
                                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                  max-width="100%"
                                  height="220px"
                                >
                                  </v-img>
                                </div>
 
                            </v-flex>
                             <v-flex md12 sm12 pa-0 ma-0  xs12 class="row_grid">
                                <v-layout wrap justify-center align-center pa-0 ma-0 class="container">
                                   <!-- Columna uno -->
                                  <v-flex md3 sm3 p-0 ma-0  xs12 class="col_grid">
                                     <v-layout wrap justify-center align-center pa-0 ma-0 class="items_filas--titulo">
                                       <span class="titulo_main">3 Days <span class="sub_titulo">Forecast</span></span>
                                     </v-layout>
                                       <v-flex md12 sm12 pa-4 ma-0  xs12 class="col_grid">
                                                <v-layout wrap justify-center align-center pa-2 ma-0 class="items_filas">
                                                  <div class="cards">
                                                     <v-layout wrap justify-center align-center pa-1 ma-0 class="container">
                                                    <v-flex md2 sm2 pa-2  ma-0  xs12 class="col_grid_interna">
                                                    </v-flex>
                                                    <v-flex md5 sm5 ma-0 pa-1 text-left  xs12 class="col_grid_interna texto_clima--interno">
                                                      <div class="peque_text--titulo">Friday
                                                        <div class="peque_text">LLuvia</div>
                                                      </div>
                                                      
                                                    </v-flex>
                                                     <v-flex md5 sm5  ma-0  xs12 class="col_grid_interna boton_flotante ">
                                                       <div class="boton_tiempo">
                                                         <span class="linea_tiempo">31° / 27°</span>
                                                       </div>
                                                    </v-flex>
                                                     </v-layout>
                                                  </div>
                                              </v-layout>
                                                <v-layout wrap justify-center  align-center pa-2 ma-0 class="items_filas">
                                                      <div class="cards">
                                                     <v-layout wrap justify-center align-center pa-1 ma-0 class="container">
                                                    <v-flex md2 sm2 pa-2  ma-0  xs12 class="col_grid_interna">
                                                    </v-flex>
                                                    <v-flex md5 sm5 ma-0 pa-1 text-left  xs12 class="col_grid_interna texto_clima--interno">
                                                      <div class="peque_text--titulo">Friday
                                                        <div class="peque_text">LLuvia</div>
                                                      </div>
                                                      
                                                    </v-flex>
                                                     <v-flex md5 sm5  ma-0  xs12 class="col_grid_interna boton_flotante ">
                                                       <div class="boton_tiempo">
                                                         <span class="linea_tiempo">31° / 27°</span>
                                                       </div>
                                                    </v-flex>
                                                     </v-layout>
                                                  </div>
                                              </v-layout>
                                                <v-layout wrap justify-center  align-center pa-2 ma-0 class="items_filas">
                                                     <div class="cards">
                                                     <v-layout wrap justify-center align-center pa-1 ma-0 class="container">
                                                    <v-flex md2 sm2 pa-2  ma-0  xs12 class="col_grid_interna">
                                                    </v-flex>
                                                    <v-flex md5 sm5 ma-0 pa-1 text-left  xs12 class="col_grid_interna texto_clima--interno">
                                                      <div class="peque_text--titulo">Friday
                                                        <div class="peque_text">LLuvia</div>
                                                      </div>
                                                      
                                                    </v-flex>
                                                     <v-flex md5 sm5  ma-0  xs12 class="col_grid_interna boton_flotante ">
                                                       <div class="boton_tiempo">
                                                         <span class="linea_tiempo">31° / 27°</span>
                                                       </div>
                                                    </v-flex>
                                                     </v-layout>
                                                  </div>
                                              </v-layout>
                                       </v-flex>
                                  </v-flex>
                                      <!-- Columna dos -->
                                  <v-flex md3 sm3 p-0 m-0  xs12 class="col_grid">
                                     <v-layout wrap justify-center align-center pa-0 ma-0 class="items_filas--titulo">
                                       <span class="titulo_main">Place to <span class="sub_titulo">Visit</span></span>
                                     </v-layout>
                                      <v-layout wrap justify-center align-center pa-5 ma-0 class="items_fila--img">
                                    
                                         <div class="imagen_contenedor">
                                          <v-img
                                          pa-5
                                          class=" pa-5 imagen_portada"
                                          src="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                          max-width="100%"
                                          height="220px"
                                        >
                                          </v-img>
                                </div>
                                     </v-layout>
                                  </v-flex>
                                 
                                    <!-- Columna tres -->
                                  <v-flex md3 sm3 p-0 m-0  xs12 class="col_grid">
                                      <v-layout wrap justify-center align-center pa-0 ma-0 class="items_filas--titulo">
                                       <span class="titulo_main"><span class="sub_titulo"> + Top Recursos</span></span>
                                     </v-layout>
                                      <v-layout wrap justify-center  align-center pa-0 ma-0 class="items_fila--img">
                                         <v-layout wrap justify-center primary align-center pa-0 ma-0 class="items_filas">
                                     </v-layout>
                                      <v-layout wrap justify-center pink align-center pa-0 ma-0 class="items_filas">
                                     </v-layout>
                                     </v-layout>
                                  </v-flex>

                                   <!-- Columna cuatro -->
                                  <v-flex md3 sm3 p-0 m-0 black xs12 class="col_grid">
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
  name: 'Home',
  components: {
   
  }
}
</script>
<style lang="scss" scoped>

.linea_tiempo{
   font-family: Poppins-SemiBold;
   color:#FFFFFF;
   font-size: 11px;
  
}
.boton_flotante{
  position: absolute;
  right: -6px;
}
.titulo_main{
 font-family: Poppins-SemiBold;
 font-size: 20px; 
}

.boton_tiempo{
  width: 100%;
  height: 100%;
  background: #7f70ec;
  border-radius: 11px;
  transform: scale(1.1);
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  box-shadow: 0px 0px 7px 0px #666666a8;
  cursor: pointer;
}

.texto_clima--interno{
  right: 66px;
  justify-content: center;
    align-items: center;
    align-content: center;
    display: flex;
    line-height: 12px;
}
.cards{
  width: 80%;
  height: 100%;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.23);
  position: relative;
 

}
.col_grid_interna{
  width: 100%;
  height: 100%;
  position: absolute;
}

.peque_text--titulo{
  font-size: 12px;
  font-family: Poppins-SemiBold;
}
.peque_text{
  font-size: 10px;
  color: #666666;
  font-family: Poppins-Regular;
}
.sub_titulo{
  color: #666666;
   font-family: Poppins-Regular;
   font-size: 15px;
}
.items_filas--titulo{
   width: 100%;
  height: 10%;
}
.items_filas{
  width: 100%;
  height: 30%;
}
.items_fila--img{
    width: 100%;
  height: 90%;
}
.clima_icono{
    max-width: 90%;
    height: 70px;
    background: #333d87;
    border-top-right-radius: 23px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 23px;
    transition: max-width .25s ease;
}

.clima_icono:hover{
  opacity: 1;
    visibility: visible;
    max-width: 90px;
    transition: max-width 0.25s ease-in;
    cursor: pointer;
}

.clima_grados:hover{
    opacity: 1;
    visibility: visible;
    width: 90px;
    transition: width 0.25s ease-in;
    cursor: pointer;
}
.clima_grados{
    width: 90%;
    height: 80px;
    background: #7f70ec;
    transition: width .25s ease;
    position: absolute;
    top: 45px;
    z-index: -1;
   box-shadow: 0px 0px 9px 0px #666666a8;
    border-top-right-radius: 10px;
     border-bottom-left-radius: 10px;
    border-bottom-right-radius: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-size: 19px;
}

.effect1{
      top: -30px;
      transform: rotate(182deg);
}
.effect1{
  position: absolute;
    left: -1px;
    max-width: 25px;
    height: 40px;
    pointer-events: none;
    transition: all 0.2s ease, opacity 0.1s ease;
    fill: #333d87;
}
.effect2{
  bottom: -25px;
    transform: rotate(-92deg);
}

.effect2{
  position: absolute;
    left: -1px;
    max-width: 25px;
    max-height: 40px;
    pointer-events: none;
    transition: all .2s ease,opacity .1s ease;
    fill: #7f70ec;
}


.btn__flotante{
  width: 80px;
  height: 120px;
  // background: darkcyan;
  position: absolute;
  z-index: 2;
  top: 20%;
}

.imagen_portada{
  background-size: cover;
  border-radius: 25px;
}
.imagen_contenedor{
  width: 100%;
  height: 100%;
  padding: 0px;
}
.container{
  width: 100%;
  height: 100%;
}
.row_grid{
  width: 100%;
  height: 50%;
  padding: 0px;
}
.col_grid{
  width: 100%;
  height: 100%;
}
.fondo_main{
  background: #e1e8f0;
  width: 100%;
  height: 100%;
}
.home{
  background: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  margin-top: -50px;
  -webkit-box-shadow: 0px 1px 9px -2px #666666a8;
  box-shadow: 0px 1px 9px -2px #666666a8;
  
}
</style>
