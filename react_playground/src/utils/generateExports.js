const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components', 'base');
const outputFilePath = path.join(__dirname, 'src', 'index.js');

fs.readdir(componentsDir, (err, files) => {
  if (err) {
    console.error('Error reading components directory:', err);
    return;
  }

  const exportStatements = files
    .filter((file) => file.endsWith('.js') || file.endsWith('.jsx'))
    .map((file) => {
      const componentName = path.basename(file, path.extname(file));
      return `export { default as ${componentName} } from 'components/base/${componentName}';`;
    });

  const outputContent = `// 自动生成的导出文件\n${exportStatements.join('\n')}\n`;

  fs.writeFile(outputFilePath, outputContent, (err) => {
    if (err) {
      console.error('Error writing export file:', err);
    } else {
      console.log('Export file generated successfully.');
    }
  });
});
