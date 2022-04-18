<script>
	import { ArrowNarrowLeftIconSolid } from '@codewithshin/svelte-heroicons';
	import AppBar from '../components/composition/AppBar.svelte';

	let form;
	const handleSubmit = () => {
		form.submit();
	};
</script>

<svelte:head>
	<title>글쓰기</title>
</svelte:head>

<AppBar logo={false}>
	<div slot="left">
		<a href="/" class="btn btn-ghost rounded-full">
			<ArrowNarrowLeftIconSolid className="w-6 text-gray-600" />
		</a>
	</div>
	<div slot="right">
		<button class="btn btn-ghost text-primary" on:click={handleSubmit}>
			글쓰기
		</button>
	</div>
</AppBar>

<div class="container m-auto mt-4">
	<form method="post" bind:this={form}>
		<textarea
			name="content"
			placeholder="입력하세요."
			class="textarea w-full h-screen input outline-none focus:outline-none"
			required
		/>
	</form>
</div>

<style>
	.input {
		height: calc(100vh - 120px);
	}
</style>
