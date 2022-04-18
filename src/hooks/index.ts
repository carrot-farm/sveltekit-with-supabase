import { supabase } from '../lib/supabaseClient';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	event.locals.session = await supabase.auth.session();
	const response = await resolve(event);
	return response;
}

/** @type {import('@sveltejs/kit').GetSession} */
export async function getSession({ locals }) {
	// console.log(locals.session);
	return locals.session ? locals.session : null;
}
