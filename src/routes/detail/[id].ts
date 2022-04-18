import { supabase } from '../../lib/supabaseClient';
export async function get({ params }) {
	const { data, error } = await supabase
		.from('todos')
		.select('*')
		.eq('id', params.id);

	return {
		body: {
			data,
			error
		}
	};
}
