import DefaultTheme from 'vitepress/theme'
import './styles.css'
import './vars.css'
import 'viewerjs/dist/viewer.min.css'
import imageViewer from 'vitepress-plugin-image-viewer'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'
import { useRoute } from 'vitepress'


export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
        ctx.app.component('vImageViewer', vImageViewer)
    },
    setup() {
        const route = useRoute()
        imageViewer(route)
    }
}
