<template>

	<div>

		<Tag 
			:dialogTag="dialogTag"
			@changeTagStatus="changeTagStatus"
		>
		</Tag>
		<Column 
			:dialogColumn="dialogColumn"
			@changeColumnStatus="changeColumnStatus"
		>
		</Column>
		<Export 
			:dialogExport="dialogExport"
			@changeExportStatus="changeExportStatus"
		>
		</Export>
		<Filter 
			:dialogFilter="dialogFilter"
			@changeFilterStatus="changeFilterStatus"
		>
		</Filter>

		<ReviewerAssigned 
			:dialogReviewerAssigned="dialogReviewerAssigned"
			@changeReviewerAssignedStatus="changeReviewerAssignedStatus"
		>	
		</ReviewerAssigned>

		<v-card-text>
			<v-row>
					
					<div style="margin-top: 22px; margin-right: 10px"><strong>Filtrar status:</strong></div>

					<v-checkbox v-model="selected" label="" value=""></v-checkbox><v-icon color="primary" style="margin-right: 10px">mdi-check-all</v-icon>
					<v-checkbox v-model="selected" label="" value=""></v-checkbox><v-icon color="primary" style="margin-right: 10px">mdi-check</v-icon>
					<v-checkbox v-model="selected" label="" value=""></v-checkbox><v-icon color="error" style="margin-right: 10px">mdi-check-all</v-icon>
					<v-checkbox v-model="selected" label="" value=""></v-checkbox><v-icon color="error" style="margin-right: 10px">mdi-check</v-icon>
					<v-checkbox v-model="selected" label="" value=""></v-checkbox><v-icon color="warning" style="margin-right: 10px">mdi-chat-alert</v-icon>
					<v-checkbox v-model="selected" label="" value=""></v-checkbox><v-icon color="primary" style="margin-right: 10px">mdi-chat-alert</v-icon>
					<v-checkbox v-model="selected" label="" value=""></v-checkbox><v-icon style="margin-right: 10px">mdi-email-open</v-icon>
					<v-icon style="margin-right: 10px" size="42">mdi-refresh-circle</v-icon>

			</v-row>
		</v-card-text>

		<v-divider></v-divider>

		<v-card-text>
			<v-row>

				<v-btn text small><v-icon>mdi-file-check</v-icon>Atribuidas a mim</v-btn>
				<v-btn text small @click="dialogColumn = true"><v-icon>mdi-view-column</v-icon>Colunas</v-btn>
				<v-btn text small @click="dialogFilter = true"><v-icon>mdi-filter</v-icon>Filtrar Listagem</v-btn>
				<v-btn text small @click="dialogReviewerAssigned = true">
					<v-icon>mdi-table-arrow-down</v-icon>Atribuir proposta a parecerista
				</v-btn>
				<v-btn text small @click="dialogTag = true"><v-icon>mdi-image-filter-tilt-shift</v-icon>Tags</v-btn>
				<v-btn text small @click="dialogExport = true"><v-icon>mdi-card-account-details</v-icon>Exportar proposta</v-btn>

			</v-row>
		</v-card-text>

		<v-card-text>

			<v-data-table
			v-model="selected"
			:headers="headers"
			:items="desserts"
			:single-select="singleSelect"
			item-key="name"
			show-select
			class="elevation-0"
			>
			</v-data-table>

		</v-card-text>

		<v-card-text>
			<v-row>

				<v-btn-toggle
				v-model="text"
				>

					<v-btn value="left">
					Aprovar
					</v-btn>

					<v-btn value="center">
					Reprovar
					</v-btn>

					<v-btn value="right">
					Divulgar
					</v-btn>

					<v-btn value="justify">
					Diligência
					</v-btn>

					<v-btn value="justify">
					Compliance
					</v-btn>

					<v-btn value="justify">
					Alterar etapa
					</v-btn>


				</v-btn-toggle>

			</v-row>
		</v-card-text>


	</div>
</template>

