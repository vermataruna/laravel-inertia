import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
 
createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
      },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
        .use(plugin)
        .mount(el)
    },
    progress: {
        delay: 250,
        color: '#37c871',
        includeCSS: true,
        showSpinner: true,
    },
});
