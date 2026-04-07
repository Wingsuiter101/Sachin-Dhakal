const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const replacements = [
  { regex: /rounded-full/g, replacement: 'rounded-none' },
  { regex: /rounded-2xl/g, replacement: 'rounded-none' },
  { regex: /rounded-xl/g, replacement: 'rounded-none' },
  { regex: /rounded-lg/g, replacement: 'rounded-none' },
  { regex: /rounded-md/g, replacement: 'rounded-none' },
  { regex: /rounded-sm/g, replacement: 'rounded-none' },
  { regex: /shadow-[a-z0-9\/]+/g, replacement: '' },
  { regex: /shadow/g, replacement: '' }, // standalone shadow
  { regex: /bg-white\/5 border border-white\/10/g, replacement: 'border border-white/20 bg-transparent hover:bg-white/5' },
  { regex: /border-zinc-100/g, replacement: 'border-transparent' },
  { regex: /bg-zinc-50/g, replacement: 'bg-[#f7f7f7]' },
  { regex: /bg-white p-6 rounded-none border-transparent hover: transition-/g, replacement: 'bg-white p-8 border-l-4 border-accent-gold transition-colors hover:bg-gray-50' } // for news cards
];

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    replacements.forEach(({ regex, replacement }) => {
      content = content.replace(regex, replacement);
    });

    // Specific cleans
    content = content.replace(/shadow\s/g, ''); 
    content = content.replace(/shadow"/g, '"');
    
    fs.writeFileSync(filePath, content);
  }
});
