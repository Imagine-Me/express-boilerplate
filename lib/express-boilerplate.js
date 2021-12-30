const { exec } = require('child_process');

const args = process.argv.slice(2);
const appName = args[0];

const templateIndex = args.indexOf('--template');
if (templateIndex === -1) {
  console.error('Template required');
  return;
}
const template = args[templateIndex + 1];
if (template !== 'basic' && template !== 'postgres') {
  console.error('Template is incorrect\n Allowed are:\n1. basic\n2. postgres');
  return;
}

if (template === 'basic') {
  console.log(
    '\x1b[36m%s\x1b[0m',
    'Creating project with template',
    '\x1b[32m',
    'Basic'
  );
  exec(
    `git clone --single-branch --branch basic https://github.com/Imagine-Me/express-boilerplate.git ${appName}`,
    (error, stdout, stderr) => {
      if (error !== null) {
        console.log(`exec error: ${error}`);
      } else {
        console.log(stdout);
      }
    }
  );
  console.log('\x1b[34m', 'Clearing files...');
  exec(`cd ${appName}`, (error, stdout, stderr) => {
    if (error !== null) {
      console.log(`exec error: ${error}`);
    } else {
      console.log(stdout);
    }
  });
  exec(`rm -rf .git`, (error, stdout, stderr) => {
    if (error !== null) {
      console.log(`exec error: ${error}`);
    } else {
      console.log(stdout);
    }
  });
}
