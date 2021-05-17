<template>
	<div>
	<v-card-text>
		<v-row>
			<v-col cols="8">

				<v-row>

					<v-col cols="8">
						<v-text-field 
						label="Insira o nome ou o email do empreendedor que gostaria de convidar.">

						</v-text-field>
						</v-col>
						<v-col cols="4">
						<v-combobox
						:items="items"
						label="Selecione a permissão"
						></v-combobox>
					</v-col>

				</v-row>

				<v-row>

					<v-col cols="11">

						<v-text-field 
						label="Digite a mensagem.">
						</v-text-field>
						
					</v-col>

					<v-col cols="1">

						<v-btn icon color="primary">
						<v-icon size="42">mdi-arrow-right-bold-circle</v-icon>

					</v-btn>

					</v-col>

				</v-row>

				<v-divider></v-divider>

				<v-row>

					<v-simple-table style='width:100%'>
						<template>
							<thead>
								<tr>
									<th class="text-left">Usuário(s) já convidado(s)</th>
									<th class="text-left">Permissão de acesso</th>
									<th class="text-left">Envio</th>
									<th class="text-left">Ações</th>
								</tr>
							</thead>
						<tbody>
							<tr>
								<td>Mário</td>
								<td>Administrador</td>
								<td>04/03/20 - 12:53</td>
								<td>
									<v-tooltip bottom>
										<template v-slot:activator="{ on, attrs }">
											<v-icon
											color="darkGrey"
											dark
											v-bind="attrs"
											v-on="on"
											>mdi-trash-can</v-icon>
										</template>
										<span>Excluir usuário.</span>
									</v-tooltip>

									<v-tooltip bottom>
										<template v-slot:activator="{ on, attrs }">
											<v-icon
											color="primary"
											dark
											v-bind="attrs"
											v-on="on"
											>mdi-clipboard-list</v-icon>
										</template>
										<span>Diligência para parecerista.</span>
									</v-tooltip>

									<v-tooltip bottom>
										<template v-slot:activator="{ on, attrs }">
											<v-icon
											color="primary"
											dark
											v-bind="attrs"
											v-on="on"
											>mdi-tooltip-text</v-icon>
										</template>
										<span>Exibir mensagem enviada.</span>
									</v-tooltip>

								</td>
							</tr>
							</tbody>
						</template>
					</v-simple-table>

				</v-row>

			</v-col>

			<v-col>

				<h3>PERMISSÕES DE ACESSO</h3>

				<v-divider></v-divider>
				<br />
				<strong>Administrador</strong> - além das permissões de acesso como parecerista, o convidado poderá:
				<ul>
					<li>Editar todas as configurações do Edital, incluir e excluir perguntas;</li>
					<li>Convidar novos pareceristas para este edital;</li>
					<li>Editar critérios de avaliação;</li>
					<li>Aprovar ou Reprovar Propostas deste edital;</li>
					<li>Divulgar propostas Aprovadas ou Reprovadas neste edital.</li>
				</ul>

				<br />

				<strong>Parecerista</strong> - o usuário convidado poderá
				<ul>
					<li>Adicionar parecer;</li>
					<li>Avaliar propostas.</li>
				</ul>

				<br />

				<strong>Visualização</strong> - Com este perfil o usuário poderá apenas visualizar:

				<ul>
					<li>Informações do Edital;</li>
					<li>Painel de gerenciar propostas e etapas de análise;</li>
					<li>Conteúdo das propostas;</li>
					<li>Critérios de avaliação.</li>
				</ul>

			</v-col>
		</v-row>

	</v-card-text>

	</div>
</template>

<script>
export default {
	data: () => ({
		select: ['Vuetify', 'Programming'],
		items: ['Administrador' , 'Parecerista' , 'Apenas Visualização'],
  
	}),
}
</script>