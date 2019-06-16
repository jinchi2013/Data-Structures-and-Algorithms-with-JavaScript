const Stack = require('./Stack')

function decimalToBinary (decNum) {
  const remStack = Stack()
  let number = decNum
  let rem
  let binaryString = ''

  while (number > 0) {
    rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }

  while (!remStack.isEmpty()) {
    binaryString += String(remStack.pop())
  }

  return binaryString
}

console.log(decimalToBinary(233))

function baseConverter (decNum, base) {
  const remStack = Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  /*
    For the usage of the digits above
    in the conversion from decimal to octagonal,
    the remainders will be from 0 to 8;
    and in the conversion from decimal to hexadecimal,
    the remainders can be 0 to 9 plus the letters A to F (values 10 to 15).
    For this reason, we need to convert these values as well (lines {6} and {7}).
    So, starting at base 11, each letter of the alphabet will represent its base.
    The letter A represents base 11, B represents base 12, and so on.
  * */
  let number = decNum
  let rem
  let baseString = ''

  if (!(base >= 2 && base <= 36)) {
    return new Error(`${base} is out of range`)
  }

  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }

  return baseString
}

console.log(baseConverter(100345, 2)); // 11000011111111001
console.log(baseConverter(100345, 8)); // 303771
console.log(baseConverter(100345, 16)); // 187F9
console.log(baseConverter(100345, 35)); // 2BW0
