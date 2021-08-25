<template>
<div>
  <div class = 'cursor' ref = 'pointer'>
    <svg id="read-more" viewBox="0 0 30 30">
      <path d="M11.275 7.449l.703-.71 7.895 7.821-7.895 7.822-.703-.71 7.177-7.112z"></path>
      <path d="M19.022 14.046v1H.142v-1z"></path>
    </svg>
  </div>
  <div class = 'left-header'>
    <div>Hanoi - Amsterdam High School for the Gifted</div>
    <div>Ams Advisor</div>
  </div>
  <div class = 'center-title' v-if="!hasEnter">
    <div class = "left">Club Fair</div>
    <div class = "right">2021</div>
  </div>
  <div class = 'center-title namespace' v-if="!hasEnter">
    <div class = "left">Club Fair</div>
    <div class = "right">2021</div>
  </div>
  <div class="scene">
  </div>
  <router-view/>
</div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { fetchLogoURLS } from '@/firebase'
import { gsap, Power4, Back } from "gsap"
import AsyncTextureLoader from "@/utils"
import { DragControls } from 'three/examples/jsm/controls/DragControls.js'

export default {
  name: 'App',
  data() {
    return {
      hasEnter: false
    }
  },
  methods: {
    enlargeCursor() {
      document.getElementsByClassName('cursor')[0].style.width = '4rem'
      document.getElementsByClassName('cursor')[0].style.height = '4rem'

    },
    reduceCursor() {
      document.getElementsByClassName('cursor')[0].style.width = '0rem'
      document.getElementsByClassName('cursor')[0].style.height = '0rem'
    },
    onMouseMove(e) {
      document.getElementsByClassName('cursor')[0].style.left = (e.pageX - 25) + 'px'
      document.getElementsByClassName('cursor')[0].style.top = (e.pageY - 25) + 'px'
    },
    initialize() {
      var that = this
      class Webgl {
        constructor() {
          this.setProps()
          this.init()
        }
        async init() {
          this.scene = new THREE.Scene()
          this.camera = new THREE.PerspectiveCamera(45, this.props.width / this.props.height, this.props.near, this.props.far);
          this.camera.position.set(0.6, 9.7, 202.2);
          this.camera.lookAt(this.scene.position);

          this.time = 0
          this.clock = new THREE.Clock()
                    
          this.renderer = new THREE.WebGLRenderer({
              antialias: true,
              alpha: true
          });

          this.renderer.setPixelRatio(2);

          this.renderer.setSize(this.props.width, this.props.height);
          this.div = document.getElementsByClassName("scene")[0];
          this.div.appendChild(this.renderer.domElement);

          this.art_data = {
            logosURLS: await fetchLogoURLS('clubs_art')
          };
          this.cards = {
            art: new Cards(this, 13, 59, this.art_data.logosURLS, { x: 120, y: 70, z: 1}),
            academic: new Cards(this, 13, 59, this.art_data.logosURLS, { x: -120, y: -70, z: 1}),
            sports: new Cards(this, 13, 59, this.art_data.logosURLS, { x: -80, y: 70, z: 1}),
            social: new Cards(this, 13, 59, this.art_data.logosURLS, { x: 80, y: -70, z: 1})
          }
          this.render();

          this.cards.art.animateFromCenterToCircle(this.cards.art)
          this.cards.academic.animateFromCenterToCircle(this.cards.academic)
          this.cards.sports.animateFromCenterToCircle(this.cards.sports)
          this.cards.social.animateFromCenterToCircle(this.cards.social)

          this.moveToFirstLevel()

        }
        setProps() {
            var width = document.body.clientWidth;
            var height = window.innerHeight;
            var aspect = width / height;
            var pixRatio = window.devicepixelratio

            this.props = {
              width: width,
              height: height,
              aspect: aspect,
              left: -width / 2,
              right: width / 2,
              top: height / 2,
              bottom: -height / 2,
              near: 0.1,
              far: 10000,
              pixelRatio: pixRatio
            };
        }
        resize(){
          this.setProps();
          this.renderer.setSize(this.props.width, this.props.height);

          this.camera.aspect = this.props.width / this.props.height;
          this.camera.updateProjectionMatrix();
        }
        rotateCards(target, speed) {
          if (!that.hasEnter) {
            target.group_cards.rotation.z += speed
            for(var i = 0; i < target.group_cards.children.length; i++) {
              target.group_cards.children[i].rotation.z += -speed
            }
          } else {
            this.time = this.clock.getElapsedTime() * 0.1 * Math.PI;
             var tl = gsap.timeline()
             target.group_cards.rotation.z = 0
            for(var i = 0; i < target.group_cards.children.length; i++) {
              target.group_cards.children[i].rotation.z = -0
              tl.fromTo(target.group_cards.children[i].position, {x:target.group_cards.children[i].position.x, y:target.group_cards.children[i].position.y, z:target.group_cards.children[i].position.z}, {x: target.target_wheel_center.x +  Math.cos(this.time + target.radian_interval * i) * target.target_wheel_radius, y: target.target_wheel_center.y + Math.sin(this.time + target.radian_interval * i) * target.target_wheel_radius , z: target.target_wheel_center.z, duration: 2, ease: Power4.easeOut}, 0)
            }
          } 
        }
        moveToFirstLevel() {
          document.addEventListener("mousemove", e => that.onMouseMove(e))
          document.getElementsByClassName('center-title')[1].addEventListener( 'mouseenter', () => {
            that.enlargeCursor()
          })
          document.getElementsByClassName('center-title')[1].addEventListener( 'mouseleave', () => {
            that.reduceCursor()
          })
          document.getElementsByClassName('center-title')[1].addEventListener( 'click', () => {
            this.cards.art.animateFromCenterToCluster(this.cards.art)
            this.cards.academic.animateFromCenterToCluster(this.cards.academic)
            this.cards.sports.animateFromCenterToCluster(this.cards.sports)
            this.cards.social.animateFromCenterToCluster(this.cards.social)
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);

            this.controls.mouseButtons = {
              LEFT: THREE.MOUSE.PAN
            }

            this.controls.touches = {
              ONE: THREE.TOUCH.PAN,
              // TWO: THREE.TOUCH.DOLLY_PAN
            }

            this.controls.enableDamping = true
            this.controls.enablePan = true
            that.reduceCursor()
            that.hasEnter = true
          })
        }
        render(){
          if(that.hasEnter) {
            this.controls.update()
          }
          this.renderer.render(this.scene, this.camera)
          this.rotateCards(this.cards.art, 0.004)
          this.rotateCards(this.cards.academic, 0.003)
          this.rotateCards(this.cards.social, 0.0025)
          this.rotateCards(this.cards.sports, 0.002)
          requestAnimationFrame(this.render.bind(this))
        }
      }

      class Cards {
        constructor(webgl, image_radius, wheel_radius, image_link, target_wheel_center) {
          this.webgl = webgl
          this.image_radius = image_radius
          this.wheel_radius = wheel_radius
          this.image_number = image_link.length
          this.radian_interval = (2 * Math.PI) /  this.image_number
          this.wheel_center = { x: 0, y: 0}
          this.image_link = image_link
          this.target_wheel_center = target_wheel_center
          this.target_wheel_radius = 40
          this.tl = gsap.timeline()
          this.init()
        }
        async init() {
          this.group_cards = new THREE.Group()
          for(var i = 0; i < this.image_number; i++) {
            this.loader = new THREE.TextureLoader()
            this.loader.setCrossOrigin('')
            this.texture = this.loader.load(this.image_link[i])
            this.material = new THREE.MeshBasicMaterial({
              map: this.texture,
              transparent: false,
              opacity: 1,
              depthTest: false,
            })

            this.plane = new THREE.PlaneGeometry(this.image_radius, this.image_radius)
            this.mesh = new THREE.Mesh(this.plane, this.material)
            this.mesh.material.side = THREE.DoubleSide
            this.mesh.position.set(
              0,
              0,
              0
            )
            this.group_cards.add(this.mesh)
          }
          this.webgl.scene.add(this.group_cards)
        }
        animateFromCenterToCircle(target) {
          var tl = gsap.timeline()
          for(var i = 0; i < target.group_cards.children.length; i++) {
            tl.fromTo(target.group_cards.children[i].position, {x:target.group_cards.children[i].position.x, y:target.group_cards.children[i].position.y}, {x: target.wheel_center.x + Math.cos(target.radian_interval * i) * target.wheel_radius, y: target.wheel_center.y + Math.sin(target.radian_interval * i) * target.wheel_radius, duration: 2, ease: Back.easeOut.config(2)}, 1)
          }
        }
        animateFromCenterToCluster(target) {
          var tl = gsap.timeline()
          for(var i = 0; i < target.group_cards.children.length; i++) {
            tl.fromTo(target.group_cards.children[i].position, {x:target.group_cards.children[i].position.x, y:target.group_cards.children[i].position.y, z:target.group_cards.children[i].position.z}, {x: target.target_wheel_center.x +  Math.cos(target.radian_interval * i) * target.target_wheel_radius, y: target.target_wheel_center.y + Math.sin(target.radian_interval * i) * target.target_wheel_radius , z: target.target_wheel_center.z, duration: 2, ease: Power4.easeOut}, 0)
          }
        }
      }

      var webgl = new Webgl();
      window.onresize = () => {
          webgl.resize()
      }

    }
  },
  mounted() {
    this.initialize()
  }
}
</script>



