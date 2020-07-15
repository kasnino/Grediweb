<template>
  <v-layout wrap justify-center align-center p-0 m-0 class="fondo_main">
                  <v-flex md9 sm9 p-0 m-0  xs12 class="home " :elevation="4" >
                      <div class="btn__flotante">

                        <svg data-v-a1e948f8="" xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160" class="effect1"><path data-v-a1e948f8="" id="Trazado_200" data-name="Trazado 200" d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z" transform="translate(0 10)"></path></svg>
                        <div class="clima_icono">

                        </div>
                           <div class="clima_grados">

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
                             <v-flex md12 sm12 p-0 m-0 pink xs12 class="row_grid">
                                <v-layout wrap justify-center align-center p-0 m-0 class="container">
                                  <v-flex md3 sm3 p-0 m-0 purple xs12 class="col_grid">
                                  </v-flex>
                                  <v-flex md3 sm3 p-0 m-0 yellow xs12 class="col_grid">
                                  </v-flex>
                                  <v-flex md3 sm3 p-0 m-0 red xs12 class="col_grid">
                                  </v-flex>
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

.clima_icono{
    width: 90%;
    height: 70px;
    background: #333d87;
    border-top-right-radius: 23px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 23px;
}
.clima_grados{
    width: 90%;
    height: 70px;
    background: #7f70ec;
    position: absolute;
    top: 52px;
    z-index: -1;
     border-bottom-left-radius: 10px;
    border-bottom-right-radius: 23px;
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
