// Load module node-persist
var storage = require('node-persist');

// Ham khoi tao
// load du lieu da luu tren o dia
storage.initSync({
    dir: "students" // cau hinh noi luu tru du lieu nam trong thu muc students
});

// ham lay danh sach sinh vien
function getAllStudents() {
    // lay sinh vien tu noi luu tru
    var students = storage.getItemSync('students');

    // neu khong co sinh vien nao thi tra ve 1 mang rong
    if (typeof students === "undefined") {
        return [];
    }

    // nguoc lai se tra ve danh sach sinh vien
    return students;
}

// ham lay chi tiet sinh vien theo id cua sinh vien
function getStudent(studentId) {
    // lay danh sach sinh vien
    var students = getAllStudents();

    // bien luu tru sinh vien duoc tim thay
    var matchedStudent = null;

    // lap de tim sinh vien
    for (var i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            matchedStudent = students[i];
            break;
        }
    }

    return matchedStudent;
}

// ham them mot sinh vien
function addStudent(id, fullname) {
    var students = getAllStudents();

    students.push({
        id: id,
        fullname: fullname
    });

    storage.setItemSync('students', students);
}

// ham xoa sinh vien
function removeStudent(studentId) {
    var students = getAllStudents();

    for (var i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            students.splice(i, 1);
        }
    }

    storage.setItemSync('students', students);
}

// ham sua sinh vien
function editStudent(studentId, studentName) {
    var students = getAllStudents();

    for (var i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            students[i].fullname = studentName;
        }
    }

    storage.setItemSync('students', students);
}

// ham hien thi danh sach sinh vien
function showStudents() {
    var students = getAllStudents();
    students.forEach(function (student) {
        console.log('Student: ' + student.fullname + '(' + student.id + ')');
    })
}

// add student
addStudent(1, 'Cuong');
addStudent(2, 'Kinh');
addStudent(3, 'Chinh');
addStudent(4, 'Quyen');

// show student
showStudents();

// remove student
removeStudent('1');