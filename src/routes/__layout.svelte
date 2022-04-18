<script context="module">
	import { supabase } from '../lib/supabaseClient';
	export async function load({ session }) {
		if (session?.access_token) {
			supabase.auth.setAuth(session.access_token);
		}
		return {};
	}
</script>

<script>
	import '../styles/app.css';
</script>

<slot />
