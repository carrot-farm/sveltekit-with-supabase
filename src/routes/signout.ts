import { supabase } from '../lib/supabaseClient';

/** @type {import('/signout').RequestHandler} */
export async function get() {
	await supabase.auth.signOut();
	return {
		status: 303,
		headers: {
			location: '/'
		}
	};
}
