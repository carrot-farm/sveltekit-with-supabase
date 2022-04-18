import { supabase } from '../lib/supabaseClient';

export async function get() {
	const { data, error } = await supabase
		.from('todos')
		.select('id, content, done')
		.order('id', { ascending: false });

	return {
		body: {
			data,
			error
		}
	};
}
