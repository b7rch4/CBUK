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

        const studentGender = document.createElement('p');
        studentGender.innerText = 'Gender: ' + student.gender;
        studentInfo.appendChild(studentGender);

        const studentEthnicity = document.createElement('p');
        studentEthnicity.innerText = 'Ethnicity: ' + student.ethnicity_code;
        studentInfo.appendChild(studentEthnicity);

        const address = document.createElement('h4');
        address.innerText = 'Address: ';
        studentInfo.appendChild(address);

        const addressLineOne = document.createElement('p');
        addressLineOne.innerText = student.address_line_1;
        studentInfo.appendChild(addressLineOne);

        const townCity = document.createElement('p');
        townCity.innerText = student.town_city;
        studentInfo.appendChild(townCity);

        const postcode = document.createElement('p');
        postcode.innerText = student.postcode;
        studentInfo.appendChild(postcode);

        const div = document.getElementById('nameResults');
        div.appendChild(studentInfo);
    });
};