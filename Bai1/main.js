//Phần 1: khai báo biến:
// var fullName = 'Trần Chánh Biện';
// var age = 21;
// alert(fullName);
// alert(age);

//Phần 2: Cách comment:
//Cách 1: Sử dụng phím tắt Ctrl + /
//Cách 2: Comment đẹp hơn dùng /** */

//Phần 3:
/**
 * Giới thiệu một số hàm built-in
 * 1. Alert
 * 2. Console
 * 3. Confirm
 * 4. Prompt
 * 5. Set timeout
 * 6. Set interval
 */

//console.log(fullName);
// confirm('Xac nhan ban du tuoi!')
// prompt('Nhap tuoi cua ban')
// setTimeout(function () {
//     alert('Thong bao')
// }, 2000)
// setInterval(() => {
//     console.log('Day la log' + Math.random())
// }, 1000);

//Phần 4: Toán tử trong Javascript:
/**
 * 1. Toán tử số học - Arithmetic
 * 2. Toán tử gán - Assignment
 * 3. Toán tử so sánh - Comparison
 * 4. Toán tử logic - Logical
 */

// var number = 3;
// var output = number++ * 2 - --number * 2

//3*2-3*2
// console.log('output: ' + output);

//Phần 5: Toán tử chuỗi - String operator
// var age = 16
// var canBuyAlcohol = age < 18;
// if (canBuyAlcohol) {
//     console.log("Không thể mua rượu!")
// } else {
//     console.log("Có thể mua rượu!")
// }

//Phần 6: Các giá trị là false trong JS
/**
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
*/

//Phần 7: Kiểu dữ liệu trong JS
/**
 * 1. Kiểu dữ liệu nguyên thủy (Primitive Data):
 * - Number
 * - String
 * - Boolean
 * - Undefined
 * - Null
 * - Symbol
 *
 * 2. Kiểu dữ liệu phức tạp (Complex Data):
 * - Function
 * - Object
 */

//Symbol type:
// var id1 = Symbol('id'); //unique
// var id2 = Symbol('id'); //unique

//console.log(id1 === id2);

//Function type:
// var myFunction = function () {
//     alert('Hi. Xin chào các bạn!');
// }

//myFunction();

//Object type:
// var myObject = {
//     name: 'Chanh Bien',
//     age: '21',
//     adress: 'Hồ Chí Minh',
//     myFunction: function () {

//     }
// };

// console.log('Object :', myObject);

// //Array type:
// var myArray = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// console.log(myArray)

//**Chú ý: Để kiểm tra đó là kiểu dữ liệu gì dùng typeof */
//Ví dụ:
// var a = true;
// console.log(typeof a);
//***Chú ý kiểu dữ liệu trả về của typeof luôn là 1 chuỗi */

//Phần 8: Toán tử logic và câu lệnh điều kiện if

// var a = 1;
// var b = 2;
// Đối với toán tử so sánh và (&&), nếu giá trị khác với 6 cái giá trị khi convert sang boolean là false
// ví dụ: NaN, null thì sẽ lấy giá trị của thằng tiếp theo còn nếu là 1 trong 6 giá trị đó thì
// gán cho giá trị đó và những thằng phía sau bỏ qua
/**Còn đối với toán tử so sánh là or (||) thì ngược lại */
// var result = 'A' && 'B' && 'C' && 'D';

// console.log('result ', result);

//Phần 9: Hàm
/**
 * Đối tượng arguments trong function
 */

// function writelog() {
//     var myString = ''
//     for (var param of arguments) {
//         myString += `${param} - `
//     }
//     console.log(myString);
// }

// writelog('log 1', 'log 2', 'log 3');

//Phần 10: Làm việc với chuỗi

var myString = 'Hoc JS  JS JS Tran Chanh Bien';

//1. Length:
// console.log(myString.length);

//2. Find index:
// console.log(myString.indexOf('JS', 6));
// console.log(myString.lastIndexOf('JS'));

//3. Cut string:
// console.log(myString.slice(4, 6));
// console.log(myString.slice(4));
// console.log(myString.slice(-5, -1));

