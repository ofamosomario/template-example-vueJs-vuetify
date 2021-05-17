<template>

	<div>

		<v-dialog
		v-model="dialogColumn"
		width="300"
		>
			<v-card>

				<v-card-title class="title primary" style="color:white">
					Coluna(s) visíveis
				</v-card-title>

				<v-card-text>
					<br />

          <v-checkbox
            v-model="ex4"
            label="Coluna X"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="ex4"
            label="Coluna X"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="ex4"
            label="Coluna X"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>

				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
					color="primary"
					text
					@click="changeDialogColumn"
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
  name: "Column",
  props: ['dialogColumn'],

  methods: {

		changeDialogColumn() {
			this.$emit('changeColumnStatus')
		}

  }
}
</script>