var reg = /\d/g;

var input = 'swsw832782jujnsu3hye32ey723e23';

var arr;

// reg.exec(input)

while ((arr = reg.exec(input)) != null) {
  console.log(arr[0])
}