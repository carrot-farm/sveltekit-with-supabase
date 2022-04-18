import { writable } from 'svelte/store';

interface User {
	email: string;
	accessToken: string;
}

export const user = writable<User | null>(null);
