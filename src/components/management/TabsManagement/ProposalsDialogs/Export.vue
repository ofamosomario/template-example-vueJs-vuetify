<template>

	<div>

		<v-dialog
		v-model="dialogExport"
		width="900"
		>
			<v-card>

				<v-card-title class="title primary" style="color:white">
					Exportar
				</v-card-title>

				<v-card-text>
					
					<ExportDetails></ExportDetails>

				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
					color="primary"
					text
					@click="changeDialogExport"
					>
					Fechar
					</v-btn>
				</v-card-actions>

			</v-card>

		</v-dialog>

	</div>

</template>

<script>
import ExportDetails from './ExportDetails';
export default {
  name: "ExportDialog",
	components: {
		ExportDetails
	},
  props: ['dialogExport'],

  methods: {

		changeDialogExport() {
			this.$emit('changeExportStatus')
		}

  }
}
</script>