<template>

	<div>

	<v-card-text>
		<v-row>
			<v-col cols="8">

				<v-row>

					<v-col cols="12">

					<v-alert
						border="left"
						colored-border
						color="primary"
						elevation="0"
					>

						<v-row>
							
							<v-col cols="4">
								Publicação do Edital:
							</v-col>

							<v-col>
								
								<v-col>

									<v-menu
										ref="menu"
										v-model="menu"
										:close-on-content-click="false"
										:return-value.sync="date"
										transition="scale-transition"
										offset-y
									>

										<template v-slot:activator="{ on, attrs }">

											<v-text-field
												v-model="date"
												label="Selecionar"
												prepend-icon="event"
												readonly
												v-bind="attrs"
												v-on="on"
											></v-text-field>

										</template>

										<v-date-picker v-model="date" no-title scrollable>
											<v-spacer></v-spacer>
											<v-btn text color="primary" @click="menu = false">Cancel</v-btn>
											<v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
										
										</v-date-picker>
									</v-menu>

								</v-col>

							</v-col>

							<v-col>

								<v-text-field
								pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$"
								type="time"
								prepend-icon="access_time"
								style="margin-top: 15px">

								</v-text-field>

							</v-col>

						</v-row>

					</v-alert>

					<v-alert
						border="left"
						colored-border
						color="primary"
						elevation="0"
					>

						<v-row>
							
							<v-col cols="4">
								Publicação do Edital:
							</v-col>

							<v-col>
								
								<v-radio-group v-model="radios" :mandatory="false">
									<v-radio label="Contínuo" value="continuo"></v-radio>
									<v-radio label="Definido" value="definido"></v-radio>
								</v-radio-group>

								<div v-if="showDetails">

									<v-row>

										<v-col>

											<v-menu
												ref="menu"
												v-model="menu"
												:close-on-content-click="false"
												:return-value.sync="date"
												transition="scale-transition"
												offset-y
											>

												<template v-slot:activator="{ on, attrs }">

													<v-text-field
														v-model="date"
														label="Selecionar"
														prepend-icon="event"
														readonly
														v-bind="attrs"
														v-on="on"
													></v-text-field>

												</template>

												<v-date-picker v-model="date" no-title scrollable>
													<v-spacer></v-spacer>
													<v-btn text color="primary" @click="menu = false">Cancel</v-btn>
													<v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
												
												</v-date-picker>
											</v-menu>

										</v-col>

										<v-col>

											<v-text-field
											pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$"
											type="time"
											prepend-icon="access_time">

											</v-text-field>

										</v-col>										

									</v-row>

									<!-- OUTRO -->

									<v-row>

										<v-col>

											<v-menu
												ref="menu"
												v-model="menu"
												:close-on-content-click="false"
												:return-value.sync="date"
												transition="scale-transition"
												offset-y
											>

												<template v-slot:activator="{ on, attrs }">

													<v-text-field
														v-model="date"
														label="Selecionar"
														prepend-icon="event"
														readonly
														v-bind="attrs"
														v-on="on"
													></v-text-field>

												</template>

												<v-date-picker v-model="date" no-title scrollable>
													<v-spacer></v-spacer>
													<v-btn text color="primary" @click="menu = false">Cancel</v-btn>
													<v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
												
												</v-date-picker>
											</v-menu>

										</v-col>

										<v-col>

											<v-text-field
											pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$"
											type="time"
											prepend-icon="access_time">

											</v-text-field>

										</v-col>										

									</v-row>

								</div>

							</v-col>

						</v-row>

					</v-alert>

					</v-col>

				</v-row>

			</v-col>

			<v-col>

				<h3>Alterar Datas:</h3>

				<v-divider></v-divider>

				<br />

				<strong>Publicação do Edital:</strong> Defina a data e o horário em que seu edital será publicado em nossa plataforma, a partir deste momento ele será público.

				<br />
				<br />

				<strong>Prazo para inscrições:</strong> Defina o período em que seu edital estará aberto para recebimento de propostas selecionando o campo definido, e setando sua data de início e encerramento. Caso seu edital seja contínuo, selecione apenas a data de início das inscrições..
				
				<br />
				<br />

				<strong>Prorrogação do edital:</strong> É possível definir se seu edital será prorrogado, ao habilitar esta opção você pode espeficicar qual a data e horário final da prorrogação. Se habilitada, a data mostrada será sempre a de prorrogação..

			</v-col>
		</v-row>

	</v-card-text>

  <v-card-actions>
    <v-btn text>Salvar</v-btn>
  </v-card-actions>

	</div>
</template>

<script>
export default {
	data: () => ({
		showDetails: false,
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    radios: 'radio-1',
    menu2: false,
	}),

  watch : {
		radios:function(val) {
			if ( val == 'definido' ) {
				this.showDetails = true;
			} else {
				this.showDetails = false;
			}
		}
  }
}
</script>