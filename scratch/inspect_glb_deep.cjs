const fs = require('fs');

const data = fs.readFileSync('public/ar/asset.glb');
const chunk0Length = data.readUInt32LE(12);
const jsonBuffer = data.subarray(20, 20 + chunk0Length);
const gltf = JSON.parse(jsonBuffer.toString('utf8'));

console.log('Extensions used:', gltf.extensionsUsed);
console.log('Extensions required:', gltf.extensionsRequired);
console.log('Animations count:', gltf.animations ? gltf.animations.length : 0);
console.log('Materials count:', gltf.materials ? gltf.materials.length : 0);
if (gltf.materials) {
  console.log('Sample Material:', JSON.stringify(gltf.materials[0], null, 2));
}
if (gltf.nodes) {
  console.log('Root nodes:', gltf.scenes ? gltf.scenes[0] : gltf.nodes);
}
