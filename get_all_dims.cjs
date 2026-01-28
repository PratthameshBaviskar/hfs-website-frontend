const fs = require('fs');

function getDims(imgPath) {
    try {
        const buffer = fs.readFileSync(imgPath);
        let offset = 2;
        while (offset < buffer.length) {
            if (buffer[offset] !== 0xFF) break;
            const marker = buffer[offset + 1];
            if (marker >= 0xC0 && marker <= 0xC3) {
                const height = buffer.readUInt16BE(offset + 5);
                const width = buffer.readUInt16BE(offset + 7);
                return `${width}x${height}`;
            }
            offset += 2 + buffer.readUInt16BE(offset + 2);
        }
        return 'not found';
    } catch (e) { return 'error'; }
}

console.log('Top20:', getDims('d:/dev/hfs-website-frontend/src/assets/images/top20-achievement.jfif'));
console.log('Excellence:', getDims('d:/dev/hfs-website-frontend/src/assets/images/kalyanipathakmam-achievement.jpg'));
console.log('AsiaOne:', getDims('d:/dev/hfs-website-frontend/src/assets/images/asiaonegreatestbrand_achievement.jpg'));
