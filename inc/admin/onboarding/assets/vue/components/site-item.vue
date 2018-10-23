<template>
	<div class="site-box">
		<div class="preview-image">
			<img :src="site_data.screenshot" :alt="site_data.title">
		</div>
		<div class="footer">
			<h4>{{site_data.title}}</h4>
            <div class="theme-actions">
                <button class="button button-secondary" v-on:click="showPreview()">
                    {{this.$store.state.strings.preview_btn}}
                </button>
                <button class="button button-primary" v-on:click="importSite()">
                    {{strings.import_btn}}
                </button>
            </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'site-item',
        data: function() {
            return {
                strings: this.$store.state.strings
            }
        },
		props: {
			site_data: {
				default: {},
				type: Object,
				required: true,
			},
		},
		methods: {
            setupImportData: function () {
				let plugins = Object.keys( this.site_data.recommended_plugins ).reduce( function ( previous, current ) {
					previous[ current ] = true;
					return previous;
				}, {} );

				this.$store.commit( 'updatePlugins', plugins );
			},
            importSite: function() {
                this.setupImportData();
                this.$store.commit( 'populatePreview', this.site_data );
                this.$store.commit( 'showImportModal', true );
            },
            showPreview: function() {
                this.setupImportData();
                this.$store.commit( 'showPreview', true );
                this.$store.commit( 'populatePreview', this.site_data );
            }
		},
	}
</script>

<style scoped>
	h4 {
		display: block;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin: 0;
		overflow: hidden;
		max-width: 70%;
		font-size: 15px;
	}

	.site-box {
		border: 1px solid #ccc;
	}

    .site-box:hover .footer .theme-actions {
        display: block;
    }

	.footer {
        position: relative;
		border-top: 1px solid #ccc;
		display: flex;
		padding: 15px;
		flex-wrap: wrap;
		align-items: center;
	}

    .footer .theme-actions {
        display: none;
        position: absolute;
        right: 0;
        padding: 10px 15px;
        background-color: rgba(244, 244, 244, 0.7);
        border-left: 1px solid rgba(0,0,0,0.05);
    }

	button.button-secondary.button {
		align-self: flex-end;
		margin-left: auto;
	}
</style>