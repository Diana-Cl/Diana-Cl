import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import { useRoute } from 'vitepress';
import Ltr from './components/Ltr.vue';
import CopyLink from './components/CopyLink.vue';
import PokerHand from './components/PokerHand.vue';
import imageViewer from 'vitepress-plugin-image-viewer';
import CitationLink from './components/CitationLink.vue';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { NolebaseInlineLinkPreview } from '@nolebase/vitepress-plugin-inline-link-preview/client';
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css';
import 'viewerjs/dist/viewer.min.css';
import './styles.css';
import './custom.css';
import './vars.css';

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx);

    ctx.app.component('vImageViewer', vImageViewer);
    enhanceAppWithTabs(ctx.app);
    ctx.app.component('NolebaseInlineLinkPreview', NolebaseInlineLinkPreview);
    ctx.app.component('PokerHand', PokerHand);
    ctx.app.component('CitationLink', CitationLink);
    ctx.app.component('Ltr', Ltr);
    ctx.app.component('CopyLink', CopyLink);
  },
  setup() {
    const route = useRoute();
    imageViewer(route);
  }
} satisfies Theme;

