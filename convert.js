const {readFileSync, writeFileSync} = require('fs');

writeFileSync(
    './README.md',
    readFileSync('./README.md').toString().replace(/\.\/tests\/([^)\]]+)/g, (sub) => {
        sub = sub.slice(2, Infinity);
        if(sub.slice(-3) === 'png') return `https://raw.githubusercontent.com/matmen/ImageScript/master/${sub}`;
        return `https://github.com/matmen/ImageScript/blob/master/${sub}`;
    })
);
