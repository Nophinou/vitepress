import{d as l,v as m,c as u,o as g}from"./chunks/framework.DPuwY6B9.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Noph","text":"Narrative design and game writing","tagline":"Passionate about the technicalities of designing and writing for interactive experiences <br><br>","image":{"src":"/test.png","alt":"Noph"},"actions":[{"theme":"brand","text":"Portfolio","link":"/Portfolio/about"},{"theme":"brand","text":"Public notes","link":"/Notes/About"}]},"features":[{"title":"About me","icon":{"light":"/darkabout.svg","dark":"/lightabout.svg"},"details":"Former marketing guy. I like writing, adapting a story to interactive structures, and chocolate ice cream."},{"title":"Games I like","icon":{"dark":"/whitegamepad.svg","light":"/blackgamepad.svg"},"details":"I either spend five hundred hours on arcade-type games such as Celeste, Spelunky, and Risk of Rain, or I sacrifice my nights to experience in a single sitting narrative games such as Omori, Citizen Sleeper, or OneShot."}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),f={name:"index.md"},x=l({...f,setup(h){return m(()=>{const e=document.querySelector(".VPImage.image-src");let t;function n(o){const i=o.clientX,r=o.clientY,s=i-t.x,c=r-t.y,a={x:s-320/2,y:c-320/2},d=Math.sqrt(a.x**2+a.y**2);e.style.transform=`
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
  `}),(e,t)=>(g(),u("div"))}});export{v as __pageData,x as default};
