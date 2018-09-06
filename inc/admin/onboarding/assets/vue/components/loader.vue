<template>
	<div class="updating-message">
		<p v-if="loadingMessage">{{loadingMessage}}...</p>
	</div>
</template>

<script>
	module.exports = {
		name: 'loader',
		props: { loadingMessage: String },
	}
</script>

<style scoped>
	.updating-message {
		text-align: center;
	}

	.updating-message:before {
		margin-right: 5px;
	}
</style>