const fs = require('fs');

const data = fs.readFileSync('public/ar/asset.glb');
const magic = data.readUInt32LE(0);
const version = data.readUInt32LE(4);
const length = data.readUInt32LE(8);
const chunk0Length = data.readUInt32LE(12);
const chunk0Type = data.readUInt32LE(16);

const jsonBuffer = data.subarray(20, 20 + chunk0Length);
const gltf = JSON.parse(jsonBuffer.toString('utf8'));

console.log('GLTF JSON parsed successfully');
console.log('Meshes count:', gltf.meshes ? gltf.meshes.length : 0);
console.log('Nodes count:', gltf.nodes ? gltf.nodes.length : 0);

if (gltf.accessors) {
  const posAccessors = gltf.accessors.filter(a => a.type === 'VEC3' && a.min && a.max);
  console.log('Position accessors count:', posAccessors.length);
  if (posAccessors.length > 0) {
    const mins = posAccessors.map(a => a.min);
    const maxs = posAccessors.map(a => a.max);
    console.log('Sample Accessor Min:', mins[0]);
    console.log('Sample Accessor Max:', maxs[0]);
  }
}
