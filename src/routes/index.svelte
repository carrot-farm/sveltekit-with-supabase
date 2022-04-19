<script context="module">
	/** @type {import('@sveltejs/kit').Load}  */
	export async function load({ session, props }) {
		return {
			props: {
				...props,
				session
			}
		};
	}
</script>

<script>
	import { browser } from '$app/env';
	import { supabase } from '../lib/supabaseClient';
	import { PlusIconSolid } from '@codewithshin/svelte-heroicons';
	import Todos from '../components/composition/Todos.svelte';
	import AppBar from '../components/composition/AppBar.svelte';

	export let session;
	export let data;
	export let error;
	// console.log(data);

	if (browser && error) {
		alert(error.message);
	}

	/** 완료 */
	async function handleDoneClick(item) {
		data = data.map((a) => (a.id === item.id ? { ...a, done: !item.done } : a));

		const { error } = await supabase
			.from('todos')
			.update({ done: !item.done })
			.eq('id', item.id);

		if (browser && error) {
			alert(error.message);
		}
	}

	/** remove */
	async function handleRemoveClick(item) {
		data = data.filter((a) => a.id !== item.id);
		const { error } = await supabase.from('todos').delete().eq('id', item.id);
		if (browser && error) {
			alert(error.message);
		}
	}
</script>

<svelte:head>
	<title>할일</title>
</svelte:head>

<AppBar signUpLink={!session} signInLink={!session} dropdownMenu={!!session} />
<div class="max-w-5xl m-auto relative">
	<Todos
		{data}
		onDoneClick={handleDoneClick}
		onRemoveClick={handleRemoveClick}
	/>

	{#if !!session}
		<div class="absolute right-0 mr-20">
			<a
				href="/add"
				title="글쓰기"
				class="btn hover:bg-primary border-0 bg-primary 
			rounded-full shadow-lg fixed bottom-10 w-12 h-10"
			>
				<PlusIconSolid className="text-white" />
			</a>
		</div>
	{/if}

	<div class="h-48">&nbsp;</div>
</div>
