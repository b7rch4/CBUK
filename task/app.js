const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const nameButton = document.getElementById('nameButton');

let firstNameTerm;
let lastNameTerm;
let students;
let filteredByName;

firstNameInput.addEventListener('input', e => {
    firstNameTerm = e.target.value;
});

lastNameInput.addEventListener('input', e => {
    lastNameTerm = e.target.value;
});

nameButton.addEventListener('click', e => {
    searchByName();
});

fetchStudents = async () => {
    students = await fetch ('./student_records.json').then(res => res.json());
};

searchByName = async () => {
    await fetchStudents();

    let filterByFirstName = students.Students.filter(student => student.first_name.toLowerCase().includes(firstNameTerm.toLowerCase()));
    filteredByName = filterByFirstName.filter(student => student.last_name.toLowerCase().includes(lastNameTerm.toLowerCase()));

    filteredByName.forEach(student => {
        const studentInfo = document.createElement('div');
        const studentName = document.createElement('h2');
        studentName.innerText = student.first_name + ' ' + student.last_name;

        studentInfo.appendChild(studentName);
        const div = document.getElementById('nameResults');
        div.appendChild(studentInfo);
    });
};