<script>
	import LoginForm from '../components/auth/LoginForm.svelte';
	import AppBar from '../components/composition/AppBar.svelte';

	let email = 'chohoki@naver.com';
	let password = 'didrka2312';
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
