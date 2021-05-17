<template>
  <div id="app-base-container">

    <v-dialog
    v-model="dialogBug"
    width="500"
    >
    <v-card>

      <v-card-title class="title green" style="color:white">
        Encontrou algum problema?
      </v-card-title>

      <v-card-text style="text-align: justify;">
        <br />
        O novo painel está em sua fase final de desenvolvimento, caso
        tenha encontrado algum problema ou erro, por favor relate abaixo
        o ocorrido. Além disso caso queira avaliar o novo painel, sinta-se
        a vontade.

        <br />
        <br />

        Att: Equipe Prosas.

        <br />
        <br />

        <v-textarea
          outlined
          name="input-7-4"
          label="Descreva o problema"
          value=""
        ></v-textarea>

        Qual o seu nível de satisfação com o novo painel?

        <br />

        <v-rating
        v-model="rating"
        empty-icon="mdi-heart-outline"
        full-icon="mdi-heart"
        color="red"
        background-color="grey"
        dense
        >
        </v-rating>

      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
        text
        @click="dialogBug = false"
        >
        Salvar
        </v-btn>
      </v-card-actions>

    </v-card>

    </v-dialog>

    <v-app-bar
      app
      color="secondary"
      elevation="1"
      dark
    >
      <v-container>

        <v-row 
          align="center" 
          justify="center"
          no-gutters
        >
          <v-col align="left" justify="center">
            <a href="/">
              <img 
                alt="Logo" 
                src="https://prosas.com.br/assets/logo-branco-97434b9a86929f4d8449ed42a8782ebd.png"
                height="18" width="64" 
              >
            </a>
          </v-col>
          
          <v-col align="center" justify="center">
            <span 
              class="white--text headline"
            >
              Configurações do Edital
            </span>
          </v-col>
          
          <v-col align="right" >
            <Top></Top>
          </v-col>
        </v-row>

      </v-container>
    </v-app-bar>
    
    <v-container id="main-container">
      <router-view></router-view>
    </v-container>

    <v-footer class="footer" padless
    >
      <v-card
        flat
        tile
        width="100%"
        color="secondary"
        class="text-center "
      >

        <v-btn
          absolute
          dark
          fab
          top
          right
          color="green"
          @click="dialogBug = true"
        >
          <v-icon>mdi-bug</v-icon>
        </v-btn>

        <div class="footer">
          <span
            v-for="(link, index) in footerLinks" 
            :key="index"
          >
            <router-link
                :to="{path: 'link.routerName'}"
                :href="link.url" 
                clickable
                target="_blank"
                class="white--text"
            > 
              <span class="text-link">{{ link.name }}</span>
            </router-link>
           
            <span v-if="index !== footerLinks.length - 1">
               &nbsp;&nbsp;
               <span class="white">
                <v-divider inset vertical></v-divider>
              </span>
              &nbsp;&nbsp;
            </span>
            
          </span>
        </div>
        <div layout="row" layout-align="center center" class="layout-align-center layout-row">
            <div id="social-network">
                <div layout="row" layout-xs="column" class="layout-xs-column layout-row">
                    <div flex="100" flex-xs="100" class="flex-xs-100 flex-100">
                        <ul class="svgmidia layout-margin layout-row" layout="row" layout-margin="">
                            <li flex="30" class="flex-30">
                                <a href="https://www.facebook.com/prosasconecta" target="_blank" rel="noopener">
                                    <img alt="Facebook icon" src="https://prosas.com.br/img/redes_sociais/facebook_icon.png">
                                </a>
                            </li>
                            <li flex="30" class="flex-30">
                                <a href="https://www.instagram.com/prosasconecta/" target="_blank" rel="noopener">
                                    <img alt="Instagram icon" src="https://prosas.com.br/img/redes_sociais/instagram_icon.png">

                                </a>
                            </li>
                            <li flex="30" class="flex-30">
                                <a href="https://www.linkedin.com/company/prosas/" target="_blank" rel="noopener">
                                    <img alt="Linkedin icon" src="https://prosas.com.br/img/redes_sociais/linkedin_icon.png">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </v-card>
    </v-footer>

  </div>
</template>


<script>
import Top from './Top';
export default {
  name: 'BaseLayout',
  components: {
    Top
  },
  data: () => ({
    dialogBug: false,
    footerLinks: [{
      name: "SOBRE O PROSAS",
      url: "https://prosas.com.br/sobre",
      routerName: "about"
    }, {
      name: "TERMOS DE USO",
      url: "https://prosas.com.br/termos",
      routerName: "terms"
    }, {
      name: "FUNCIONALIDADES",
      url: "https://prosas.com.br/para-patrocinadores",
      routerName: "functionality"
    }, {
      name: "ALERTA DE EDITAIS",
      url: "https://prosas.com.br/conheca-alerta-editais",
      routerName: "alert"
    }, {
      name: "PARCEIROS",
      url: "https://prosas.com.br/parceiros",
      routerName: "partners"
    }, {
      name: "DEPOIMENTOS",
      url: "https://prosas.com.br/depoimentos",
      routerName: "testimony"
    }, {
      name: "BLOG",
      url: "http://blog.prosas.com.br",
      routerName: "blog"
    }, {
      name: "CONTATO",
      url: "https://prosas.com.br/contatos",
      routerName: "contact"
    }],
    menuLinks: [
      { title: 'INÍCIO' , link: '' , icon: 'home' },
      { title: 'MEU CADASTRO' , link: '' , icon: 'home' },
      { title: 'SAIR' , link: '' , icon: 'home' },
    ],
  }),
  mounted() {
    let vueFormWzd = document.createElement('script');
    vueFormWzd.setAttribute('src', 'https://unpkg.com/vue-form-wizard/dist/vue-form-wizard.js');
    document.head.appendChild(vueFormWzd);
  },
};
</script>

<style scoped>
  #main-container {
    height: 100%;
    min-height: calc(100vh - 123px);
    max-width: 1182px;
  }
  .footer {
    width: 100%;
    background: #37474f!;
    margin: 0;
    z-index: 1;
    position: relative;
    border-top: 2px solid #ca1712;
    list-style: outside none none;
    font-family: 'Source Sans Pro', sans-serif;
    color: #4d4c4c !important;
    font-size: 12px !important;
    line-height: 1.42857143 !important;
    box-sizing: border-box;
  }

  .text-link {
    color: #fff;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0 0px;
    line-height: 12px;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    background-color: transparent;
    list-style: outside none none;
    box-sizing: border-box;
  }
  .layout-align-center {
    -webkit-box-orient: horizontal;
    flex-direction: row;
    -webkit-box-direction: normal;
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-content: center;
    -webkit-box-pack: center;
    justify-content: center;
    list-style: outside none none;
    max-width: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    color: #4d4c4c;
    box-sizing: border-box;
    line-height: 1.42857143;
  }
  .social-network {
    max-width: 160px;
    margin: 20px 0 4px;
  }
  .svgmidia li {
    float: left;
    overflow: hidden;
    margin: 0 auto;
    display: table;
    color: #fff;
    border-left: none;
    line-height: 0px;
    padding: 0;
    margin: 0 0 10px;
  }
  .svgmidia li a {
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
    line-height: 10px;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    background-color: transparent;
    list-style: outside none none;
  }
  .svgmidia li a img {
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    height: 20px;
  }
</style>