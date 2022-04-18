<script>
	import {
		CheckIconSolid,
		TrashIconSolid
	} from '@codewithshin/svelte-heroicons';

	export let onDoneClick;
	export let onRemoveClick;
	export let data = [];
</script>

<ul>
	{#each data as item (item.id)}
		<li class="flex justify-between py-4 px-4">
			<div class="flex gap-x-1  flex-wrap overflow-hidden">
				<button
					class="w-10 h-10 cursor-pointer mr-5
						border border-gray-300 rounded-full 
						flex items-center justify-center self-center"
					on:click={() => onDoneClick(item)}
				>
					{#if item.done}
						<CheckIconSolid className="text-primary " />
					{/if}
				</button>
				<a
					href="/detail/{item.id}"
					class=" text-gray-700 line-clamp-2 flex-1 break-words {item.done
						? 'line-through'
						: ''}"
				>
					{item.content}
				</a>
			</div>

			<div
				class="self-center btn btn-ghost rounded-full ml-2"
				title="remove"
				on:click={() => onRemoveClick(item)}
			>
				<TrashIconSolid className="w-5 text-gray-500" />
			</div>
		</li>
	{/each}
</ul>
