---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Noph"
  text: "Narrative design and game writing"
  tagline: Passionate about the technicalities of designing and writing for interactive experiences <br><br>
  image:
    src: /test.png
    alt: Noph


features:
  - title: About me
    icon: 
      light: /darkabout.svg
      dark: /lightabout.svg
    details: Former marketing guy. I like writing, adapting a story to interactive structures, and chocolate ice cream.
  - title: Games I like
    icon: 
      dark: /whitegamepad.svg
      light: /blackgamepad.svg
    details: I either spend five hundred hours on arcade-type games such as Celeste, Spelunky, and Risk of Rain, or I sacrifice my nights to experience in a single sitting narrative games such as Omori, Citizen Sleeper, or OneShot. 
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