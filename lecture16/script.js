let task1 = () => {
    let sapsanStudent = {};
    sapsanStudent.name = "Saule";
    console.log(sapsanStudent.name)
    sapsanStudent.surname = "Nazarbayeva";
    sapsanStudent.name = "Akmaral";
    console.log(sapsanStudent.name)
    let {name, ...obj} = sapsanStudent;
    sapsanStudent = obj;
    console.log(sapsanStudent);
}