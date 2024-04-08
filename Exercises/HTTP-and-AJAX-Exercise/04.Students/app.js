function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

    const studentsTbodyElement = document.querySelector('#results tbody');
    const submitElement = document.getElementById('submit');

    submitElement.addEventListener('click', () => {
        const firstNameElement = document.querySelector('input[name=firstName]');
        const lastNameElement = document.createElement('input[name=lastName]');
        const facultyNumberElement = document.createElement('input[name=facultyNumber]');
        const gradeElement = document.createElement('input[name=grade]');

        const student = {
            firstName: firstNameElement.value,
            lastNameElement: lastNameElement.value,
            facultyNumber: facultyNumberElement.value,
            grade: gradeElement.value,
        };

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'contet-type': 'application/json',
            },
            body: JSON.stringify(student),
        })
            .then(res => res.json())
            .then(data => studentsTbodyElement.appendChild(createStudentElement(data)))

            firstNameElement.value = '';
            lastNameElement.value = '';
            facultyNumberElement.value = '';
            gradeElement.value = '';
    });

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => 
            Object.values(data)
                .forEach(student => studentsTbodyElement.appendChild(createStudentElement(student)))
        )

    function createStudentElement(student) {
        const trElement = document.createElement('tr');

        const createTd = value => {
            const tdElement = document.createElement('td');
            tdElement.textContent = value;

            return tdElement;
        };

        trElement.appendChild(createTd(student.firstName));
        trElement.appendChild(createTd(student.lastName));
        trElement.appendChild(createTd(student.facultyNumber));
        trElement.appendChild(createTd(student.grade));

        return trElement;

    }

}

attachEvents();