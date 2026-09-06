import fs from 'fs';
import path from 'path';
import https from 'https';

const ytmap = {
  'CassandraHsiao': 'https://yt3.googleusercontent.com/4Bx-f-UG6lhpRNIDu7QOgm-FSX5Leg9k5BsPjo1_FpEav6YpqGGF19bxjWqzZDthxmtXLS7kMw=s900-c-k-c0x00ffffff-no-rj',
  'Collegeessayguy': 'https://yt3.googleusercontent.com/ytc/AIdro_kv1FyUhfc-cODr8nL4gnD0tnCGFHdyN6TO5B542-wd4Q=s900-c-k-c0x00ffffff-no-rj',
  'PratikVangal': 'https://yt3.googleusercontent.com/CQBGcY74pMqc-_mq9axwkglsK8ABqDG6LrsQ_YYZbLDEEVKL3iPZ5ndndPtbZb0CHJwQvHMTbA=s900-c-k-c0x00ffffff-no-rj',
  'elevatedschool': 'https://yt3.googleusercontent.com/aysXaq51xxp5cPCqvAY6s4db8s53IUhFiOky9LNF9vr13l2dueuCIFUyrevYH-VM9SSGpHGS=s900-c-k-c0x00ffffff-no-rj',
  'ivy_roadmap': 'https://yt3.googleusercontent.com/yapVkR3KVbNP-CGBymmGxmZNppP8ll7TVlCR7dlXTplOJfZJlLkGSvb6BRWq0wtz-Sew7RGTKA=s900-c-k-c0x00ffffff-no-rj'
};

const telegrams = [
  'BobirjonsThoughts',
  'asadbek_closer',
  'opportunity_alerts',
  'kb_opportunity_hub',
  'edugrandsuz',
  'Elpizo224',
  'ctpsummer'
];

const dir = path.join(process.cwd(), 'public', 'mentors');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function download(url, dest) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(true); });
      } else if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (res2) => {
          if (res2.statusCode === 200) {
             const file = fs.createWriteStream(dest);
             res2.pipe(file);
             file.on('finish', () => { file.close(); resolve(true); });
          } else {
             resolve(false);
          }
        });
      } else {
        resolve(false);
      }
    }).on('error', () => resolve(false));
  });
}

async function main() {
  for (const [name, url] of Object.entries(ytmap)) {
    const dest = path.join(dir, `youtube_${name}.jpg`);
    await download(url, dest);
    console.log(`Downloaded ${name}`);
  }
  for (const name of telegrams) {
    const dest = path.join(dir, `telegram_${name}.jpg`);
    await download(`https://t.me/i/userpic/320/${name}.jpg`, dest);
    console.log(`Downloaded ${name}`);
  }
}
main();
