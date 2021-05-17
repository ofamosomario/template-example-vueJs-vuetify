<template>

	<div>

		<v-dialog
		v-model="dialogTag"
		width="600"
		>

			<v-card>

				<v-card-title class="title primary" style="color:white">
					Atribuir Tags
				</v-card-title>

				<v-card-text>
					<br />

					<v-expansion-panels accordion flat mandatory>

						<v-expansion-panel>

							<v-expansion-panel-header color="primary" style="color:white">Criar Tag</v-expansion-panel-header>
							<v-expansion-panel-content>
								<br />
								<h3>Escolha o nome e a cor:</h3>

								<v-row>

									<v-color-picker
										disabled
										hide-canvas
										hide-inputs
										hide-mode-switch
										flat
										show-swatches
										:swatches="swatches"
										swatches-max-height="100px">

									</v-color-picker>
								</v-row>
									<v-divider></v-divider>
								<v-row>

									<v-spacer></v-spacer>

									<v-btn
									color="primary"
									text
									@click="changeDialogTag"
									>
									Salvar
									</v-btn>

								</v-row>
							</v-expansion-panel-content>


						</v-expansion-panel>

						<v-expansion-panel>

							<v-expansion-panel-header color="primary" style="color:white">Atribuir Tag</v-expansion-panel-header>
							<v-expansion-panel-content>
								<br />
								<h3>Faça a atribuição das propostas selecionadas às tags que desejar:</h3>

								<v-row>

								</v-row>

									<v-divider></v-divider>

								<v-row>

									<v-spacer></v-spacer>

									<v-btn
									color="darkGrey"
									text
									@click="changeDialogTag"
									>
									Desatribuir
									</v-btn>
									<v-btn
									color="primary"
									text
									@click="changeDialogTag"
									>
									Atribuir
									</v-btn>

								</v-row>
							</v-expansion-panel-content>


						</v-expansion-panel>
					</v-expansion-panels>

          
				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
					color="primary"
					text
					@click="changeDialogTag"
					>
					Fechar
					</v-btn>
				</v-card-actions>

			</v-card>

		</v-dialog>

	</div>

</template>

<script>
export default {
  name: "Tah",
  props: ['dialogTag'],
  data: () => ({

		select: '',
    swatches: [
      ['#FF0000', '#AA0000', '#550000'],
      ['#FFFF00', '#AAAA00', '#555500'],
      ['#00FF00', '#00AA00', '#005500'],
      ['#00FFFF', '#00AAAA', '#005555'],
      ['#0000FF', '#0000AA', '#000055'],
    ],
  }),
  methods: {

		changeDialogTag() {
			this.$emit('changeTagStatus')
		}

  }
}
</script>