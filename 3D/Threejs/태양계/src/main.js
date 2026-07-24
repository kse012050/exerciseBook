import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import "./style.css";

const canvas = document.querySelector("#space-canvas");
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x030711);
scene.fog = new THREE.FogExp2(0x030711, 0.0015);

const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 2000);
camera.position.set(26, 42, 106);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.055;
controls.minDistance = 13;
controls.maxDistance = 270;
controls.target.set(20, 0, 0);
controls.screenSpacePanning = true;
controls.zoomToCursor = true;

const bodies = [
  { name: "태양", en: "SUN", type: "STAR", color: "#ffb45c", radius: 5.8, distance: 0, speed: 0, rotation: .05, distanceText: "—", period: "25.4 일 (자전)", moons: "8개 행성", desc: "태양계 질량의 99.86%를 품은 우리의 별입니다." },
  { name: "수성", en: "MERCURY", type: "TERRESTRIAL PLANET", color: "#aaa59d", radius: .72, distance: 10, speed: 1.6, rotation: .025, distanceText: "57.9M km", period: "88.0 일", moons: "0", desc: "태양과 가장 가깝고 가장 빠르게 공전하는 작은 암석 행성입니다." },
  { name: "금성", en: "VENUS", type: "TERRESTRIAL PLANET", color: "#d6a45f", radius: 1.25, distance: 14.2, speed: 1.18, rotation: -.006, distanceText: "108.2M km", period: "224.7 일", moons: "0", desc: "두꺼운 구름과 뜨거운 대기로 뒤덮인 지구의 이웃입니다." },
  { name: "지구", en: "EARTH", type: "TERRESTRIAL PLANET", color: "#4f8fc5", radius: 1.32, distance: 19, speed: 1, rotation: .12, distanceText: "149.6M km", period: "365.3 일", moons: "1", desc: "물이 흐르고 생명이 숨 쉬는 우리의 푸른 행성입니다." },
  { name: "화성", en: "MARS", type: "TERRESTRIAL PLANET", color: "#b55c3e", radius: .93, distance: 24.5, speed: .8, rotation: .115, distanceText: "227.9M km", period: "687.0 일", moons: "2", desc: "산화철 먼지가 표면을 붉게 물들인 차가운 사막 행성입니다." },
  { name: "목성", en: "JUPITER", type: "GAS GIANT", color: "#c49570", radius: 3.55, distance: 34.5, speed: .44, rotation: .25, distanceText: "778.5M km", period: "11.9 년", moons: "95", desc: "거대한 폭풍과 강력한 자기장을 지닌 태양계 최대 행성입니다." },
  { name: "토성", en: "SATURN", type: "GAS GIANT", color: "#d8bd80", radius: 3.08, distance: 46, speed: .32, rotation: .22, distanceText: "1.43B km", period: "29.5 년", moons: "146", desc: "얼음과 암석 조각으로 이루어진 장엄한 고리를 지닌 행성입니다.", ring: true },
  { name: "천왕성", en: "URANUS", type: "ICE GIANT", color: "#85c8ce", radius: 2.05, distance: 57, speed: .23, rotation: -.15, distanceText: "2.87B km", period: "84.0 년", moons: "28", desc: "옆으로 누운 자전축을 따라 구르는 듯 공전하는 얼음 행성입니다.", ring: "subtle" },
  { name: "해왕성", en: "NEPTUNE", type: "ICE GIANT", color: "#4169a7", radius: 1.98, distance: 67, speed: .18, rotation: .16, distanceText: "4.50B km", period: "164.8 년", moons: "16", desc: "초음속 바람이 휘몰아치는 태양계 가장 바깥의 푸른 행성입니다." }
];

function rand(seed) {
  const x = Math.sin(seed * 999.91) * 43758.5453;
  return x - Math.floor(x);
}

