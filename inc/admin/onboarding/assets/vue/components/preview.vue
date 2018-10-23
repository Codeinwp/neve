<template>
	<div class="ti-sites-lib__wrap">
		<div class="ti-sites-lib__preview">
			<Loader class="loader" :loading-message="loadingString">
			</Loader>
			<iframe :src="previewData.demo_url">
			</iframe>
			<Sidebar :site_data="previewData">
			</Sidebar>
		</div>
	</div>
</template>

<script>
	import Loader from './loader.vue'
	import Sidebar from './preview-sidebar.vue'

	export default {
		name: 'preview',
		computed: {
			previewData: function () {
				return this.$store.state.previewData
			},
			loadingString: function() {
				return this.$store.state.strings.loading
			}
		},
		components: {
			Loader,
			Sidebar,
		},
		methods: {},
	}
</script>

<style scoped>
	.loader {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
	}
</style>