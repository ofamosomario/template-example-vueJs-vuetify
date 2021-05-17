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
        <v-tab key="proposals" style="font-size:10px;">Propostas</v-tab>
        <v-tab key="review" style="font-size:10px">Etapas de Análise</v-tab>
        <v-tab key="statistic" style="font-size:10px">Estatísticas</v-tab>
        <v-tab key="export" style="font-size:10px">Exportar</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item key="proposals">
          <v-card elevation="0">
            <Proposals></Proposals>
          </v-card>
        </v-tab-item>
        <v-tab-item key="review">
          <v-card elevation="0">
            <Review></Review>
          </v-card>
        </v-tab-item>
        <v-tab-item key="statistic">
          <v-card elevation="0">
            <Statistic></Statistic>
          </v-card>
        </v-tab-item>
        <v-tab-item key="export">
          <v-card elevation="0">
            <Export></Export>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

  </v-card-text>

  </v-card>

</template>

<script>
import Review from './TabsManagement/Review';
import Export from './TabsManagement/Export';
import Statistic from './TabsManagement/Statistic';
import Proposals from './TabsManagement/Proposals';
export default {
  name: "Index",
  components: {
    Review,
    Export,
    Statistic,
    Proposals,
  },
  data: () => ({
    tab: null,
  }),
  methods: {
  }
};
</script>