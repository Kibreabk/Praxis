import https from 'https';

https.get('https://www.youtube.com/@CassandraHsiao', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<meta property="og:image" content="([^"]+)"/);
    console.log(match ? match[1] : 'Not found');
  });
});
