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
						<v-checkbox 
						v-model="checkbox1" 
						label="Enviar mensagem padrão.">
							
						</v-checkbox>
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

				<h3>MENSAGEM PADRÃO</h3>

				<v-divider></v-divider>
				<br />

				Você foi convidado para participar do edital "<strong>Edital - PF</strong>" aberto no Prosas.

				<br />
				<br />

				Para tanto, é preciso que você possua um perfil de Empreendedor. Para criá-lo, acesse o link Novo Emprendedor.

				<br />
				<br />

				Caso já possua um perfil de cidadão, basta acessar seu perfil principal e clicar em Novo Empreendedor. Feito isso, você pode criar projetos e inscrevê-los em editais disponíveis no site.

				<br />
				<br />

				Se você já possui um perfil empreendedor, acesse o edital no Prosas e inscreva sua proposta.

				<br />
				<br />

				<strong>
					Mensagem do Patrocinador:
					<br />
					Sua mensagem será mostrada aqui.
				</strong>

			</v-col>
		</v-row>

	</v-card-text>

	</div>
</template>

<script>
export default {
	data: () => ({
		checkbox1: true,
	}),
}
</script>