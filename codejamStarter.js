const processStack = (s, k) => {
  console.log('s', s);
  console.log('k', k);
  // write your code here or above
}


function main() {

  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
  })
  let readState = 'T';
  let t = 0;
  let currentT = 0;

  const parseLine = (line) => {
    switch(readState) {
      case 'T':
        readState = 'case';
        t = parseInt(line);
        break;
      case 'case':
        currentT += 1;
        if (currentT == t){
          readState = 'Done'
        }
        let s = 0
        let k = 0
        const values = line.split(' ');
        s = values[0];
        k = parseInt(values[1]);
        processStack(s, k);
    }
  }

  rl.on('line', (line) => {
    parseLine(line);
  }).on('close', () => console.log('file done'))
}

main();