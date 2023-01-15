import { writable } from 'svelte/store';

export var navTab = writable(0);
export var userCode = writable('');
export var userTheme = writable('');
export var userLang = writable('');

const navTabElements = [
	{
		id: 1,
		name: 'Theme',
		lnk: './'
	},
	{
		id: 2,
		name: 'Language',
		lnk: './'
	},
	{
		id: 3,
		name: 'Editor',
		lnk: './'
	},
	{
		id: 4,
		name: 'Gallery',
		lnk: './gallery'
	}
];

export { navTabElements };
