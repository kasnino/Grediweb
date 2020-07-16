<template>
  <div id="app">
    <v-app id="thema" class="themalight">
         <header-app ></header-app> 
      <v-container class="container_app" fluid ma-0 pa-0 fill-height>
        <!-- Componente de header -->
     
       
               <router-view />
          
           
          <!-- </transition> -->
      </v-container>
        <!-- Componente de Navegacion -->
       <!-- <nav-menu-app ></nav-menu-app> -->
       
    
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import "sass/globals";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  font-size: 16pt;
  font-family: Poppins-Regular;
   background: var(--fondo_body);
  // background: cyan;
}
.container_app{ background: var(--fondo_body);}


@font-face {
  font-family: Poppins-Regular;
  src: url("./assets/fonts/Poppins-Regular.ttf");
}
@font-face {
  font-family: Poppins-SemiBold;
  src: url("./assets/fonts/Poppins-SemiBold.ttf");
}
@font-face {
  font-family: Poppins-Bold;
  src: url("./assets/fonts/Poppins-Bold.ttf");
}
@font-face {
  font-family: Poppins-BoldItalic;
  src: url("./assets/fonts/Poppins-BoldItalic.ttf");
}
@font-face {
  font-family: Poppins-Black;
  src: url("./assets/fonts/Poppins-Black.ttf");
}
@font-face {
  font-family: Poppins-Italic;
  src: url("./assets/fonts/Poppins-Italic.ttf");
}
@font-face {
  font-family: Poppins-Medium;
  src: url("./assets/fonts/Poppins-Medium.ttf");
}
@font-face {
  font-family: Poppins-MediumItalic;
  src: url("./assets/fonts/Poppins-MediumItalic.ttf");
}


</style>