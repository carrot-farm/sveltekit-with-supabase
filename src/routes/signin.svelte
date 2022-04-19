<script>
	import { browser } from '$app/env';
	import LoginForm from '../components/auth/LoginForm.svelte';
	import AppBar from '../components/composition/AppBar.svelte';

	let email = 'chohoki@naver.com';
	let password = 'didrka2312';
	export let error;

	if (browser && error) {
		alert(error.message);
	}
</script>

<AppBar signUpLink />

<div class="mt-20">
	<LoginForm
		type="sign-in"
		method="post"
		action="/signin"
		bind:email
		bind:password
	/>
</div>
