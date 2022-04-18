import { supabase } from '../lib/supabaseClient';

/** @type {import('./add').RequestHandler} */
export async function post({ request, locals }) {
	const form = await request.formData();
	const { error, status, statusText } = await supabase.from('todos').insert(
		{
			content: form.get('content'),
			user_id: locals.session.user.id
		},
		{ returning: 'minimal' }
	);

	if (error) {
		return {
			status,
			body: {
				message: statusText
			}
		};
	}

	return {
		status: 303,
		headers: {
			location: '/'
		}
	};
}
