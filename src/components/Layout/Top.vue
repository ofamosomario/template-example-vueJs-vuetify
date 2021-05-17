<template>
  <div class="text-center">
    <v-menu offset-y>
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-avatar v-bind="attrs" v-on="on" size="50" class="img-menu">
          <img :src="grantmaker.logo" alt="Patrocinador" />
        </v-avatar>
      </template> -->
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>
            <a :href="item.url" class="menu-item">
              <v-row>
                <v-col cols="2">
                  <v-icon>{{item.icon}}</v-icon>
                </v-col>

                <v-col cols="10">{{ item.title }}</v-col>
              </v-row>
            </a>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
  props: {
    // grantmaker: null,
  },
  data: () => ({
    grantmaker: {
      logo: "https://cdn.vuetifyjs.com/images/profiles/marcus.jpg",
      id: "3",
    },
    items: [
      { title: "Início", icon: "start", url: "/users" },
      { title: "Menu Cadastro", icon: "create", url: "/users" },
      {
        title: "Meus Editais",
        icon: "my_library_books",
        url: "dashboards/my-opportunities",
      },
      { title: "Monitoramento", icon: "equalizer", url: "/dashboards/monitors" },
      { title: "Votação", icon: "how_to_vote", url: "/dashboards/polls" },
      {
        title: "Gerenciar Usuários",
        icon: "account_circle",
        url: "/usuarios_convidados/incentivador",
      },
      { title: "Indique o Prosas", icon: "send", url: "/convidar" },
      { title: "Sair", icon: "power_settings_new", url: "/users/sign_out" },
    ],
  }),
  created() {
    this.setUrls();
  },
  methods: {
    setUrls() {
      const urlLocal = "http://localhost:8080";
      let url = "prosas.com.br";

      if (document.location.href.includes(urlLocal)) {
        url = "http://localhost:3000";
      }

      this.items.map((itemMenuObj) => {
        let item = itemMenuObj;
        item.url = url + itemMenuObj.url;

        if (item.title == "Menu Cadastro") {
          item.url = `${itemMenuObj.url}/patrocinadores/${this.grantmaker.id}/editar`;
        }
        item;
      });
    },
  },
};
</script>
<style scoped>
.img-menu {
  margin-top: 2%;
  border: solid 2px;
  margin-left: 80%;
}

.menu-item {
  color: #49585b;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s;
}

.menu-item:hover {
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
}
</style>