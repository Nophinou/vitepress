import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [

    ['link', { rel: 'icon', href: '/crinière.png' }],],
  title: "Noph",
  description: "Noph, Narrative designer and game writer",
  base: '/',
  logo: '/crinière.png',
  cleanUrls: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/'
    },
    fr: {
      label: 'French',
      lang: 'fr', // optional, will be added  as `lang` attribute on `html` tag
      link: '/fr/', // default /fr/ -- shows on navbar translations menu, can be external
      themeConfig: {
        docFooter: {
          prev: 'Page précédente',
          next: 'Page suivante'
        },
        returnToTopLabel: 'Retour en haut',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Thème',
        lightModeSwitchTitle: 'Passer en mode clair',
        darkModeSwitchTitle: 'Passer en mode sombre',
        langMenuLabel: 'Changer de langue',
        outline: {
          label: 'Sur cette page'
        },
        nav: [
         // { text: 'Portfolio', link: '/fr/Portfolio/About', activeMatch: '/fr/Portfolio/' },
          { text: 'Notes Publiques', link: '/fr//Notes/About', activeMatch: '/fr/Notes/'},
         // { text: 'Maintenant', link: '/fr/Now.md', activeMatch: '/fr/Now'}    
        ]
      }
    }
  } ,
  

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
     // { text: 'Portfolio', link: '/Portfolio/About.md', activeMatch: '/Portfolio/' },
      { text: 'Public notes', link: '/Notes/About', activeMatch: '/Notes/'},    
     // { text: 'Now', link: '/Now.md', activeMatch: '/Now'},    
    ],
    logo: '/crinière.png',
    i18nRouting: true,
    lastUpdated: false,
    externalLinkIcon: true,
    outline: {
      level: 'deep'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          fr: {
            translations: {
              button: {
                buttonText: 'Recherche',
                buttonAriaLabel: 'Recherche',
              },
              modal: {
                displayDetails: 'Afficher les détails',
                resetButtonTitle: 'Réinitialiser',
                backButtonTitle: 'Retour',
                noResultsText: 'Pas de résultat pour',
                footer: {
                  selectText: 'pour sélectionner',
                  selectKeyAriaLabel: 'sélection',
                  navigateText: 'pour naviguer',
                  navigateUpKeyAriaLabel: 'haut',
                  navigateDownKeyAriaLabel: 'bas',
                  closeText: 'Fermer',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },

    sidebar: {
      '/Notes/': [
        { text: 'About', link: '/Notes/About' },
      { 
        text: 'Narrative design',
        items: [
          { text: 'Storylets', link: '/Notes/Storylets' },
          { text: 'Puzzle design', link: '/Notes/Puzzle design' },
          { text: 'Puzzle types', link: '/Notes/Puzzle types' },
          { text: 'Tools', link: '/Notes/Tools' },
          { text: 'Choices', link: '/Notes/Choices' },
          { text: 'Dialogue', link: '/Notes/Dialogue' },
          { text: 'NPCs', link: '/Notes/NPCs' },
          { text: 'Protagonists', link: '/Notes/Protagonists' },
          { text: 'Implicit and explicit content', link: '/Notes/Implicit and explicit content' },
          { text: 'Branching narratives', link: '/Notes/Branching narratives' },
          { text: 'Story shapes', link: '/Notes/Story shapes' },
          { text: 'Bibliography', link: '/Notes/bibliography' },

        ]
      },
      { 
        text: 'Games',
        items: [
          { text: 'Celeste', link: '/Notes/Celeste' },
          { text: 'Balatro', link: '/Notes/Balatro' },


        ]
      },
    ],


      '/fr/Notes/': [
        { text: 'À propos', link: '/fr/Notes/About' },
      { 
        text: 'Narrative Design',
        items: [
          { text: 'Narramiettes', link: '/fr/Notes/Storylets' },
          { text: 'Puzzle design', link: '/fr/Notes/Puzzle design' },
          { text: 'Types de puzzles', link: '/fr/Notes/Puzzle types' },
          { text: 'Outils', link: '/fr/Notes/Tools' },
          { text: 'Choix', link: '/fr/Notes/choices' },
          { text: 'Dialogue', link: '/fr/Notes/Dialogue' },
          { text: 'PNJs', link: '/fr/Notes/NPCs' },
          { text: 'Protagonistes', link: '/fr/Notes/protagonists' },
          { text: 'Contenu implicite et explicite', link: '/fr/Notes/Implicit and explicit content' },
          { text: 'Narrations à embranchements', link: '/fr/Notes/Branching narratives' },
          { text: 'Anatomie d\'une histoire', link: '/fr/Notes/Story shapes' },
          { text: 'Bibliographie', link: '/fr/Notes/bibliography' },

        ]
      },
      { 
        text: 'Jeux',
        items: [
          { text: 'Celeste', link: '/fr/Notes/Celeste' },
          { text: 'Balatro', link: '/fr/Notes/Balatro' },


        ]
      },
    ],

      '/Portfolio/': [
      { 
        text: 'Portfolio',
      items: [
        { text: 'About', link: '/Notes/About' },
      ]
      }
    ]
  },
  
    
    socialLinks: [
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258 230"> <path d="m35.2 0h92.9c86.4 0 93.2 0.1 96.6 1.8 2 0.9 7.3 5.3 11.7 9.7 4.5 4.4 10.2 10.7 12.7 14 2.6 3.3 5.7 8 6.9 10.5 2.1 3.9 2.3 5.5 1.8 12.5-0.4 5.8-1.2 9.4-3 13-1.4 2.8-4.6 6.9-7.2 9.3-3 2.7-6.4 4.7-9.9 5.7-3.1 0.9-6.6 1.3-8.7 0.9-1.9-0.4-5.4-1.5-7.8-2.6-2.3-1-5.7-3.3-7.6-5-1.9-1.8-4.3-5.3-7.5-12.3l-1.9 4.5c-1.1 2.5-3.7 6.1-5.8 8.2-2.2 2-5.7 4.4-7.9 5.3-2.2 0.9-6.5 1.7-9.5 1.7-3.5 0.1-7.3-0.7-10.5-2-2.8-1.2-6.2-3.4-7.7-4.9-1.4-1.6-3.8-4.9-7.8-12.3l-1.3 3.3c-0.7 1.7-2.9 5-4.9 7.2-1.9 2.2-5.9 5.1-8.9 6.4-3.6 1.6-7.3 2.4-10.9 2.4-3.5 0-7.3-0.8-10.5-2.2-2.8-1.2-6.5-3.6-8.4-5.4-1.8-1.8-4.4-5.4-5.7-8.2-1.2-2.7-2.3-4.3-2.3-3.5-0.1 0.8-1 3.3-2.2 5.5-1.2 2.2-3.3 5.2-4.8 6.8-1.4 1.5-4.9 3.7-7.6 4.9-3.2 1.3-7 2.1-10.5 2-3.2 0-7.4-0.9-10-2-2.5-1.1-6.2-3.7-8.2-5.8-2-2.2-4.4-5.7-7-11.9l-2.4 5c-1.4 2.8-3.9 6.3-5.7 7.8-1.8 1.5-5 3.6-7.2 4.6-2.2 1-5.6 2.1-7.5 2.5-2.1 0.4-5.6 0-8.8-0.9-3.4-1-6.8-3-9.8-5.7-2.6-2.4-5.8-6.5-7.2-9.3-1.9-3.7-2.7-7.1-3-13-0.5-6.9-0.2-8.6 1.7-12.5 1.3-2.5 4.2-6.9 6.4-9.9 2.3-3 7.1-8.4 10.7-12.1 3.6-3.7 8.7-8.4 11.3-10.4zm15.8 71.1c0.3 0 2.2 1.8 4.3 4 2.1 2.1 6.1 5.1 9 6.6 4.3 2.2 6.6 2.7 12.3 2.7 5.4 0 8.1-0.5 12.5-2.6 3-1.4 7-4.4 9-6.7 1.9-2.2 3.8-4 4.2-4.1 0.4 0 2.4 1.8 4.5 4.1 2.1 2.2 6.2 5.3 9.3 6.7 4.3 2.1 7 2.6 13 2.6 6.1 0.1 8.5-0.4 13-2.6 3-1.4 7.1-4.5 9.2-6.7 2.1-2.3 4.1-4.1 4.5-4.1 0.4 0 1.9 1.5 3.3 3.3 1.5 1.7 5.5 4.8 9 6.7 5.6 3 7.4 3.4 13.5 3.4 5.6 0 8-0.6 12.2-2.7 2.9-1.5 7.1-4.5 13.5-11l5.1 5c2.8 2.7 7.2 5.7 9.7 6.7 2.4 0.9 6.7 2 14.5 3.1l0.7 9.5c0.5 5.2 0.7 29.1 0.5 53-0.4 40.5-0.5 44.3-2.7 54.5-1.2 6.1-3 12.6-4.1 14.5-1 1.9-2.4 4.3-3.1 5.2-1 1.2-5.2 2.2-15.8 3.7-8 1.2-20.4 2.5-27.5 3.1-7.2 0.6-32.3 1-55.8 1-23.5 0-48.5-0.5-55.5-1-7-0.6-19.3-2-27.2-3.1-10.7-1.5-14.9-2.5-15.9-3.7-0.7-0.9-2.1-3.3-3.1-5.2-1-1.9-2.9-8.4-4.1-14.5-2.1-10.2-2.3-14-2.6-54.5-0.2-23.9-0.1-47.8 1.2-62.5l5.2-0.7c2.9-0.4 7.4-1.7 10-2.8 2.6-1.1 6.8-4 9.2-6.5 2.5-2.5 4.7-4.5 5-4.4zm13.1 35c-1.8 1.9-4.8 5.7-6.5 8.4-1.7 2.8-4.3 8.2-5.8 12-1.5 3.9-4.3 13.1-6.3 20.5-2 7.4-4.5 16.4-5.6 20-1 3.6-2.6 10.2-3.4 14.8-0.8 4.5-1.2 9.4-0.9 11 0.4 1.5 1.2 4 1.8 5.5 0.6 1.6 2.5 3.4 4.2 4.2 1.6 0.7 5.2 1.6 8 1.9 2.7 0.4 7.4 0.2 10.5-0.4 3-0.6 7.7-2.1 10.5-3.3 2.7-1.3 6.9-4.3 9.2-6.8 2.4-2.4 5.2-6.7 6.3-9.6 1.1-2.9 2-6.1 1.9-7 0-1 0.6-2.5 1.3-3.4 1.1-1.5 2.2-1.5 10.8-0.3 5.2 0.7 18.2 1.3 29 1.3 10.7 0 23.7-0.6 29-1.3 5.2-0.7 9.7-1 10.1-0.7 0.3 0.3 1.5 3.8 2.7 7.6 1.1 3.9 3.4 8.8 5.2 11 1.8 2.2 4.6 5 6.3 6.3 1.7 1.2 5.6 3.2 8.7 4.4 3.8 1.4 7.9 2.1 13.5 2.1 4.9 0 9.1-0.5 10.9-1.4 1.6-0.8 3.7-2.5 4.8-3.9 1.4-1.9 1.9-4.1 1.9-9 0-3.6-0.8-9.6-1.6-13.5-0.9-3.8-2.2-9-3-11.5-0.8-2.5-3-10.6-5-18-2-7.4-4.8-16.6-6.3-20.5-1.5-3.8-4.1-9.2-5.8-12-1.7-2.7-4.7-6.5-6.5-8.4-1.9-1.8-5.1-4.2-7.2-5.2-2.8-1.4-5.9-1.9-12-1.9-5.8 0-9.4 0.6-12.2 1.9-2.2 1-5.5 3-7.3 4.5l-3.2 2.6h-46c-5.1-4.1-8.3-6.1-10.5-7.1-2.9-1.3-6.4-1.8-12.5-1.8-6.3 0-9.5 0.5-12 1.8-2 1-5.1 3.4-7 5.2zm64.9 16.9c0.8 0 7.1 5.6 13.8 12.5 6.7 6.9 12.1 13.1 11.9 13.8-0.2 0.8-2.6 1.3-12.6 1.7v5c0 2.8-0.3 5.7-0.5 6.5-0.4 1.2-2.8 1.5-12.5 1.5-9.8 0-12.1-0.3-12.5-1.5-0.3-0.8-0.5-3.7-0.5-11.5h-6.5c-5.2 0-6.6-0.3-6.7-1.6-0.1-0.9 5.4-7.2 12.2-14 6.7-6.8 13-12.4 13.9-12.4z"></svg>'}, link: 'https://nph.itch.io/'
    },
    { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 176"> <path d="m9.1 1.9c-1.9 1-4.5 3.4-5.8 5.3-1.3 1.8-2.3 4.2-2.1 5.2 0.2 1.3 21.2 15.6 63 43.2 34.6 22.8 63.2 41.4 63.8 41.4 0.6 0 29.2-18.6 63.8-41.4 41.8-27.6 62.8-41.9 63-43.2 0.2-1-0.7-3.4-2-5.3-1.3-1.9-3.9-4.2-5.8-5.3-3.4-1.7-8.4-1.8-119-1.8-111.7 0-115.6 0.1-118.9 1.9zm-9.1 86.6v55.5c66.6-42.2 85.6-54.8 85.2-55.2-0.4-0.4-19.5-13.1-42.4-28.2-23-15.2-42-27.6-42.3-27.6-0.3 0-0.5 25-0.5 55.5zm212.8-27.7c-22.9 15.3-41.9 27.9-42.2 28.2-0.3 0.3 18.8 12.8 42.4 27.8l43 27.2c0-86-0.3-111-0.8-110.9-0.4 0-19.5 12.5-42.4 27.7zm-161.8 69.7c-32.1 20.3-49.6 32-49.8 33.2-0.2 1 0.7 3.3 2 5.2 1.3 1.9 3.9 4.2 5.8 5.3 3.4 1.7 8.4 1.8 119 1.8 110.6 0 115.6-0.1 119-1.8 1.9-1.1 4.5-3.4 5.8-5.3 1.2-1.9 2.2-4.2 2.2-5.1 0-1.3-15.4-11.5-50.1-33.3l-50.2-31.5c-20.1 13.6-24.6 16-26.7 16-2.1 0-6.7-2.4-15-8-6.6-4.4-12.1-8-12.2-7.9-0.2 0-22.6 14.1-49.8 31.4z"></svg>'}, link: 'mailto:contact@nophinou.com'
  },
      { icon: 'mastodon', link: 'https://mastodon.social/@Noph' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/noph.bsky.social' },
      { icon: 'twitch', link: 'https://www.twitch.tv/nophinou' },
    ]

}})