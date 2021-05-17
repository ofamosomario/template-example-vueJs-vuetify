<template>
	<v-card-text>
		<ExportDetails></ExportDetails>
	</v-card-text>
</template>

<script>
import ExportDetails from './ProposalsDialogs/ExportDetails';
export default {
	name: "Export",
	components: {
		ExportDetails
	}
}
</script>