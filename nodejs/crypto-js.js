var crypto = require('crypto-js');

// Ma hoa
var message = crypto.AES.encrypt('Noi dung can ma hoa', 'manhsang').toString();

// Xem chuoi da ma hoa
// console.log(message);

// Lấy danh sách byte đã mã hóa
var bytes = crypto.AES.decrypt(message, 'ma bi mat');

// Chuyển sang chuỗi gốc
var message_decode = bytes.toString(crypto.enc.Utf8);

console.log(message_decode);

