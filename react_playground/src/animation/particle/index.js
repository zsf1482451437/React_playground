// 导入THREE.js库
import * as THREE from 'three';

let animationId; // 用于存储动画帧请求的ID

// 初始化场景和相机
function initSceneAndCamera() {
  const scene = new THREE.Scene(); // 创建一个新场景
  const camera = new THREE.PerspectiveCamera(
    75, // 视野角度
    window.innerWidth / window.innerHeight, // 宽高比
    0.1, // 近裁剪面
    1000 // 远裁剪面
  );
  camera.position.z = 30; // 设置相机位置
  return { scene, camera }; // 返回场景和相机对象
}

// 初始化渲染器
function initRenderer() {
  const container = document.getElementById('particle'); // 获取ID为particle的元素
  const renderer = new THREE.WebGLRenderer(); // 创建WebGL渲染器
  renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器大小
  renderer.setClearColor(0xffffff, 0);
  // 获取ID为particle的元素
  if (container) {
    container.appendChild(renderer.domElement); // 将渲染器的DOM元素添加到该元素中
  } else {
    console.error('Element with ID "particle" not found.');
  }
  return renderer; // 返回渲染器对象
}

// 添加光照
function addLighting(scene) {
  const ambientLight = new THREE.AmbientLight(0x555555); // 创建环境光源
  scene.add(ambientLight); // 将环境光源添加到场景中

  const light = new THREE.PointLight(0x00ffff, 1, 100); // 创建点光源
  light.position.set(0, 0, 25); // 设置光源位置
  scene.add(light); // 将点光源添加到场景中
}

// 创建莲花形状的粒子系统
function createLotusFlowerParticles(scene, { color, size, particleCount }) {
  const particleMaterial = new THREE.PointsMaterial({
    color,
    size,
    transparent: true,
    opacity: 0.8,
  });

  const particlesGeometry = new THREE.BufferGeometry();
  const vertices = [];

  // 莲花形状的参数方程和粒子生成逻辑
  for (let i = 0; i < particleCount; i++) {
    // 假设莲花形状可以通过特定的数学模型来近似
    // 这里使用简化的模型，实际模型可能需要复杂的数学计算
    const theta = Math.random() * Math.PI * 2; // 随机角度
    const phi = Math.acos(Math.random() * 2 - 1); // 随机仰角
    const r = 5 * (1 + Math.sin(6 * theta)); // 莲花瓣的半径模型，示例中使用简化的公式

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    vertices.push(x, y, z);
  }

  particlesGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  const particleSystem = new THREE.Points(particlesGeometry, particleMaterial);
  scene.add(particleSystem);
  return particleSystem;
}

// 动画循环
function animate(renderer, scene, camera, particleSystem, rotationSpeed) {
  function loop() {
    animationId = requestAnimationFrame(loop); // 请求下一帧动画
    particleSystem.rotation.y += rotationSpeed; // 旋转粒子系统

    // 动态调整粒子颜色
    const time = Date.now() * 0.0005;
    particleSystem.material.color.setHSL(Math.sin(time * 0.7), 1, 0.5);

    renderer.render(scene, camera); // 渲染场景
  }
  loop(); // 开始动画循环
}

// 创建火焰效果
function createFireEffect({
  color = new THREE.Color(0x0077ff), // 默认颜色
  size = 0.5, // 默认大小
  particleCount = 500, // 默认粒子数量
  rotationSpeed = 0.01, // 默认旋转速度
} = {}) {
  const container = document.getElementById('particle'); // 获取ID为particle的元素
  const { scene, camera } = initSceneAndCamera(); // 初始化场景和相机
  const renderer = initRenderer(); // 初始化渲染器
  addLighting(scene); // 添加光照
  const particleSystem = createLotusFlowerParticles(scene, {
    color,
    size,
    particleCount,
  }); // 创建粒子系统
  animate(renderer, scene, camera, particleSystem, rotationSpeed); // 开始动画循环

  // 返回一个关闭函数
  return function stopAnimation() {
    cancelAnimationFrame(animationId); // 取消动画帧请求
    if (container && renderer.domElement.parentNode === container) {
      container.removeChild(renderer.domElement); // 从正确的父元素中移除渲染器的DOM元素
    }
    renderer.dispose(); // 释放渲染器资源
    scene.clear(); // 清理场景
  };
}

// 导出createFireEffect函数
export default createFireEffect;
