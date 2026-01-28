const fs = require('fs');
const imgPath = 'd:/dev/hfs-website-frontend/src/assets/images/top20-achievement.jfif';

try {
    const buffer = fs.readFileSync(imgPath);
    // JPEG SOF0 marker is 0xFFC0 (or C1, C2 etc.)
    // We can search for 0xFFC0 and read height/width
    let offset = 2;
    while (offset < buffer.length) {
        if (buffer[offset] !== 0xFF) break;
        const marker = buffer[offset + 1];
        if (marker >= 0xC0 && marker <= 0xC3) {
            const height = buffer.readUInt16BE(offset + 5);
            const width = buffer.readUInt16BE(offset + 7);
            console.log(`Dimensions: ${width}x${height}`);
            process.exit(0);
        }
        offset += 2 + buffer.readUInt16BE(offset + 2);
    }
    console.log('SOF marker not found');
} catch (e) {
    console.error(e);
}
