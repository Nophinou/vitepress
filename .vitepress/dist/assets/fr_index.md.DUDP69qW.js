import{d as l,v as u,c as m,o as p}from"./chunks/framework.DPuwY6B9.js";const v=JSON.parse(`{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Noph","text":"Narrative design et écriture interactive","tagline":"Passionné par les aspects techniques de la conception et de l'écriture d'expériences interactives","image":{"src":"/test.png","alt":"Noph"},"actions":[{"theme":"brand","text":"Portfolio","link":"/Portfolio/about"},{"theme":"brand","text":"Notes publiques","link":"/Notes/About"}]},"features":[{"title":"À propos de moi","details":"Anciennement dans le marketing. J'aime l'écriture et l'adaptation d'une narration à des structures interactives et la glace au chocolat.","icon":{"light":"/darkabout.svg","dark":"/lightabout.svg"}},{"title":"Ce à quoi je joue","icon":{"dark":"/whitegamepad.svg","light":"/blackgamepad.svg"},"details":"Soit je passe cinq cent heures sur des jeux typés arcade (Celeste, Spelunky, Risk of Rain) de façon éparpillée, soit je sacrifie mes nuits pour faire d'une traite (ou presque) des jeux narratifs comme Omori, Citizen Sleeper, ou OneShot."}]},"headers":[],"relativePath":"fr/index.md","filePath":"fr/index.md"}`),f={name:"fr/index.md"},x=l({...f,setup(g){return u(()=>{const e=document.querySelector(".VPImage.image-src");let t;function n(o){const r=o.clientX,s=o.clientY,i=r-t.x,c=s-t.y,a={x:i-320/2,y:c-320/2},d=Math.sqrt(a.x**2+a.y**2);e.style.transform=`
    translate(-50%,-50%)
    scale3d(1.2,1.2,1.2)
    rotate3d(
      ${a.y/100},
      ${-a.x/100},
      0,
      ${Math.log(d)*4}deg
    )
  `}e.addEventListener("mouseenter",()=>{t=e.getBoundingClientRect(),document.addEventListener("mousemove",n)}),e.addEventListener("mouseleave",()=>{document.removeEventListener("mousemove",n),e.style.transform=""}),e.querySelector(".VPImage.image-src").style=`
    radial-gradient(
      circle at
      ${center.x*2}px
      ${center.y*2}px,
      #ffffff55,
      #0000000f
    )
  `}),(e,t)=>(p(),m("div"))}});export{v as __pageData,x as default};