<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@300;400&family=DM+Mono&family=DM+Sans&family=DM+Serif+Display&display=swap');

@font-face {
    font-family: GS-M;
    src: url(~@/assets/GoogleSans-Medium.otf);
}

@font-face {
    font-family: GS-R;
    src: url(~@/assets/GoogleSans-Regular.otf);
}

@font-face {
    font-family: Suisse;
    src: url(~@/assets/SuisseIntlTrial-Regular.otf);
}

html, body {
  color: black ;
  background:  #f1f1f1;
  margin: 0;
  padding: 0;
}

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

#app {
  font-family: 'Be Vietnam', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.left-header {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 1rem;
  padding-left: 1.5rem;
  font-size: 1rem;
  text-align: left;
}

.center-title {
  position: fixed;
  left:50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 4.5rem;
  width: 40vw;
  padding: 3rem;
  cursor: pointer;
  

  .right {
    text-align: right;
  }

  .left {
    text-align: left;
  }
}

.cursor {
  position: absolute;
  width: 0rem;
  height: 0rem;
  border-radius: 50%;
  background: #ffdb13;
  z-index: 1000;
  transform: rotate(-45deg);
  transition: width 0.5s ease, height 0.5s ease;

  #read-more {
    fill: #0053d6;
    position: absolute;
    top: 0;
    left: 0;
  }
}

.namespace  {
  z-index: 1001;
  opacity: 0;
}
</style>
