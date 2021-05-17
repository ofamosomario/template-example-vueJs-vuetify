<template>

	<div>

		<v-dialog
		v-model="dialogReviewerAssigned"
		width="500"
		>
			<v-card>

				<v-card-title class="title primary" style="color:white">
					Pareceristas atribuído(s)
				</v-card-title>

				<v-card-text>
					<br />
					<h4>
						Faça a atribuição das propostas selecionadas aos 
						pareceristas que desejar:
					</h4>

				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions>
					<v-btn
					color="darkGrey"
					text
					@click="changeDialogStatus"
					>
					Fechar
					</v-btn>
					<v-spacer></v-spacer>
					<v-btn
					color="error"
					text
					@click="changeDialogStatus"
					>
					Remover
					</v-btn>
					<v-btn
					color="primary"
					text
					@click="changeDialogStatus"
					>
					Adicionar
					</v-btn>
				</v-card-actions>

			</v-card>

		</v-dialog>

	</div>

</template>
<script>
export default {
  name: "ReviewerAssigned",
  props: ['dialogReviewerAssigned'],

  methods: {

		changeDialogStatus() {
			this.$emit('changeReviewerAssignedStatus')
		}

  }
}
</script>