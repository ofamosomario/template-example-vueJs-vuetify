<template>
	<div>

		<v-card-text>
			
			<v-row>
				<h2 class="font-weight-light" style="color:#415b64">Cabeçalho</h2>
			</v-row>

			<v-row style="margin-bottom: 15px">
				<v-divider></v-divider>
			</v-row>

			<v-row>
				<caption>
					Crie o HTML que deseja aparecer como cabeçalho do seu edital. Caso queira usar o menu de login do prosas, inclua no html a palavra PROSAS_USER_MENU
				</caption>

				<br />
				<br />

        <v-textarea
          outlined
          name="input-7-4"
          label="Escreva aqui o HTML do cabeçalho."
          value=""
          style="width:100%"
        ></v-textarea>

			</v-row>

		</v-card-text>

		<v-card-text>
			
			<v-row>
				<h2 class="font-weight-light" style="color:#415b64">Rodapé</h2>
			</v-row>
			
			<v-row style="margin-bottom: 15px">
				<v-divider></v-divider>
			</v-row>

			<v-row>
				<caption>
					Crie o HTML que deseja aparecer como rodapé do seu edital.
				</caption>

				<br />
				<br />

        <v-textarea
          outlined
          name="input-7-4"
          label="Escreva aqui o HTML do rodapé."
          value=""
          style="width:100%"
        ></v-textarea>

			</v-row>

		</v-card-text>

		<v-card-text>
			
			<v-row>
				<h2 class="font-weight-light" style="color:#415b64">CSS</h2>
			</v-row>
			
			<v-row style="margin-bottom: 15px">
				<v-divider></v-divider>
			</v-row>

			<v-row>
				<caption>
					Customize qualquer propriedade do widget de inscrição, seja o cabeçalho, rodapé ou conteúdo.
				</caption>

				<br />
				<br />

        <v-textarea
          outlined
          name="input-7-4"
          label="Escreva aqui o CSS de customização."
          value=""
          style="width:100%"
        ></v-textarea>

			</v-row>

		</v-card-text>

    <v-card-actions>
      <v-btn text>Salvar</v-btn>
    </v-card-actions>

	</div>
</template>

<script>
export default {
  name: "WhiteLabel",
}