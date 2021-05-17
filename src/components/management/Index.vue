<template>

  <v-card
    class="mx-auto"
    max-width="100%"
    outlined
    elevation="1"
    style="width:100%"
  >

    <v-card-text>
      
      <v-tabs icons-and-text centered right v-model="tab" height="60">

        <v-row>

          <v-col cols="6">
            <v-avatar>
              <a href="/">
                <img 
                  alt="Logo" 
                  src="https://prosas.com.br/system/empreendedores/avatares/000/039/246/show/perfil_empreendedor_6105d6cc76af400325e94d588ce511be5bfdbb73b437dc51eca43917d7a43e3d.png?1583843863"
                >
              </a>
            </v-avatar>
              Edital 01 -
              Edital Público
          </v-col>

        </v-row>

        <v-tab key="settings">
          Configurações do edital
          <v-icon>mdi-tools</v-icon>
        </v-tab>
        <v-tab key="managements">
          Gerenciar Proposta(s)
          <v-icon>mdi-feature-search</v-icon> 
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">

        <v-tab-item key="settings">
          <Setting ></Setting>
        </v-tab-item>

        <v-tab-item key="managements">
          <Management></Management>
        </v-tab-item>

      </v-tabs-items>

  </v-card-text>

  </v-card>

</template>

<script>
import Management from './Management';
import Setting from './Setting';
export default {
  name: "Index",
  components: {
    Management,
    Setting,
  },
  data: () => ({
    tab: null,
  }),
  methods: {
  }
};
</script>

<style>
  a { color:#20c09e !important;  text-decoration: none}
  body {
    background-color: #fbfbfb !important;
    font-family: 'Source Sans Pro', sans-serif !important;
  }
  .padding-card {
    padding-left: 8px; padding-right: 8px;
  }
  .open-viewer {
    position: relative;
    top: 35px;
  }
  .custom-divider {
    height: 1px;
    background-color: rgba(0,0,0,.12);
    width: 100%;
  }
  .div-body-card {
     top: -60px; height: 220px; position: relative;
  }
  .votes-item {
    text-align: center;
    width: 100%;
    color: #934e6d;
    font-size: 14px;
    font-weight: bold;
    padding-bottom: 10px;

  }
  .selected-projects {
    margin-top: 10px;
    font-size: 20px;
  }
  .selected-projects-sub{
    margin-top: 12px;
    font-weight: bold;
    font-size: 14px;
    color: #4b4a4f;
  }
  .padding-new-item {
    padding-top: 6px;
  }
  .text-card-item {
    font-size: 13px;
    color: #4b4a4f;
  }
  .card-title-bloc {
    width: 100% !important;
  }
  .div-break {
    position: relative;
    height: 10px;
    width: 100px;
  }
  .line-break {
    float: left;
    position: relative;
    width: 35%;
    height: 2px;
    top: 1px;
    background-color: #9a9ca4;
  }
  .line-weight-break {
    float: left;
    position: relative;
    width: 30%;
    height: 5px;
    background-color:#4b4a4f;
  }
  .divider-central {
    background-color: #fbfbfb !important;
    border-bottom: 2px solid #d5d6d6;
  }
  .row-no-border {
    background-color:#f0f2f2 !important;
    border:0px !important;
    border-radius:0px !important;
  }
  .card-title-item {
    border: none !important;
    background-color: #f0f2f2 !important;
    border:0px !important;
    border-radius:0px !important;
  }
  .data-description {
    margin-top: 20px;
    text-align: center;
    width: 100%;
    overflow: auto;
    margin-bottom: 28px;
  }
  .data-description-content {
    text-align: center;
    max-width: 950px;
    height: 140px;
    font-size: 14px;
  }
  .data-title {
    width: 100%;
    text-align: center;
    padding-top: 35px;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    color:#934e6d
  }
  .page-type-title {
    width: 100%;
    position: relative;
    padding-top: 93px;
    text-align: left;
    font-size: 38px;
    color: #fbfbfb;
    font-weight: bold;
    text-transform: uppercase;
    padding-left: 12%;
  }
  .first-block {
    background-color: #934e6d !important;
    height: 300px;
  }
  .img-logo {
    width: 100%;
    height: 40px;
    padding: 10px;
    margin-bottom: 7px;
  }
  .height2 {
    min-height: 250px;
  }
  .row-grey {
    background-color: #f0f2f2;
    min-height: 100px;
    border-top: 2px solid #d5d6d6;
    padding-top: 25px;
  }
  .card-layout {
    border: 0px;
    background-color: #f0f2f2 !important;
  }
  .card-text {
    background-color: #f0f2f2;
    padding-top: 50px;
  }
  .avt {
    position: relative;
    top: -28px;
    left: 10px;
    border: 4px solid white !important;
  }
  .card-title {
    position: relative;
    top: -90px;
    left: 90px;
    height: 0px;
    width: 250px;    
    font-size: 15px;
    line-height: 16px !important;
    color: #934e6d;
  }
  .foot {
    height: 50px;
    background-color: #857256 !important;
  }
  .copy {
    text-transform: uppercase;
    color: white;
    font-size: 10px;
  }
  .divid {
    border: 1px solid;
    width: 20%;
  }
  .pd-top20 {
    padding-bottom: 20px;
  }
  .v-sheet {
    border-radius: 0px !important;
  }
  .v-btn {
    border-radius: 0px !important;
  }

  .img-slider {
    width: 100%;
    height: 220px !important;
  }

  label {
    font-size: small;
  }


 .project-item {
    margin-right: 15px;
  }
</style>