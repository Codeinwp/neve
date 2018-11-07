<template>
	<div :class="{ 'is__onboarding' : this.$store.state.onboard === 'yes' && ! previewOpen } ">
		<div :class="! isLoading ? 'library-wrapper' : '' ">
			<div v-if="this.$store.state.onboard === 'yes' && ! isLoading" class="header">
				<h1>{{strings.onboard_header}}</h1>
				<p>{{strings.onboard_description}}</p>
			</div>
			<Loader v-if="isLoading" :loading-message="loadingString"></Loader>
			<div v-else class="ti-sites-lib">
				<div v-for="site in sites.local">
					<SiteItem :site_data="site"></SiteItem>
				</div>
				<div v-for="site in sites.remote">
					<SiteItem :site_data="site"></SiteItem>
				</div>
				<Preview v-if="previewOpen"></Preview>
			</div>
		</div>
		<div class="skip-wrap" v-if="this.$store.state.onboard === 'yes' && ! isLoading">
			<a @click="cancelOnboarding" class="skip-onboarding button button-primary">
				{{strings.later}}
			</a>
		</div>
		<import-modal v-if="modalOpen">
		</import-modal>
	</div>
</template>

<script>
	import Loader from './loader.vue'
	import SiteItem from './site-item.vue'
	import Preview from './preview.vue'
	import ImportModal from './import-modal.vue'

	module.exports = {
		name: 'app',
		data: function () {
			return {
				strings: this.$store.state.strings
			}
		},
		computed: {
			isLoading: function () {
				return this.$store.state.ajaxLoader
			},
			sites: function () {
				return this.$store.state.sitesData
			},
			previewOpen: function () {
				return this.$store.state.previewOpen
			},
			loadingString: function () {
				return this.$store.state.strings.loading;
			},
			modalOpen: function () {
				return this.$store.state.importModalState
			},
		},
		methods: {
			cancelOnboarding: function () {
				this.$store.state.onboard = null;
			},
		},
		components: {
			Loader,
			SiteItem,
			Preview,
			ImportModal,
		},
	}
</script>