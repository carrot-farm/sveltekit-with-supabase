<script>
	import LoginForm from '../components/auth/LoginForm.svelte';
	import AppBar from '../components/composition/AppBar.svelte';

	let email = 'chohoki@naver.com';
	let password = 'didrka2312';
	let passwordConfirm = 'didrka2312';
	let passwordConfirmError = '';
</script>

<svelte:head>
	<title>가입하기</title>
</svelte:head>

<AppBar />

<div class="mt-20">
	<LoginForm
		type="sign-up"
		method="post"
		action="/signup"
		{email}
		{password}
		{passwordConfirm}
		{passwordConfirmError}
	/>
</div>
