import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src/data/fullRide.ts');
let content = fs.readFileSync(file, 'utf-8');

content = content.replace(
  "gender: 'Co-ed' | 'Women';",
  "gender: 'Co-ed' | 'Women';\n  category: 'US National Universities' | 'US Liberal Arts Colleges' | 'Special Cases' | 'International';"
);

let currentCat = 'US National Universities';
const lines = content.split('\n');
const newLines = lines.map(line => {
  if (line.includes('// US National Universities')) currentCat = 'US National Universities';
  else if (line.includes('// US Liberal Arts Colleges')) currentCat = 'US Liberal Arts Colleges';
  else if (line.includes('// Special Cases')) currentCat = 'Special Cases';
  else if (line.includes('// International')) currentCat = 'International';

  if (line.trim().startsWith('{ id:') && !line.includes('category:')) {
    return line.replace(', gender:', `, category: "${currentCat}", gender:`);
  }
  return line;
});

fs.writeFileSync(file, newLines.join('\n'));
