import { supabase } from './supabaseClient';

export const getList = async () => await supabase.from('todos').select('*');
