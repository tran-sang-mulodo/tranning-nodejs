/*THƯ VIỆN STUDENT*/
var storage = require('node-persist');

storage.initSync({
    dir : "students",
    ttl : false
});

function getAllStudents()
{
    var students = storage.getItemSync('students');
    if (typeof students === "undefined"){
        return [];
    }

    return students;
}


function showStudents()
{
    var students = getAllStudents();
    for (var i = 0; i < students.length; i++)
    {
        console.log('Student: ' + students[i].fullname + "(" +students[i].id+ ")");
    }
}

function addStudent(studentId, studentName)
{
    var students = getAllStudents();
    students.push({
        id: studentId,
        fullname : studentName
    });

    storage.setItemSync('students', students);
}

function removeStudent(studentId)
{
    var students = getAllStudents();

    for (var i = 0; i < students.length; i++)
    {
        if (students[i].id === studentId){
            students.splice(i, 1);
        }
    }

    storage.setItemSync('students', students);
}

function editStudent(studentId, studentName)
{
    var students = getAllStudents();

    for (var i = 0; i < students.length; i++)
    {
        if (students[i].id === studentId){
            students[i].fullname = studentName;
        }
    }

    storage.setItemSync('students', students);
}


/*OPTIONS ACTION*/
var yargs = require('yargs');

var argv = yargs
    .command("list", "Get List Student", function(yargs){
        // Nothing
    })
    .command('create', 'Create a Student', function(yargs){
        return yargs.options({
            id : {
                demand : true,
                type : "number"
            },
            fullname : {
                demand : true,
                type : "string"
            }
        });
    })
    .command('delete', 'Delete a Student', function(yargs){
        return yargs.options({
            id : {
                demand : true,
                type : "number"
            }
        });
    })
    .command('edit', 'Edit a Student', function(yargs){
        return yargs.options({
            id : {
                demand : true,
                type : "number"
            },
            fullname : {
                demand : true,
                type : "string"
            }
        });
    })
    .argv;

/*XỬ LÝ ACTION*/
// Lấy tên action
var action = argv._[0];

if (action === 'list'){
    showStudents();
}
else if (action === 'create'){
    addStudent(argv.id, argv.fullname);
    console.log('Add Successfully!');
    showStudents();
}
else if (action === 'delete'){
    removeStudent(argv.id);
    console.log('Delete Successfully!');
    showStudents();
}
else if (action === 'edit'){
    editStudent(argv.id, argv.fullname);
    console.log('Edit Successfully!');
    showStudents();
}
else{
    console.log('Command not found!');
    showStudents();
}