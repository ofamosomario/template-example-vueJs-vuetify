<template>

	<div>

		<v-dialog
		v-model="dialogWarning"
		width="500"
		>
		<v-card>

			<v-card-title class="title primary" style="color:white">
				Exibir seus Resultados
			</v-card-title>

			<v-card-text>
				<br />
				Ao abilitar esta opção seus resultados serão exibidos publicamente. Deseja tornar visível seus resultados neste edital?
			</v-card-text>

			<v-divider></v-divider>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
				color="primary"
				text
				@click="dialogWarning = false"
				>
				Salvar
				</v-btn>
			</v-card-actions>

		</v-card>

		</v-dialog>

	<v-card-text>
		<v-row>
			<v-col cols="8">

				<v-row>

					<v-col cols="12">

						<v-textarea
						outlined
						name="input-7-4"
						label=""
						value=""
						counter="8000"
						></v-textarea>

						<v-switch v-model="showResult" 
						label="Desejo que o resultado seja exibido na visualização do meu edital."></v-switch>

					</v-col>

				</v-row>

			</v-col>

			<v-col>

				<h3>Exibir seus Resultados:</h3>

				<v-divider></v-divider>

				<br />

				Utilize este campo para fazer a divulgação do seu edital. Você pode alterar e salvar até que a divulgação seja feita ativando a opção inferior ao campo de texto.

			</v-col>
		</v-row>

	</v-card-text>

  <v-card-actions>
    <v-btn text>Salvar</v-btn>
  </v-card-actions>

	</div>
</template>

<script>
export default {
	data: () => ({
		dialogWarning: false,
		showResult: false,
	}),

  watch : {
		showResult:function(val) {
			if ( val == true ) {
				this.dialogWarning = true;
			}
		}
  }
}
</script>