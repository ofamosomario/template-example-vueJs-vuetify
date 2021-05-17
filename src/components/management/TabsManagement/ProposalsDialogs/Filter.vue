<template>

	<div>

		<v-dialog
		v-model="dialogFilter"
		width="900"
		>

			<v-card>

				<v-card-title class="title primary" style="color:white">
					Filtrar Propostas
				</v-card-title>

				<v-card-text>
					<br />

					<v-row>
						<v-col>
							<v-text-field 
							label="Nome da proposta">
							</v-text-field>
						</v-col>
						<v-col>
							<v-combobox
							:items="items"
							label="Chave/Id"
							multiple
							></v-combobox>
						</v-col>
						<v-col>
							<v-combobox
							:items="items"
							label="Etapas"
							multiple
							></v-combobox>		
						</v-col>
					</v-row>

					<v-row>
						<v-col>
							<v-text-field 
							label="Nome do empreeendedor">
							</v-text-field>
						</v-col>
						<v-col>
							<v-combobox
							:items="items"
							label="Tipo de pessoa"
							multiple
							></v-combobox>
						</v-col>
						<v-col>
							<v-combobox
							:items="items"
							label="Status do compliance"
							></v-combobox>
						</v-col>
					</v-row>

					<v-row>
						<v-col>
							<v-combobox
							:items="items"
							label="Local de atuação"
							multiple
							></v-combobox>
						</v-col>
						<v-col>
							<v-combobox
							:items="items"
							label="Fonte de financiamentos"
							multiple
							></v-combobox>
						</v-col>
						<v-col>
							<v-combobox
							:items="items"
							label="Área de atuação"
							multiple
							></v-combobox>
						</v-col>
					</v-row>

					<v-row>
						<v-col>
							<v-combobox
							:items="items"
							label="Estado sede"
							multiple
							></v-combobox>
						</v-col>
						<v-col>
							<v-combobox
							:items="items"
							label="Cidade sede"
							multiple
							></v-combobox>
						</v-col>
						<v-col>
							<v-combobox
							:items="items"
							label="Objetivos de desenvolvimento sustentável"
							multiple
							></v-combobox>
						</v-col>
					</v-row>

					<v-row>
						<v-col>
							<v-combobox
							:items="items"
							label="Perguntas (apenas múltiplas opções/escolha)"
							multiple
							></v-combobox>
						</v-col>
						<v-col>
							<v-combobox
							:items="items"
							label="Tag"
							multiple
							></v-combobox>
						</v-col>
						<v-col>
							
						</v-col>
					</v-row>

				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
					color="primary"
					text
					>
					Limpar Filtro
					</v-btn>
					<v-btn
					color="primary"
					text
					@click="changeDialogStatus"
					>
					Filtrar
					</v-btn>
				</v-card-actions>

			</v-card>

		</v-dialog>		

	</div>

</template>
<script>
export default {
  name: "Filter",
  props: ['dialogFilter'],

	data: () => ({

	}),

  methods: {

		changeDialogStatus() {
			this.$emit('changeFilterStatus')
		}

  }
}
</script>