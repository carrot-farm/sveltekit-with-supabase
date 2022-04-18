<script>
	import { DotsVerticalIconSolid } from '@codewithshin/svelte-heroicons';

	export let logo = true;
	export let signUpLink = false;
	export let signInLink = false;
	export let dropdownMenu = false;
</script>

<div class="sticky top-0 z-10 bg-white">
	<div class="navbar max-w-5xl m-auto bg-base-100 justify-between">
		<div>
			{#if logo === true}
				<a href="/" class="normal-case text-xl" title="home">SvelteKit Todos</a>
			{/if}
			<slot name="left" />
		</div>

		<!-- right -->
		<div class="flex-none gap-2">
			<slot name="right" />
			{#if signInLink === true}
				<a href="/signin" class="btn btn-ghost text-gray-600">Sign In</a>
			{/if}
			{#if signUpLink === true}
				<a href="/signup" class="btn btn-ghost text-sky-500">Sign Up</a>
			{/if}

			{#if dropdownMenu === true}
				<div class="dropdown dropdown-end">
					<label tabindex="0" class="cursor-pointer bg-gray-100" for="">
						<div
							class="w-10 rounded-full !flex items-center justify-center text-gray-700"
						>
							<!-- <Icon data={user} color="#e2e2e2" size="36px" /> -->
							<DotsVerticalIconSolid className="w-6" />
						</div>
					</label>
					<ul
						tabindex="0"
						class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
					>
						<li><a href="/signout">Logout</a></li>
					</ul>
				</div>
			{/if}
		</div>
	</div>
	<div class="border-b" />
</div>
