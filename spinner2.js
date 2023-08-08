const characters = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let i = 0; i < characters.length; i++) {
  setTimeout(() => {
    process.stdout.write(characters[i] + '\r');
    if (i === characters.length - 1) {
      process.stdout.write('\n');
    }
  }, 100 * i);
}





