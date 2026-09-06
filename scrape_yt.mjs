import fs from 'fs';
import https from 'https';

const ytUsers = [
  "CassandraHsiao",
  "Collegeessayguy",
  "PratikVangal",
  "elevatedschool",
  "ivy_roadmap"
];

async function getYT(username) {
  return new Promise((resolve) => {
    https.get(`https://www.youtube.com/@${username}`, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        const match = data.match(/<meta property="og:image" content="([^"]+)"/);
        resolve(match ? match[1] : null);
      });
    }).on('error', () => resolve(null));
  });
}

async function main() {
  for (const u of ytUsers) {
    const url = await getYT(u);
    console.log(`"${u}": "${url}",`);
  }
}
main();
