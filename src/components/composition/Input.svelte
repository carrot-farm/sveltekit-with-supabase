<script>
	export let label = '';
	export let error = '';
	export let value = undefined;
	export let className = '';
</script>

<div class={`form-control w-full max-w-xs ${className}`}>
	<label class="label">
		<span class="label-text font-semibold text-gray-700">{label}</span>
	</label>
	<input
		class="input input-bordered input-info w-full max-w-xs"
		bind:value
		{...$$restProps}
	/>
	<label class="label">
		<span class="label-text-alt text-red-600">{error}</span>
	</label>
</div>
