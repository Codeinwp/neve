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
		<import-modal v-if="modalOpen">
		</import-modal>
	</div>
</template>

<script>
	import Loader from './loader.vue'
	import Sidebar from './preview-sidebar.vue'
	import ImportModal from './import-modal.vue'

	export default {
		name: 'preview',
		computed: {
			previewData: function () {
				return this.$store.state.previewData
			},
			modalOpen: function () {
				return this.$store.state.importModalState
			},
			loadingString: function() {
				return this.$store.state.strings.loading
			}
		},
		components: {
			Loader,
			Sidebar,
			ImportModal,
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