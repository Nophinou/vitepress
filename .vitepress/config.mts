import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  title: "Noph.pro",
  description: "Noph, Narrative designer and game writer",
  base: '/',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/'
    },
    fr: {
      label: 'French',
      lang: 'fr', // optional, will be added  as `lang` attribute on `html` tag
      link: '/fr/' // default /fr/ -- shows on navbar translations menu, can be external
    }
  } ,
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'Portfolio', link: '/Portfolio' },
      { text: 'Public notes', link: '/Notes' }    
    ],
    
    i18nRouting: true,

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'mastodon', link: 'https://mastodon.social/@Noph' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 2800"> <path d="M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600 V1300z"></svg>'}, link: 'https://www.twitch.tv/nophinou'
    },
    ]
}})