function planetTexture(body, index) {
  const size = 1024;
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size / 2;
  const ctx = c.getContext("2d");
  const base = new THREE.Color(body.color);
  const grad = ctx.createLinearGradient(0, 0, 0, c.height);
  grad.addColorStop(0, base.clone().offsetHSL(0, -.05, .12).getStyle());
  grad.addColorStop(.5, base.getStyle());
  grad.addColorStop(1, base.clone().offsetHSL(0, .03, -.13).getStyle());
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, c.width, c.height);

  if (body.en === "EARTH") {
    ctx.fillStyle = "#326fb4";
    ctx.fillRect(0, 0, c.width, c.height);
    const lands = [[160,165,130,75],[270,235,90,130],[495,130,165,80],[620,220,85,115],[770,170,140,70],[875,310,95,50]];
    lands.forEach(([x,y,w,h], i) => {
      ctx.fillStyle = i % 2 ? "#64895a" : "#52764b";
      ctx.beginPath();
      ctx.ellipse(x, y, w, h, rand(i + 4), 0, Math.PI * 2);
      ctx.fill();
    });
    for (let i = 0; i < 28; i++) {
      ctx.strokeStyle = `rgba(255,255,255,${.15 + rand(i) * .2})`;
      ctx.lineWidth = 2 + rand(i + 1) * 6;
      ctx.beginPath();
      const y = rand(i + 2) * c.height;
      ctx.moveTo(rand(i + 3) * c.width, y);
      ctx.bezierCurveTo(300, y - 40, 700, y + 50, rand(i + 9) * c.width, y + 10);
      ctx.stroke();
    }
  } else if (["JUPITER", "SATURN", "URANUS", "NEPTUNE"].includes(body.en)) {
    for (let y = 0; y < c.height; y += 10) {
      const light = (rand(y + index) - .5) * (body.en === "JUPITER" ? .24 : .1);
      ctx.fillStyle = base.clone().offsetHSL(0, .02, light).getStyle();
      ctx.fillRect(0, y, c.width, 7 + rand(y) * 12);
    }
    if (body.en === "JUPITER") {
      ctx.fillStyle = "rgba(136,55,38,.65)";
      ctx.beginPath();
      ctx.ellipse(720, 325, 83, 29, -.1, 0, Math.PI * 2);
      ctx.fill();
    }
  } else {
    for (let i = 0; i < 420; i++) {
      const alpha = .04 + rand(i + index) * .13;
      const shade = rand(i * 2 + index) > .5 ? 255 : 15;
      ctx.fillStyle = `rgba(${shade},${shade},${shade},${alpha})`;
      ctx.beginPath();
      ctx.arc(rand(i + 8) * c.width, rand(i + 31) * c.height, 1 + rand(i + 14) * 8, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return tex;
}

function createOrbit(radius) {
  const points = [];
  for (let i = 0; i <= 180; i++) {
    const a = (i / 180) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
  }
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  return new THREE.LineLoop(geo, new THREE.LineBasicMaterial({ color: 0x637087, transparent: true, opacity: .2 }));
}

const system = new THREE.Group();
system.rotation.x = THREE.MathUtils.degToRad(-5);
scene.add(system);

const ambient = new THREE.AmbientLight(0x8194b1, .17);
scene.add(ambient);
const sunLight = new THREE.PointLight(0xffe0b0, 820, 230, 1.7);
scene.add(sunLight);

const objects = [];
const selectable = [];

bodies.forEach((body, index) => {
  if (body.distance) system.add(createOrbit(body.distance));

  const pivot = new THREE.Group();
  pivot.rotation.y = index * .83;
  system.add(pivot);

  const geometry = new THREE.SphereGeometry(body.radius, index === 0 ? 96 : 64, index === 0 ? 64 : 40);
  let material;
  if (index === 0) {
    material = new THREE.MeshBasicMaterial({ map: planetTexture(body, index), color: 0xffbb67 });
  } else {
    material = new THREE.MeshStandardMaterial({
      map: planetTexture(body, index),
      roughness: body.en === "EARTH" ? .72 : .9,
      metalness: 0,
      bumpMap: planetTexture(body, index + 80),
      bumpScale: .025
    });
  }
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = body.distance;
  mesh.rotation.z = body.en === "URANUS" ? Math.PI / 2 : THREE.MathUtils.degToRad(index % 2 ? 4 : -3);
  mesh.userData.index = index;
  pivot.add(mesh);
  selectable.push(mesh);

  if (index === 0) {
    const glowMat = new THREE.SpriteMaterial({
      map: createGlowTexture(),
      color: 0xff9d42,
      transparent: true,
      opacity: .68,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const glow = new THREE.Sprite(glowMat);
    glow.scale.set(19, 19, 1);
    mesh.add(glow);
  }

  if (body.ring) {
    const ringGeo = new THREE.RingGeometry(body.radius * 1.35, body.radius * (body.ring === "subtle" ? 1.75 : 2.18), 128);
    const ringMat = new THREE.MeshStandardMaterial({
      map: createRingTexture(body.ring === "subtle"),
      color: body.ring === "subtle" ? 0x91b6b4 : 0xc7ae7a,
      transparent: true,
      opacity: body.ring === "subtle" ? .34 : .78,
      roughness: .95,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    mesh.add(ring);
  }

  let moonPivot = null;
  if (body.en === "EARTH") {
    moonPivot = new THREE.Group();
    // 달의 공전축은 지구 표면의 자전과 분리하고, 지구 중심만 따라가게 한다.
    moonPivot.position.copy(mesh.position);
    pivot.add(moonPivot);
    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(.36, 32, 20),
      new THREE.MeshStandardMaterial({ map: planetTexture({ color: "#aaa9a3", en: "MOON" }, 42), roughness: 1 })
    );
    moon.position.set(2.45, 0, 0);
    moon.userData.index = index;
    moonPivot.add(moon);
    const moonOrbit = createOrbit(2.45);
    moonOrbit.material.opacity = .24;
    moonPivot.add(moonOrbit);
    selectable.push(moon);
  }

  objects.push({ body, pivot, mesh, moonPivot });
});

function createGlowTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const ctx = c.getContext("2d");
  const g = ctx.createRadialGradient(128,128,5,128,128,128);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(.18, "rgba(255,190,100,.8)");
  g.addColorStop(.55, "rgba(255,115,30,.25)");
  g.addColorStop(1, "rgba(255,90,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0,0,256,256);
  return new THREE.CanvasTexture(c);
}

function createRingTexture(subtle) {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 8;
  const ctx = c.getContext("2d");
  const g = ctx.createLinearGradient(0, 0, 512, 0);
  const colors = subtle
    ? ["rgba(100,150,150,0)", "rgba(145,190,190,.6)", "rgba(110,160,160,.15)", "rgba(140,180,180,0)"]
    : ["rgba(80,60,42,0)", "rgba(218,195,145,.3)", "rgba(235,215,165,.9)", "rgba(160,130,91,.35)", "rgba(206,184,135,.7)", "rgba(90,70,50,0)"];
  colors.forEach((color, i) => g.addColorStop(i / (colors.length - 1), color));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 512, 8);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  return tex;
}

function addStars() {
  const count = 7000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const radius = 150 + Math.random() * 650;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.cos(phi);
    positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    const warmth = Math.random();
    colors[i * 3] = .65 + warmth * .35;
    colors[i * 3 + 1] = .72 + warmth * .18;
    colors[i * 3 + 2] = .86 + Math.random() * .14;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const stars = new THREE.Points(geo, new THREE.PointsMaterial({
    size: .55, vertexColors: true, transparent: true, opacity: .86, sizeAttenuation: true
  }));
  scene.add(stars);
}
addStars();

const planetList = document.querySelector("#planet-list");
bodies.forEach((body, index) => {
  const button = document.createElement("button");
  button.className = `planet-button${index === 3 ? " active" : ""}`;
  button.type = "button";
  button.dataset.index = index;
  button.innerHTML = `<span class="planet-dot" style="--dot-color:${body.color};--dot-size:${Math.min(15, 7 + body.radius * 1.3)}px"></span><strong>${body.name}</strong><small>${body.en}</small>`;
  button.addEventListener("click", () => focusBody(index));
  planetList.appendChild(button);
});

let selectedIndex = 3;
let focusTarget = null;
let focusPosition = null;
let isPlaying = true;
let timeScale = 1;

function focusBody(index) {
  selectedIndex = index;
  document.querySelectorAll(".planet-button").forEach((el, i) => el.classList.toggle("active", i === index));
  const { body, mesh } = objects[index];
  const world = new THREE.Vector3();
  mesh.getWorldPosition(world);
  const direction = new THREE.Vector3(1, .62, 1).normalize();
  const viewingDistance = Math.max(body.radius * 6.2, index === 0 ? 34 : 12);
  focusTarget = world;
  focusPosition = world.clone().add(direction.multiplyScalar(viewingDistance));
  updateDetails(body, index);
}

function updateDetails(body, index) {
  const el = document.querySelector("#details");
  el.classList.remove("visible");
  setTimeout(() => {
    document.querySelector("#detail-index").textContent = String(index).padStart(2, "0");
    document.querySelector("#detail-type").textContent = body.type;
    document.querySelector("#detail-name").innerHTML = `${body.name} <small>${body.en}</small>`;
    document.querySelector("#detail-description").textContent = body.desc;
    document.querySelector("#detail-distance").textContent = body.distanceText;
    document.querySelector("#detail-period").textContent = body.period;
    document.querySelector("#detail-moons").textContent = body.moons;
    el.classList.add("visible");
  }, 160);
}
updateDetails(bodies[3], 3);

document.querySelector("#toggle-play").addEventListener("click", (event) => {
  isPlaying = !isPlaying;
  event.currentTarget.classList.toggle("paused", !isPlaying);
  event.currentTarget.title = isPlaying ? "일시 정지" : "재생";
  event.currentTarget.setAttribute("aria-label", event.currentTarget.title);
});

document.querySelector("#reset-view").addEventListener("click", () => {
  selectedIndex = -1;
  document.querySelectorAll(".planet-button").forEach(el => el.classList.remove("active"));
  focusTarget = new THREE.Vector3(18, 0, 0);
  focusPosition = new THREE.Vector3(26, 42, 106);
  document.querySelector("#details").classList.remove("visible");
});

const speedInput = document.querySelector("#speed");
speedInput.addEventListener("input", () => {
  timeScale = Number(speedInput.value);
  document.querySelector("#speed-output").textContent = `${timeScale.toFixed(1)}×`;
});

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
renderer.domElement.addEventListener("dblclick", (event) => {
  pointer.x = (event.clientX / innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hit = raycaster.intersectObjects(selectable, false)[0];
  if (hit) focusBody(hit.object.userData.index);
});

renderer.domElement.addEventListener("pointerdown", () => {
  focusTarget = null;
  focusPosition = null;
});

const clock = new THREE.Clock();
let elapsed = 0;

function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), .05);
  if (isPlaying) {
    elapsed += delta * timeScale;
    objects.forEach(({ body, pivot, mesh, moonPivot }, index) => {
      mesh.rotation.y += body.rotation * delta * 5;
      if (index > 0) pivot.rotation.y += body.speed * delta * .12;
      if (moonPivot) moonPivot.rotation.y += delta * 1.45 * timeScale;
    });
  }

  if (focusTarget && focusPosition) {
    controls.target.lerp(focusTarget, .055);
    camera.position.lerp(focusPosition, .045);
    if (camera.position.distanceTo(focusPosition) < .08) {
      focusTarget = null;
      focusPosition = null;
    }
  }

  sunLight.intensity = 800 + Math.sin(elapsed * 2.3) * 28;
  controls.update();
  renderer.render(scene, camera);
}
animate();

addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
});

setTimeout(() => document.querySelector("#loading").classList.add("hidden"), 650);
