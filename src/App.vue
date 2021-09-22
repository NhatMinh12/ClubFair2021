<template>
  <router-view/>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { BasisTextureLoader } from "three/examples/jsm/loaders/BasisTextureLoader.js"
import { fetchLogoURLS, fetchClubData, users, sportsData } from '@/firebase'
import { gsap, Power4, Back, Power0 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Vue from 'vue'
gsap.registerPlugin(ScrollTrigger);
import img from '@/assets/gradient.jpg';
export default {
  name: 'App',
 
}
</script>



<style lang="scss">
:root {
  --hue-neutral: 200;
  --hue-wrong: 0;
  --hue-correct: 145;
}


.btn .correct {
 --hue: var(--hue-correct) !important;
  color: black;
}
.btn .wrong {
   --hue: var(--hue-wrong) !important;
}
</style>