<style>
	.v-tab a { color: #fff !important; }
</style>

<script>
import Tag from './ProposalsDialogs/Tag';
import Column from './ProposalsDialogs/Column';
import Filter from './ProposalsDialogs/Filter';
import Export from './ProposalsDialogs/Export';
import ReviewerAssigned from './ProposalsDialogs/ReviewerAssigned';
export default {
	name: "Proposals",
	components: {
		Column,
		Filter,
		Export,
		ReviewerAssigned,
		Tag
	},
	data: () => ({
		tab: false,
		tab2: false,
		offset: true,
		dialogTag: false,
		dialogColumn: false,
		dialogFilter: false,
		dialogExport: false,
		dialogReviewerAssigned: false,


		singleSelect: false,
		selected: [],

		headers: [
		{
		text: 'Status',
		align: 'start',
		sortable: false,
		value: 'name',
		},
			{ text: 'Tags', value: 'calories' },
			{ text: 'Empreendedor', value: 'fat' },
			{ text: 'Proposta', value: 'carbs' },
			{ text: 'Valor solicitado', value: 'protein' },
			{ text: 'Valor aprovado', value: 'iron' },
			{ text: 'Pt. inicial', value: 'iron1' },
			{ text: 'Avaliações', value: 'iron2' },
			{ text: 'Data de envio', value: 'iron3' },
			{ text: 'Compliance', value: 'iron4' },
			{ text: 'Chave', value: 'iron5' },
		],
		desserts: [
			{
				name: 'Ok',
				calories: '',
				fat: 'Mário',
				carbs: 'Arte e Estudar',
				protein: 'R$500,00',
				iron: '---',
				iron1: '10',
				iron2: '0',
				iron3: '12-08-20-08:20',
				iron4: 'Consultar',
				iron5: '66-66',
			},
			{
				name: 'Ok',
				calories: '',
				fat: 'Gil',
				carbs: 'Estudando no Home Office',
				protein: 'R$200,00',
				iron: '---',
				iron1: '10',
				iron2: '0',
				iron3: '12-08-20-08:20',
				iron4: 'Consultar',
				iron5: '66-66',
			},
			{
				name: 'Ok',
				calories: '',
				fat: 'Raphael',
				carbs: 'Home Estudo',
				protein: 'R$700,00',
				iron: '---',
				iron1: '10',
				iron2: '0',
				iron3: '12-08-20-08:20',
				iron4: 'Consultar',
				iron5: '66-66',
			},
			{
				name: 'Ok',
				calories: '',
				fat: 'Cloves',
				carbs: 'Compartilhar Aprender',
				protein: 'R$1500,00',
				iron: '---',
				iron1: '10',
				iron2: '0',
				iron3: '12-08-20-08:20',
				iron4: 'Consultar',
				iron5: '66-66',
			},
			{
				name: 'Ok',
				calories: '',
				fat: 'Luiz',
				carbs: 'Estudar em casa',
				protein: 'R$1200,00',
				iron: '---',
				iron1: '10',
				iron2: '0',
				iron3: '12-08-20-08:20',
				iron4: 'Consultar',
				iron5: '66-66',
			},
			{
				name: 'Ok',
				calories: '',
				fat: 'Lucas',
				carbs: 'Fique em casa',
				protein: 'R$2300,00',
				iron: '---',
				iron1: '10',
				iron2: '0',
				iron3: '12-08-20-08:20',
				iron4: 'Consultar',
				iron5: '66-66',
			},
			{
				name: 'Ok',
				calories: '',
				fat: 'Rafael',
				carbs: 'Fique estudando',
				protein: 'R$3100,00',
				iron: '---',
				iron1: '10',
				iron2: '0',
				iron3: '12-08-20-08:20',
				iron4: 'Consultar',
				iron5: '66-66',
			},
		],
	}),

	methods: {

		changeTagStatus() {
			this.dialogTag = false
		},

		changeColumnStatus() {
			this.dialogColumn = false
		},

		changeFilterStatus() {
			this.dialogFilter = false
		},

		changeExportStatus() {
			this.dialogExport = false
		},

		changeReviewerAssignedStatus() {
			this.dialogReviewerAssigned = false
		}

	}
}
</script>