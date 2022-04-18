<script>
	export let className = '';
	export let full = false;
	export let color = 'info';
</script>

<button
	class={`
  btn 
  text-white
  ${full === true ? 'btn-block' : ''}
  ${
		color === 'success'
			? 'btn-success'
			: color === 'warning'
			? 'btn-warning'
			: color === 'error'
			? 'btn-error'
			: 'btn-info'
	}
  ${className}
	`}
	on:click
	{...$$restProps}
>
	<slot />
</button>
