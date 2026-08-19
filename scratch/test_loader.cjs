const fs = require('fs');
const { JSDOM } = require('jsdom');

// Provide basic DOM mock for Three.js GLTFLoader if needed
const dom = new JSDOM();
global.window = dom.window;
global.document = dom.window.document;
global.self = global;

console.log('Testing Three.js loader...');
