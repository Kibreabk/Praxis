import fs from 'fs';
import path from 'path';
import https from 'https';

const unavatars = [
  "borderless.so",
  "snow.day",
  "collegeessayguy.com",
  "edugrants.uz",
  "lumiere-education.com",
  "telegram/opportunity_alerts",
  "youtube/CassandraHsiao",
  "youtube/Collegeessayguy",
  "youtube/PratikVangal",
  "youtube/elevatedschool",
  "youtube/ivy_roadmap",
  "instagram/ivy_roadmap",
  "instagram/tineocollegeprep",
  "instagram/rakhimoff_amir",
  "instagram/limmytalks",
  "instagram/lumiere_edu",
  "instagram/snowday_edu",
  "telegram/BobirjonsThoughts",
  "telegram/asadbek_closer",
  "telegram/opportunity_alerts",
  "telegram/kb_opportunity_hub",
  "telegram/edugrandsuz",
  "telegram/Elpizo224",
  "telegram/ctpsummer",
  "desmos.com"
];

const dir = path.join(process.cwd(), 'public', 'mentors');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function download(unavatarPath) {
  const safeName = unavatarPath.replace(/\//g, '_');
  const dest = path.join(dir, `${safeName}.jpg`);
  
  if (fs.existsSync(dest)) {
    console.log(`Already have ${safeName}`);
    return;
  }

  return new Promise((resolve, reject) => {
    https.get(`https://unavatar.io/${unavatarPath}`, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        // Handle redirect
        https.get(response.headers.location, (res2) => {
          const file = fs.createWriteStream(dest);
          res2.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        });
      } else if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      } else {
        console.error(`Failed ${unavatarPath}: ${response.statusCode}`);
        resolve(); // resolve anyway so we don't crash
      }
    }).on('error', (err) => {
      console.error(err);
      resolve();
    });
  });
}

async function main() {
  for (const u of unavatars) {
    console.log(`Downloading ${u}...`);
    await download(u);
    await new Promise(r => setTimeout(r, 1000)); // 1 second delay
  }
}
main();
