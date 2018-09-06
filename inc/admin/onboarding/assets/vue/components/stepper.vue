<template>
	<div class="ti__stepper updating-message">
		<template v-for="(step, slug) in steps">
			<p :key="step.id" v-if="slug === currentStep">
				{{ step }}...
			</p>
		</template>
	</div>
</template>

<script>
	module.exports = {
		name: 'stepper',
		data: function () {
			return {
				steps: this.$store.state.strings.import_steps
			}
		},
		computed: {
			currentStep: function () {
				return this.$store.state.currentStep;
			}
		}
	}
</script>