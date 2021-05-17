<template>

  <v-card
    class="mx-auto"
    max-width="100%"
    outlined
    elevation="0"
    style="width:100%; border: 0px"
  >

    <v-card-text>

      <v-divider></v-divider>

      <v-tabs centered grow v-model="tab">
        <v-tab key="OportunityData" style="font-size:10px;">
          Dados do edital
        </v-tab>
        <v-tab key="criteria" style="font-size:10px">
          Critério de avaliação
        </v-tab>
        <v-tab key="reviewers" style="font-size:10px">
          Pareceristas
        </v-tab>
        <v-tab key="inviteEntrepreneurs" style="font-size:10px">
          Convidar Empreendedores
        </v-tab>
        <v-tab key="dates" style="font-size:10px">
          Datas
        </v-tab>
        <v-tab key="results" style="font-size:10px">
          Resultados
        </v-tab>
        <v-tab key="whitelabel" style="font-size:10px">
          Whitelabel
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item key="oportunityData">
          <v-card elevation="0">
            <OportunityData></OportunityData>
          </v-card>
        </v-tab-item>
        <v-tab-item key="criteria">
          <v-card elevation="0">
            <Criteria :initCriteriaVar="initCriteriaVar"></Criteria>
          </v-card>
        </v-tab-item>
        <v-tab-item key="reviewers">
          <v-card elevation="0">
            <Reviewers></Reviewers>
          </v-card>
        </v-tab-item>
        <v-tab-item key="inviteEntrepreneurs">
          <v-card elevation="0">
            <InviteEntrepreneurs></InviteEntrepreneurs>
          </v-card>
        </v-tab-item>
        <v-tab-item key="dates">
          <v-card elevation="0">
            <Dates></Dates>
          </v-card>
        </v-tab-item>
        <v-tab-item key="results">
          <v-card elevation="0">
            <Result></Result>
          </v-card>
        </v-tab-item>
        <v-tab-item key="whitelabel">
          <v-card elevation="0">
            <WhiteLabel></WhiteLabel>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

  </v-card-text>

  </v-card>

</template>

<script>
import Dates from './Tabs/Dates';
import Result from './Tabs/Result';
import Criteria from './Tabs/Criteria';
import Reviewers from './Tabs/Reviewers';
import WhiteLabel from './Tabs/WhiteLabel';
import OportunityData from './Tabs/OportunityData';
import InviteEntrepreneurs from './Tabs/InviteEntrepreneurs';
export default {
  name: "Index",
  components: {
    Dates,
    Result,
    Criteria,
    Reviewers,
    WhiteLabel,
    OportunityData,
    InviteEntrepreneurs
  },
  data: () => ({
    tab: null,
  }),
  mounted() {
  },
  methods: {

    changeInitCriteriaVar() {
      console.log('aqui');
      this.initCriteriaVar = true
    }

  }
};
</script>