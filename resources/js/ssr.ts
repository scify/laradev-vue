import { createSSRApp, h, DefineComponent } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
	createInertiaApp({
		page,
		title: (title) => `${title} - ${appName}`,
		resolve: (name) =>
			resolvePageComponent(
				`./pages/${name}.vue`,
				import.meta.glob<DefineComponent>('./pages/**/*.vue')
			),
		setup({ App, props, plugin }) {
			return createSSRApp({ render: () => h(App, props) }).use(plugin);
		},
		render: renderToString,
	})
);
