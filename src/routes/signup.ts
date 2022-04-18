import { supabase } from '../lib/supabaseClient';

/** @type {import('./signup').RequestHandler} */
export async function post({ request }) {
	const form = await request.formData();
	const { error } = await supabase.auth.signUp({
		email: form.get('email'),
		password: form.get('password')
	});

	if (error) {
		return {
			status: error.status,
			body: { message: error.message }
		};
	}

	return {
		status: 303,
		headers: {
			location: '/signin'
		}
	};
}
