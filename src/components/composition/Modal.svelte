<script>
	import { onMount as _onMount } from 'svelte';

	let sw = false;

	export let name = 'modal';
	export let title = '';
	export let content = '';
	export let cancelText = '닫기';
	export let okText = '';
	export let onMount;

	export function open({ title: _title, content: _content, okText: _okText }) {
		sw = true;
		if (_title) {
			title = _title;
		}
		if (_content) {
			content = _content;
		}
		if (_okText) {
			okText = _okText;
		}
	}
	export function close() {
		sw = false;
	}

	_onMount(() => {
		if (typeof onMount !== 'function') {
			return;
		}
		onMount({ open, close });
	});
</script>

<input type="checkbox" id={name} class="modal-toggle" bind:checked={sw} />
<div class="modal">
	<div class="modal-box">
		{#if title}
			<h3 class="font-bold text-lg">{title}</h3>
		{/if}
		{#if content}
			<p class="py-4">
				{content}
			</p>
		{/if}

		<div class="modal-action flex gap-x-1">
			{#if cancelText}
				<label for={name}>
					<span class="btn btn-ghost text-red-600 w-24">{cancelText}</span>
				</label>
			{/if}
			{#if okText}
				<label for={name}>
					<span class="btn btn-ghost text-blue-500 w-24">{okText}</span>
				</label>
			{/if}
		</div>
	</div>
</div>