//4. Replace:
// console.log(myString.replace('JS', 'JavaScript'));
// console.log(myString.replace(/JS/g, 'JavaScript'));
// /JS/g gọi là biểu thức chính quy

//5. Convert to upper case:
// console.log(myString.toUpperCase());

//6. Convert to lower case:
// console.log(myString.toLowerCase());

//7. Trim:
// console.log(myString.trim());

//8. Split:
// var language = 'Javascript, PHP, Ruby';
// console.log(language.split(', '));

// var language1 = 'Javascript';
// console.log(language1.split(''));

//9. Get a character by index:
// var myString2 = 'Chanh Bien';
// console.log(myString2.charAt(3));
// console.log(myString2[2]);

//Phần 10: làm việc với Number

// var age = 21;
// var PI = 3.14;
// var result = 20 / 'ABC';
// var x = 2313.123414;
// console.log(isNaN(result));

//Convert kiểu Number sang kiểu String
// console.log(age.toString());
//Làm tròn số
// console.log(x.toFixed(3));

//Phần 11: Mảng
//1. Tạo mảng:
// var language = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Dart',
//     null,
//     undefined,
//     function () {

//     },
//     {}
// ];

// console.log(Array.isArray(language));

//2. Truy xuất mảng:
// console.log(language[2]);

//Phần 12: Làm việc với mảng:
/**
 * 1. ToString
 * 2. Join
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Splicing
 * 8. Concat
 * 9. Slicing
 */

// var language = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// console.log(language.toString());
// console.log(language.join(' - '));

//Xóa element cuối mảng và trả về phần tử đã xóa
// console.log(language.pop());
// console.log(language.pop());
// console.log(language.pop());

//Chú ý khi xóa hết rồi mà vẫn xóa tiếp thì sẽ trả về là undefined
// console.log(language.pop());

//Thêm phần tử vào cuối mảng và trả về giá trị độ dài mảng mới
// console.log(language.push('Dart'));
// console.log(language);

//Xóa element đầu mảng và trả về phần tử đã xóa
// console.log(language.shift());

//Thêm phần tử vào đầu mảng và trả về giá trị độ dài mảng mới
// console.log(language.unshift('Dart'));

//Hàm splice có tham số thứ nhất là vị trí bắt đầu xóa
//tham số thứ 2 là xóa bao nhiêu phần tử tiếp theo nếu là 0 thì không xóa phần tử nào
//tham số thứ 3 là một hay nhiều giá trị mới được thêm vào tại vị trí mà tham số thứ nhất quyết định
// console.log(language.splice(1, 1, 'Dart', 'Java'));

//Hàm concat dùng để nối 1 hay nhiều array
// var language2 = [
//     'Dart',
//     'Ruby'
// ];

// console.log(language.concat(language2));

//Hàm slice dùng để cắt phần tử trong mảng tham số thứ nhất là vị trí cần cắt
//Tham số thứ 2 là vị trí ngừng cắt
//Chú ý: nếu muốn cắt đến hết mảng chỉ cần bỏ đi tham số thứ 2
// console.log(language.slice(1, 2));


//Phần 13: Object

// var emailKey = 'email';

// var myInfo = {
//     name: 'Chánh Biện',
//     age: 21,
//     address: 'Hồ Chí Minh',
//     [emailKey]: 'tranchanhbien@gmail.com',
//     getName: function () {
//         return this.name;
//     }
// };

//Tạo 1 cặp giá trị key và value mới có 2 cách:

//Cách 1:
// myInfo.email = 'tranchanhbien@gmail.com';
//Cách 2:
// myInfo['my-Email'] = 'tranchanhbien@gmail.com';

///Lấy giá trị trong Object có 2 cách:
// console.log(myInfo.name);
// console.log(myInfo['address']);
// console.log(myInfo.getName());
//Cách xóa key value trong object:

// delete myInfo.age;

//Phần 14: Object contructor:

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Chanh', 'Bien', 'Avatar');
var user = new User('Thien', 'Binh', 'Avatar');

console.log(author);
console.log(user);

//Phần 15: Object prototype

User.prototype.className = 'Java';
User.prototype.getclassName = function () {
    return this.className;
}