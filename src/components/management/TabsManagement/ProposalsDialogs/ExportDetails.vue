<template>

	<div>

		<br />

		<h3>O que deseja exportar?</h3>

		<v-row>
			<v-col cols="2">
				
				<div style="margin-top: 30px">
					<v-icon>mdi-check-all</v-icon>
					Planilha XLS
				</div>

			</v-col>
			<v-col cols="2">
				
				<v-checkbox
				v-model="ex4"
				label="Proposta em PDF"
				color="success"
				value="success"
				hide-details
				></v-checkbox>

			</v-col>
			<v-col cols="4">
				
				<v-checkbox
				v-model="ex4"
				label="Arquivos de respostas e complementares"
				color="success"
				value="success"
				hide-details
				></v-checkbox>

			</v-col>
			<v-col cols="2">

				<v-checkbox
				v-model="ex4"
				label="Avaliação e pareceres"
				color="success"
				value="success"
				hide-details
				></v-checkbox>

			</v-col>
			<v-col cols="2">

				<v-checkbox
				v-model="ex4"
				label="Diligência"
				color="success"
				value="success"
				hide-details
				></v-checkbox>

			</v-col>
		</v-row>

		<br />

		<v-row>

			<v-col cols="12">
			<v-icon color="primary">mdi-filter</v-icon>
			<v-btn
				color="primary"
				text
				@click="changeDialogExport"
				>
				Selecionar os dados exportados na planilha
			</v-btn>
		</v-col>

		</v-row>

		<br />

		<v-row>

			<span>

			<srong>OBS:</srong> Ao selecionar para incluir Propostas em PDF, Arquivo de Respostas e Complementares ou Avaliações e Pareceres, a a exportação será realizada no período da noite. Quando a exportação for finalizada, será enviado um e-mail contendo os links para o download. Caso preferir, os links também estarão disponíveis nesta página..

			</span>

		</v-row>

		<br />

		<v-row>

			<v-spacer></v-spacer>
			<v-btn
			color="primary"
			@click="changeDialogExport"
			>
			Exportar
			</v-btn>

		</v-row>

	</div>

</template>
<script>
export default {
  name: "ExportDetails",
}
</script>