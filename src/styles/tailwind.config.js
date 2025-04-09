/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						// Light mode
						'--tw-prose-body': 'black',
						'--tw-prose-headings': 'var(--color-pink-900)',
						'--tw-prose-lead': 'var(--color-pink-700)',
						'--tw-prose-links': 'var(--color-pink-900)',
						'--tw-prose-bold': 'var(--color-pink-900)',
						'--tw-prose-counters': 'var(--color-pink-600)',
						'--tw-prose-bullets': 'var(--color-pink-400)',
						'--tw-prose-hr': 'var(--color-pink-300)',
						'--tw-prose-quotes': 'var(--color-pink-900)',
						'--tw-prose-quote-borders': 'var(--color-pink-300)',
						'--tw-prose-captions': 'var(--color-pink-700)',
						'--tw-prose-code': 'var(--color-pink-900)',
						'--tw-prose-pre-code': 'var(--color-pink-100)',
						'--tw-prose-pre-bg': 'rgb(10, 40, 70)',
						'--tw-prose-th-borders': 'var(--color-pink-300)',
						'--tw-prose-td-borders': 'var(--color-pink-200)',

						// Dark mode
						'--tw-prose-invert-body': 'white',
						'--tw-prose-invert-headings': 'rgb(255, 90, 150)',
						'--tw-prose-invert-lead': 'var(--color-pink-300)',
						'--tw-prose-invert-links': 'white',
						'--tw-prose-invert-bold': 'white',
						'--tw-prose-invert-counters': 'var(--color-pink-400)',
						'--tw-prose-invert-bullets': 'red',
						'--tw-prose-invert-hr': 'var(--color-pink-700)',
						'--tw-prose-invert-quotes': 'var(--color-pink-100)',
						'--tw-prose-invert-quote-borders': 'var(--color-pink-700)',
						'--tw-prose-invert-captions': 'var(--color-pink-400)',
						'--tw-prose-invert-code': 'white',
						'--tw-prose-invert-pre-code': 'var(--color-pink-300)',
						'--tw-prose-invert-pre-bg': 'black',
						'--tw-prose-invert-th-borders': 'var(--color-pink-600)',
						'--tw-prose-invert-td-borders': 'var(--color-pink-700)',
					},
				},
			},
		},
	},
}
