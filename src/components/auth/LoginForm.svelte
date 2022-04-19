<script>
	import Input from '../composition/Input.svelte';
	import Button from '../composition/Button.svelte';

	export let type = 'sign-up';
	export let email;
	export let password = undefined;
	export let passwordConfirm = undefined;
	export let passwordConfirmError = undefined;
	export let onSubmit = undefined;

	$: title = type === 'sign-up' ? '회원가입' : '로그인';
	$: buttonText = type === 'sign-up' ? '회원가입' : '로그인';
</script>

<div class="flex flex-col items-center justify-center">
	<form
		class="form border shadow-sm rounded-md w-80 p-5 "
		{...$$restProps}
		on:submit={onSubmit}
	>
		<h1 class="font-bold text-2xl mb-5">{title}</h1>
		<Input
			label="이메일"
			name="email"
			type="email"
			placeholder="이메일"
			className="mb-1"
			required
			autofocus
			bind:value={email}
		/>
		<Input
			label="password"
			name="password"
			type="password"
			placeholder="비밀번호(최소 8자 이상)"
			className="mb-1"
			required
			minlength="8"
			bind:value={password}
		/>
		{#if type === 'sign-up'}
			<Input
				label="비밀번호 확인"
				name="passwordConfirm"
				type="password"
				placeholder="비밀번호 확인"
				className="mb-1"
				required
				minlength="8"
				error={passwordConfirmError}
				bind:value={passwordConfirm}
			/>
		{/if}
		<div>
			<Button type="submit" full>{buttonText}</Button>
		</div>
	</form>
</div>
