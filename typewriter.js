const string = 'Good morning from Mardin!\n';

const sentence = function(str) {
  let timeDelay = 100;
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timeDelay += 150);
  }
};

sentence(string);