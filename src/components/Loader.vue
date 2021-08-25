<template>
    <div>
        <div class = "scene"></div>
        <div class="loading-text"><span>40</span>/40 CÂU LẠC BỘ</div>
    </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { gsap, Power4 } from "gsap"
import texture from "@/assets/noise.jpg"
export default {
    name: 'Loader',
    methods: {
        createLoader() {
            class Webgl {
                constructor() {
                    this.vertShader = `
                    varying vec3 vPos;
                    // varying vec3 vNormal;

                    uniform float uTick;
                    varying vec3 vNormal;
                    varying vec2 vUv;
                    varying float vHeight;

                    const float PI = 3.1415926;

                    mat2 calcRotate2D(float _time){
                        float _sin = sin(_time);
                        float _cos = cos(_time);
                        return mat2(_cos, _sin, -_sin, _cos);
                    }

                    vec3 paramFunction1(){
                        float u = -(uv.x * 2.0 * PI);
                        float v = (uv.y * PI);

                        float _x = sin(u) * sin(v);
                        float _y = cos(u) * sin(v);
                        float _z = cos(v);

                        return vec3(_x, _y, _z);
                    }


                    vec3 paramFunction2(){
                        float a = 3.0;
                        float n = 3.0;
                        float m = 2.0;

                        float u = uv.x * 4.0 * PI;
                        float v = uv.y * 2.0 * PI;

                        float _x = (a + cos(n * u / 2.0) * sin(v) - sin(n * u / 2.0) * sin(2.0 * v)) * cos(m * u / 2.0);
                        float _y = (a + cos(n * u / 2.0) * sin(v) - sin(n * u / 2.0) * sin(2.0 * v)) * sin(m * u / 2.0);
                        float _z = sin(n * u / 2.0) * sin(v) + cos(n * u / 2.0) * sin(2.0 * v);

                        return vec3(_x, _y, _z);
                    }


                    void main(){
                        float time = uTick;

                        vNormal = normal;
                        vUv = uv;

                        float shapeRatio = cos(time * 1.5 + sin(time * 1.5)) * 0.5 + 0.5;

                        vec3 shape1 = paramFunction1() * 2.2;
                        vec3 shape2 = paramFunction2() * 0.6;


                        vec3 newPos =mix(shape2, shape1, shapeRatio);
                        // vec3 newPos = shape2;

                        vec3 scalePos = newPos * 3.0;


                        vec3 rotatePos = scalePos;
                        // rotatePos.yz = calcRotate2D(time * 0.6) * rotatePos.yz;
                        rotatePos.xz = calcRotate2D(time * 0.6) * rotatePos.xz;

                        vec4 mvPos = vec4(rotatePos, 1.0);

                        vPos = mvPos.xyz;
                        // vNormal = normal;

                        gl_Position =projectionMatrix * modelViewMatrix * mvPos; 
                    }`;
                    this.fragShader = `
                    varying vec3 vPos;
                    // varying vec3 vNormal;

                    uniform float uTick;
                    uniform sampler2D txt;
                    varying vec3 vNormal;
                    varying vec2 vUv;
                    varying float vHeight;
                    uniform float progress;

                    const float PI = 3.1415926;

                    // base color
                    const vec3 objColor = vec3(1.0);
                    
                    
                    // hemisphere ground color
                    const vec3 hemiLight_g = vec3(0.86,0.86,0.86);
                    
                    // hemisphere sky color
                    const vec3 hemiLight_s_1 = vec3(0.5882352941176471,0.8274509803921568,0.8823529411764706);
                    const vec3 hemiLight_s_2 = vec3(0.9686274509803922,0.8509803921568627,0.6666666666666666);
                    const vec3 hemiLight_s_3 = vec3(0.8784313725490196,0.5882352941176471,0.7647058823529411);
                    
                    // directional light color
                    const vec3 dirLight = vec3(0.16);
                    const vec3 dirLight_2 = vec3(0.02);


                    const vec3 hemiLightPos_1 = vec3(100.0, 100.0, -100.0);
                    const vec3 hemiLightPos_2 = vec3(-100.0, -100.0, 100.0);
                    const vec3 hemiLightPos_3 = vec3(-100.0, 100.0, 100.0);

                    const vec3 dirLightPos = vec3(-30, 50, 50);
                    const vec3 dirLightPos_2 = vec3(30, -50, -50);

                    vec3 calcIrradiance_hemi(vec3 newNormal, vec3 lightPos, vec3 grd, vec3 sky){
                        float dotNL = dot(newNormal, normalize(lightPos));
                        float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

                        return mix(grd, sky, hemiDiffuseWeight);
                    }

                    // Classic Perlin noise, periodic version
                    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
                    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
                    vec4 fade(vec4 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

                    float cnoise(vec4 P, vec4 rep){
                    vec4 Pi0 = mod(floor(P), rep); // Integer part modulo rep
                    vec4 Pi1 = mod(Pi0 + 1.0, rep); // Integer part + 1 mod rep
                    vec4 Pf0 = fract(P); // Fractional part for interpolation
                    vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0
                    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
                    vec4 iy = vec4(Pi0.yy, Pi1.yy);
                    vec4 iz0 = vec4(Pi0.zzzz);
                    vec4 iz1 = vec4(Pi1.zzzz);
                    vec4 iw0 = vec4(Pi0.wwww);
                    vec4 iw1 = vec4(Pi1.wwww);

                    vec4 ixy = permute(permute(ix) + iy);
                    vec4 ixy0 = permute(ixy + iz0);
                    vec4 ixy1 = permute(ixy + iz1);
                    vec4 ixy00 = permute(ixy0 + iw0);
                    vec4 ixy01 = permute(ixy0 + iw1);
                    vec4 ixy10 = permute(ixy1 + iw0);
                    vec4 ixy11 = permute(ixy1 + iw1);

                    vec4 gx00 = ixy00 / 7.0;
                    vec4 gy00 = floor(gx00) / 7.0;
                    vec4 gz00 = floor(gy00) / 6.0;
                    gx00 = fract(gx00) - 0.5;
                    gy00 = fract(gy00) - 0.5;
                    gz00 = fract(gz00) - 0.5;
                    vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
                    vec4 sw00 = step(gw00, vec4(0.0));
                    gx00 -= sw00 * (step(0.0, gx00) - 0.5);
                    gy00 -= sw00 * (step(0.0, gy00) - 0.5);

                    vec4 gx01 = ixy01 / 7.0;
                    vec4 gy01 = floor(gx01) / 7.0;
                    vec4 gz01 = floor(gy01) / 6.0;
                    gx01 = fract(gx01) - 0.5;
                    gy01 = fract(gy01) - 0.5;
                    gz01 = fract(gz01) - 0.5;
                    vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
                    vec4 sw01 = step(gw01, vec4(0.0));
                    gx01 -= sw01 * (step(0.0, gx01) - 0.5);
                    gy01 -= sw01 * (step(0.0, gy01) - 0.5);

                    vec4 gx10 = ixy10 / 7.0;
                    vec4 gy10 = floor(gx10) / 7.0;
                    vec4 gz10 = floor(gy10) / 6.0;
                    gx10 = fract(gx10) - 0.5;
                    gy10 = fract(gy10) - 0.5;
                    gz10 = fract(gz10) - 0.5;
                    vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
                    vec4 sw10 = step(gw10, vec4(0.0));
                    gx10 -= sw10 * (step(0.0, gx10) - 0.5);
                    gy10 -= sw10 * (step(0.0, gy10) - 0.5);

                    vec4 gx11 = ixy11 / 7.0;
                    vec4 gy11 = floor(gx11) / 7.0;
                    vec4 gz11 = floor(gy11) / 6.0;
                    gx11 = fract(gx11) - 0.5;
                    gy11 = fract(gy11) - 0.5;
                    gz11 = fract(gz11) - 0.5;
                    vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
                    vec4 sw11 = step(gw11, vec4(0.0));
                    gx11 -= sw11 * (step(0.0, gx11) - 0.5);
                    gy11 -= sw11 * (step(0.0, gy11) - 0.5);

                    vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);
                    vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);
                    vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);
                    vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);
                    vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);
                    vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);
                    vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);
                    vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);
                    vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);
                    vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);
                    vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);
                    vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);
                    vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);
                    vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);
                    vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);
                    vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);

                    vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));
                    g0000 *= norm00.x;
                    g0100 *= norm00.y;
                    g1000 *= norm00.z;
                    g1100 *= norm00.w;

                    vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));
                    g0001 *= norm01.x;
                    g0101 *= norm01.y;
                    g1001 *= norm01.z;
                    g1101 *= norm01.w;

                    vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));
                    g0010 *= norm10.x;
                    g0110 *= norm10.y;
                    g1010 *= norm10.z;
                    g1110 *= norm10.w;

                    vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));
                    g0011 *= norm11.x;
                    g0111 *= norm11.y;
                    g1011 *= norm11.z;
                    g1111 *= norm11.w;

                    float n0000 = dot(g0000, Pf0);
                    float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));
                    float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));
                    float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));
                    float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));
                    float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
                    float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));
                    float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));
                    float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));
                    float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));
                    float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
                    float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));
                    float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));
                    float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));
                    float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));
                    float n1111 = dot(g1111, Pf1);

                    vec4 fade_xyzw = fade(Pf0);
                    vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
                    vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
                    vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
                    vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
                    float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
                    return 2.2 * n_xyzw;
                    }

                    mat4 contrastMatrix( float contrast )
                    {
                        float t = ( 1.0 - contrast ) / 2.0;
                        
                        return mat4( contrast, 0, 0, 0,
                                    0, contrast, 0, 0,
                                    0, 0, contrast, 0,
                                    t, t, t, 1 );

                    }

                    mat4 saturationMatrix( float saturation )
                    {
                        vec3 luminance = vec3( 0.3086, 0.6094, 0.0820 );
                        
                        float oneMinusSat = 1.0 - saturation;
                        
                        vec3 red = vec3( luminance.x * oneMinusSat );
                        red+= vec3( saturation, 0, 0 );
                        
                        vec3 green = vec3( luminance.y * oneMinusSat );
                        green += vec3( 0, saturation, 0 );
                        
                        vec3 blue = vec3( luminance.z * oneMinusSat );
                        blue += vec3( 0, 0, saturation );
                        
                        return mat4( red,     0,
                                    green,   0,
                                    blue,    0,
                                    0, 0, 0, 1 );
                    }


                    vec3 calcIrradiance_dir(vec3 newNormal, vec3 lightPos, vec3 light){
                        float dotNL = dot(newNormal, normalize(lightPos));

                        return light * max(0.0, dotNL);
                    }


                    void main(){

                        // float time = uTick * 0.006;

                        // vec3 _normal = normalize(cross(dFdx(vPos), dFdy(vPos)));

                        // vec3 hemiColor = vec3(0.0);
                        // hemiColor += calcIrradiance_hemi(_normal, hemiLightPos_1, hemiLight_g, hemiLight_s_1) * 0.38;
                        // hemiColor += calcIrradiance_hemi(_normal, hemiLightPos_2, hemiLight_g, hemiLight_s_2) * 0.26;
                        // hemiColor += calcIrradiance_hemi(_normal, hemiLightPos_3, hemiLight_g, hemiLight_s_3) * 0.36;
                        
                        // vec3 dirColor = vec3(0.0);
                        // dirColor += calcIrradiance_dir(_normal, dirLightPos, dirLight);
                        // dirColor += calcIrradiance_dir(_normal, dirLightPos_2, dirLight_2);


                        // vec3 color = objColor * hemiColor;
                        
                        // color += dirColor;


                        // gl_FragColor = vec4(color, 1.0);

                        // float diff = dot(vec3(1.), vNormal);
                        // vec4 color = texture2D(txt, vUv + 0.2 * cnoise( vec4(vUv*10., time/60., 0.), vec4(8.) ) );
                        // gl_FragColor = vec4(vHeight, 0. ,0. ,1.);
                        // gl_FragColor = color;


                        float diff = dot(vec3(1.), vNormal);

                        // float phi = acos(vNormal.y);
                        // float angle = atan(vNormal.x, vNormal.z);

                        // float fresnel = abs(dot(cameraPosition, vNormal));
                        // fresnel = fresnel*fresnel*fresnel;
                        // vec2 newFakeUV = vec2( (angle + PI)/(2.*PI),phi/PI );
                        // vec2 fakeUV = vec2(dot(vec3(1.), vNormal), dot(vec3(-1.,0.,1.), vNormal));
                        // fakeUV = fract(fakeUV + vec2(progress/40., progress/20.));
                        // vec4 color = texture2D(txt, vUv + 0.5 * cnoise( vec4(vUv*10., progress/100., 0.), vec4(10.) ) );
                        // gl_FragColor = color;

                        float ripples = 0.35;
                        vec2 scale = vec2(10.0, 10.0);
                        bool trueDistortion = true;

                        vec2 uv = gl_FragCoord.xy / 600.;
    
                        float v = 0.0;
                        vec2 distort = uv * scale - scale/2.0;
                        v += sin(sqrt(distort.x*distort.x + distort.y * distort.y) + progress/50. + 1.0);
                        
                        distort = vec2(sin(PI*v*ripples),cos(PI*v*ripples));
                        vec2 texCord;
                        
                        if(trueDistortion){
                            texCord = uv*distort;
                        }else{
                            texCord = uv+distort;
                        }

                        vec4 color = texture2D(txt, texCord );
                        gl_FragColor = color;

                    }`;

                    this.setProps()
                    this.init()
                }

                init() {
                    this.scene = new THREE.Scene()
                    this.camera = new THREE.PerspectiveCamera(45, this.props.width / this.props.height, this.props.near, this.props.far);
                    this.camera.position.set(34, -2, -2.5);
                    this.camera.lookAt(this.scene.position);
                    
                    this.renderer = new THREE.WebGLRenderer({
                        antialias: true,
                        alpha: true
                    });

                    this.renderer.setPixelRatio(1.5);

                    // this.renderer.setClearColor(0xffffff,0.3);
                    this.renderer.setSize(this.props.width, this.props.height);
                    
                    

                    this.div = document.getElementsByClassName("scene")[0];
                    this.div.appendChild(this.renderer.domElement);

                    // this.obj = new Obj(this);
                    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
                    const material1 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
                    const cube = new THREE.Mesh( geometry, material1 );
                    this.scene.add( cube );
                    this.settings = {
                        uTick: {
                            value: 0
                        }
                    }
                    this.render();
                    this.animateLoader()
                    // var control =  new OrbitControls(this.camera, this.renderer.domElement); 
                }

                setProps() {
                    var width = document.body.clientWidth;
                    var height = window.innerHeight;
                    var aspect = width / height;

                    this.props = {
                        width: width,
                        height: height,
                        aspect: aspect,
                        left: -width / 2,
                        right: width / 2,
                        top: height / 2,
                        bottom: -height / 2,
                        near: 0.1,
                        far: 10000
                    };
                }

                resize(){
                    this.setProps();
                    this.renderer.setSize(this.props.width, this.props.height);

                    this.camera.aspect = this.props.width / this.props.height;
                    this.camera.updateProjectionMatrix();
                }

                render(){
                    this.renderer.render(this.scene, this.camera)
                    this.obj.mesh.rotation.y += 0.01
                    this.obj.uniforms.uTick.value = this.settings.uTick.value
                    this.obj.uniforms.progress.value += 1
                    requestAnimationFrame(this.render.bind(this))
                }

                animateLoader() {
                    this.tl = gsap.timeline()
                    this.tl.to(this.settings.uTick, {
                        duration: 8,
                        value: 0.,
                        ease: Power4.easeOut,
                        delay: 1,
                    })
                }
            }

            class Obj{
                constructor(webgl){
                    this.webgl = webgl;
                    this.init();
                }
                
                paramFunc(a, b, target){
                    var x = 0
                    var y = 0
                    var z = 0
                    target.set(0,1,0)
                    return new THREE.Vector3(0, 0, 0);
                }
                
                init(){
                    var g = new THREE.ParametricBufferGeometry(this.paramFunc, 100, 100);
                    var txt = new THREE.TextureLoader().load(texture);
                    txt.wrapS = THREE.MirroredRepeatWrapping;
                    txt.wrapT = THREE.MirroredRepeatWrapping;
                    
                    this.uniforms = {
                        uTick: {type: "f", value: 0},
                        txt: {type: "t", value: txt},
                        progress: { type: "f", value: 0}
                    }

                    var m = new THREE.ShaderMaterial({
                        vertexShader: this.webgl.vertShader,
                        fragmentShader: this.webgl.fragShader,
                        uniforms: this.uniforms,
                        side: THREE.DoubleSide,
                        //flatShading: true,
                        //wireframe: true
                    });

                    this.mesh = new THREE.Mesh(g, m);
                    this.webgl.scene.add(this.mesh);
                }
            }

            window.onload = () => {
                var webgl = new Webgl();
                window.onresize = () => {
                    webgl.resize();
                }
            }
        },
    },
    mounted() {
        //this.createLoader()
    }
}
</script>

<style scoped>
    .loading-text {
        position: absolute;
        bottom: 10%;
        font-size: 1rem;
        left:50%;
        transform: translate(-50%, -50%);
        font-weight: lighter;
        color: black;
        font-family: 'DM Mono', monospace;
    }

    .loading-para {
        font-size:  14px;
        font-weight: lighter;
        left:50%;
        top: 48%;
        transform: translate(-50%, -50%);
        position: absolute;
        font-weight: lighter;
        letter-spacing: 0.5px;
        width: 80%;
        color: black;
    }

    .loading-text span {
        color: black;
    }

    .arrow-wrapper {
        display: inline-block;
        text-align: center;
        position: fixed;
        border-right: 1px solid grey;
        height: 3.5rem;
    }

    .top {
        top: 0;
    }

    .bottom {
        bottom: 0;
    }

    .scene {
        position: absolute;
        left:50%;
        top: 48%;
        transform: translate(-50%, -50%);
    }
</style>