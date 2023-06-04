import { createApp, h } from 'vue';
import { Link, createInertiaApp, Head } from '@inertiajs/vue3';
 
createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
      },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
        .use(plugin)
        .component("Link", Link)
        .component("Head", Head)
        .mount(el)
    },
    progress: {
        delay: 250,
        color: '#37c871',
        includeCSS: true,
        showSpinner: true,
    },
    title: title => `My App | ${title}`
});
