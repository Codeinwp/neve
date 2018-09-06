<template>
	<div class="site-box">
		<div class="preview-image">
			<img :src="site_data.screenshot" :alt="site_data.title">
		</div>
		<div class="footer">
			<h4>{{site_data.title}}</h4>
			<button class="button button-secondary" v-on:click="setupPreview()">
				{{this.$store.state.strings.preview_btn}}
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'site-item',
		props: {
			site_data: {
				default: {},
				type: Object,
				required: true,
			},
		},
		methods: {
			setupPreview: function () {
				this.$store.commit( 'showPreview', true );
				this.$store.commit( 'populatePreview', this.site_data );

				let plugins = Object.keys( this.site_data.recommended_plugins ).reduce( function ( previous, current ) {
					previous[ current ] = true;
					return previous;
				}, {} );

				this.$store.commit( 'updatePlugins', plugins );
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

	.footer {
		border-top: 1px solid #ccc;
		display: flex;
		padding: 5px 10px;
		flex-wrap: wrap;
		align-items: center;
	}

	button.button-secondary.button {
		align-self: flex-end;
		margin-left: auto;
	}
</style>