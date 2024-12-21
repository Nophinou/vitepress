---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Noph"
  text: "Narrative design et écriture interactive"
  tagline: Passionné par les aspects techniques de la conception et de l'écriture d'expériences interactives
  image:
    src: /test.png
    alt: Noph
  actions:
    - theme: brand
      text: Portfolio
      link: /Portfolio/about
    - theme: brand
      text: Notes publiques
      link: /Notes/About


features:
  - title: À propos de moi
    details: Anciennement dans le marketing. J'aime l'écriture et l'adaptation d'une narration à des structures interactives et la glace au chocolat.
    icon: 
      light: /darkabout.svg
      dark: /lightabout.svg
  - title: Ce à quoi je joue
    icon: 
      dark: /whitegamepad.svg
      light: /blackgamepad.svg
    details: Soit je passe cinq cent heures sur des jeux typés arcade (Celeste, Spelunky, Risk of Rain) de façon éparpillée, soit je sacrifie mes nuits pour faire d'une traite (ou presque) des jeux narratifs comme Omori, Citizen Sleeper, ou OneShot. 
---

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {

const $card = document.querySelector('.VPImage.image-src');
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - 320/2,
    y: topY - 320/2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
$card.style.transform = `
    translate(-50%,-50%)
    scale3d(1.2,1.2,1.2)
    rotate3d(
      ${center.y / 100 },
      ${-center.x / 100 },
      0,
      ${Math.log(distance) * 4}deg
    )
  `;

}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';

});


 $card.querySelector('.VPImage.image-src').style = `
    radial-gradient(
      circle at
      ${center.x * 2}px
      ${center.y * 2 }px,
      #ffffff55,
      #0000000f
    )
  `;


})
</script>