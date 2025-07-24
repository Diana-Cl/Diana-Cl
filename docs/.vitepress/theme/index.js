import DefaultTheme from 'vitepress/theme'
import './styles.css'
import './vars.css'
import 'viewerjs/dist/viewer.min.css'
import imageViewer from 'vitepress-plugin-image-viewer'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'
import { useRoute } from 'vitepress'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import PokerHand from './components/PokerHand.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx)
    ctx.app.component('vImageViewer', vImageViewer)
    enhanceAppWithTabs(ctx.app)

    ctx.app.component('PokerHand', PokerHand)
  },
  setup() {
    const route = useRoute()
    imageViewer(route)
  }
}
