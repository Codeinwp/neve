<template>
	<div class="import-modal__wrapper">
		<div class="modal__item" v-on-clickaway="closeModal">
			<div class="modal__header">
				<h4 class="title ellipsis">{{strings.import_btn}}: {{siteData.title}}</h4>
			</div>
			<hr>
			<div class="modal__content" v-bind:class="currentStep === 'done' ? 'import__done' : ''">
				<template v-if="currentStep !== 'done'">
					<div class="right__content" v-if="! importing">
						<p class="import__paragraph"><strong>{{strings.note}}:</strong> {{strings.import_disclaimer}}</p>
						<p class="import__paragraph">{{strings.onboard_description}}</p>
						<div class="import__options" v-show-slide="advancedExpanded">
							<h4>{{strings.general}}:</h4>
							<ul class="features">
								<li class="option_toggle">
									<label class="option-toggle-label"
											:class="importOptions.content ? 'active' : 'inactive'"><span
											class="dashicons dashicons-admin-post"></span><span>{{strings.content}}</span></label>
									<toggle-button @change="adjustImport( 'content' )" :value="importOptions.content"
											color="#28da00"></toggle-button>
								</li>
							<li class="option_toggle">
									<label class="option-toggle-label"
											:class="importOptions.customizer ? 'active' : 'inactive'"><span
											class="dashicons dashicons-admin-customizer"></span><span>{{strings.customizer}}</span></label>
									<toggle-button @change="adjustImport( 'customizer' )" :value="importOptions.customizer"
											color="#28da00"></toggle-button>
								</li>
							<li class="option_toggle">
									<label class="option-toggle-label"
											:class="importOptions.widgets ? 'active' : 'inactive'"><span
											class="dashicons dashicons-admin-generic"></span><span>{{strings.widgets}}</span></label>
									<toggle-button @change="adjustImport( 'widgets' )" :value="importOptions.widgets"
											color="#28da00"></toggle-button>
								</li>
							</ul>
							<hr>
							<h4>{{strings.plugins}}:</h4>
							<ul class="features">
								<li class="option_toggle" v-for="( plugin, index ) in siteData.recommended_plugins">
									<label class="option-toggle-label ellipsis"
											:class="willInstallPlugin( index ) ? 'active' : 'inactive'"><span
											class="dashicons dashicons-admin-plugins"></span><span
											v-html="plugin"></span></label>
									<toggle-button @change="adjustPlugins( index, plugin )" :value="importOptions.installablePlugins[index]"
											color="#28da00"></toggle-button>
								</li>
							</ul>
							<hr>
						</div>
						<a @click="toggleAdvanced" class="expander"><span class="dashicons"
								:class=" advancedExpanded ? 'dashicons-arrow-up-alt2' : 'dashicons-arrow-down-alt2' "></span>{{
							strings.advanced_options }}</a>

					</div>
					<div class="right__content importing" v-else>
						<Stepper>
						</Stepper>
					</div>
				</template>
				<h3 v-else>{{strings.import_done}}</h3>
			</div>
			<hr>

			<div class="modal__footer" v-if="! importing">
				<template v-if="currentStep !== 'done'">
					<button class="button button-secondary" v-on:click="closeModal">{{strings.cancel_btn}}</button>
					<button class="button button-primary" :disabled="! checIfShouldImport" v-on:click="startImport">{{strings.import_btn}}</button>
				</template>
				<div v-else class="after__actions">
					<button class="button button-secondary" v-if="this.$store.state.onboard !== 'yes'" v-on:click="resetImport">{{strings.back}}</button>
					<button class="button button-primary" v-on:click="redirectToHome">{{strings.go_to_site}}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { directive as onClickaway } from 'vue-clickaway'
	import Stepper from './stepper.vue'
	import Loader from './loader.vue'

	export default {
		name: 'import-modal',
		data: function () {
			return {
				strings: this.$store.state.strings,
				homeUrl: this.$store.state.homeUrl,
				siteData: this.$store.state.previewData,
				advancedExpanded: false,
				importOptions: this.$store.state.importOptions,
			}
		},
		computed: {
			currentStep() {
				return this.$store.state.currentStep;
			},
			importing() {
				return this.$store.state.importing;
			},
			checIfShouldImport() {
				if(
					this.$store.state.importOptions.content ||
					this.$store.state.importOptions.customizer ||
					this.$store.state.importOptions.widgets
				) {
					return true;
				}
				return false;
			}
		},
		methods: {
			toggleAdvanced() {
				this.advancedExpanded = !this.advancedExpanded
			},
			adjustPlugins: function ( index, plugin ) {
				let plugins = this.$store.state.importOptions.installablePlugins;
				plugins[ index ] = !plugins[ index ];
				this.$store.commit( 'updatePlugins', plugins );
			},
			adjustImport: function( context ) {
				let options = this.$store.state.importOptions;
				options[context] = ! options[context];
				this.$store.commit( 'updateImportOptions', options );
			},
			willInstallPlugin: function ( slug ) {
				return this.$store.state.importOptions.installablePlugins[ slug ];
			},
			closeModal: function () {
				if ( this.importing ) {
					return false
				}
				if ( this.currentStep === 'done' ) {
					return false
				}
				this.$store.commit( 'showImportModal', false )
			},
			startImport: function () {
				this.$store.dispatch( 'importSite', {
					req: 'Import Site',
					plugins: this.siteData.recommended_plugins,
					content: {
						'content_file': this.siteData.content_file,
						'front_page': this.siteData.front_page,
						'shop_pages': this.siteData.shop_pages,
					},
					themeMods: {
						'theme_mods': this.siteData.theme_mods,
						'source_url': this.siteData.demo_url
					},
					widgets: this.siteData.widgets,
					source: this.siteData.source,
				} )
			},
			redirectToHome: function () {
				window.location.replace( this.homeUrl );
			},
			resetImport: function () {
				this.$store.commit( 'resetStates' );
			}
		},
		directives: {
			onClickaway,
		},
		components: {
			Stepper,
			Loader,
		}
	}
</script>

<style scoped>
	.modal__header .title {
		margin: 0;
	}

	.modal__header {
		padding: 10px;
	}

	.modal__content {
		padding: 10px;
	}

	.modal__footer {
		padding: 10px;
		text-align: right;
	}

	h3 {
		font-size: 17px;
		font-weight: 300;
		color: #444;
		margin: 20px;
		width: 100%;
	}

	.importing {
		width: 100%;
		text-align: center;
	}

	.option_toggle {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.option-toggle-label {
		display: flex;
		align-items: center;
		cursor: default;
		line-height: 1.6;
		max-width: 80%;
	}

	.option-toggle-label.inactive {
		opacity: .5;
	}

	.option-toggle-label .dashicons {
		margin-right: 5px;
	}

	.import__options hr {
		margin: 10px 0;
	}
</style>