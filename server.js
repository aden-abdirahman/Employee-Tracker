const prompts = require('./prompts');

const intro = () => {
  console.log(`WELCOME TO THE EMPLOYEE TRACKER CLI
   -----------------------------------`);
};

const init = () => {
  intro();
  prompts();
};

init();