
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { useRoute } from 'vitepress'

import Ltr from './components/Ltr.vue'
import CopyLink from './components/CopyLink.vue'
import DocFooter from './components/DocFooter.vue'
import PokerHand from './components/PokerHand.vue'
import CitationLink from './components/CitationLink.vue'

import imageViewer from 'vitepress-plugin-image-viewer'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import { NolebaseInlineLinkPreview } from '@nolebase/vitepress-plugin-inline-link-preview/client'

import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import 'viewerjs/dist/viewer.min.css'

import './styles.css'
import './custom.css'
import './vars.css'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    app.component('vImageViewer', vImageViewer)
    app.component('NolebaseInlineLinkPreview', NolebaseInlineLinkPreview)
    app.component('PokerHand', PokerHand)
    app.component('CitationLink', CitationLink)
    app.component('Ltr', Ltr)
    app.component('CopyLink', CopyLink)

    enhanceAppWithTabs(app)
  },

  setup() {
    const route = useRoute()
    imageViewer(route)
  }
} satisfies Theme
