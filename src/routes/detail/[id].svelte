<script context="module">
	/** @type {import('@sveltejs/kit').Load}  */
	export async function load({ session, props }) {
		return {
			props: {
				data: props?.data?.[0],
				error: props?.error,
				session
			}
		};
	}
</script>

<script>
	import AppBar from '../../components/composition/AppBar.svelte';
	export let data;
	export let error;
	if (error) {
		alert(error.message);
	}
</script>

<AppBar />
<div class="max-w-5xl m-auto mt-4 p-2 font-normal">{data?.content}</div>
