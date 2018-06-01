var generatePassword = function generatePassword(length, charset) {
  var length = length || 8,
    charset = charset || 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    password = '';
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n))
  }
  return password
}

// var length = 10,
var number = 1
var argv = process.argv

if (argv[2]) {
  length = parseInt(argv[2], 10)
}
if (argv[3]) {
  number = parseInt(argv[3], 10)
}

for (var i = 1; i <=number; i++) {
  console.log(generatePassword(length))
}

process.exit(0)