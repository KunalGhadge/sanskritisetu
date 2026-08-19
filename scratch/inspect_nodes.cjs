const fs = require('fs');

const data = fs.readFileSync('public/ar/asset.glb');
const chunk0Length = data.readUInt32LE(12);
const jsonBuffer = data.subarray(20, 20 + chunk0Length);
const gltf = JSON.parse(jsonBuffer.toString('utf8'));

console.log('Nodes:', JSON.stringify(gltf.nodes, null, 2));
