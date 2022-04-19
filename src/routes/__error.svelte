<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error?.message}`
			}
		};
	}
</script>

<script>
	export let title;
</script>

<div class="h-screen w-screen flex items-center justify-center">
	<h1 class="font-si">{title}</h1>
</div>
