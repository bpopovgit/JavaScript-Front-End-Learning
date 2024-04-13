window.addEventListener("load", solve);

function solve() {
    const nameInputElement = document.getElementById('name');
    const phoneNumberInputElement = document.getElementById('phone');
    const categoryElement = document.getElementById('category');
    const addButtonElement = document.getElementById('add-btn');
    const checklistElement = document.getElementById('check-list');
    const contactListElement = document.getElementById('contact-list');

    addButtonElement.addEventListener('click', () => {

      // Get input data
      const name = nameInputElement.value;
      const phoneNumber = phoneNumberInputElement.value;
      const category = categoryElement.value;

      //Check empty element
      if(!name || !phoneNumber || !category) {
        return;
      }

      // Add to check-list
      const checklistLiElement = createArticleElement(name, phoneNumber, category);
      checklistElement.appendChild(checklistLiElement);

      // Disable add button
      addButtonElement.setAttribute('disabled', 'disabled');

      // Clear inputs
      clearInputs();

      // Get edit and save buttons
      const editButtonElement = checklistElement.querySelector('.edit-btn');
      const saveButtonElement = checklistLiElement.querySelector('.save-btn');

      editButtonElement.addEventListener('click', () => {
        // Extract data from checklist
        const pElementsNodeList = checklistLiElement.querySelectorAll('article p');
        const pElements = Array.from(pElementsNodeList);
        const name =  pElements[0].textContent.substring(5);
        const phoneNumber = pElements[1].textContent.substring(6);
        const category = pElements[2].textContent.substring(9);

        // Send data to input fields
        nameInputElement.value = name;
        phoneNumberInputElement.value = phoneNumber;
        categoryElement.value = category;

        // Clear checklist
        checklistLiElement.remove();

        //Enable add button
        addButtonElement.removeAttribute('disabled');

      })

      saveButtonElement.addEventListener('click', () => {
        // Remove buttons from checklist
        const checklistButtonsElement = checklistLiElement.querySelector('.buttons');
        checklistButtonsElement.remove();

        // Move task to contacts list
        contactListElement.appendChild(checklistLiElement);
        

        // Add delete button
        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('del-btn');
        checklistLiElement.appendChild(deleteButtonElement);

        deleteButtonElement.addEventListener('click', () => {
            contactListElement.innerHTML = '';
        });

      });

    });

    function createArticleElement(name, phoneNumber, category) {
        const namePElement = document.createElement('p');
        namePElement.textContent = `name:${name}`
        const phonePElement = document.createElement('p');
        phonePElement.textContent = `phone:${phoneNumber}`
        const categoryPElement = document.createElement('p');
        categoryPElement.textContent = `category:${category}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(namePElement);
        articleElement.appendChild(phonePElement);
        articleElement.appendChild(categoryPElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit-btn');

        const saveButtonElement = document.createElement('button');
        saveButtonElement.classList.add('save-btn');

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(saveButtonElement);

        const liChecklistElement = document.createElement('li');
        liChecklistElement.appendChild(articleElement);
        liChecklistElement.appendChild(buttonsDivElement);

        return liChecklistElement;

    }

    function clearInputs() {
      nameInputElement.value = '';
      phoneNumberInputElement.value = '';
      categoryElement.value = '';
    }

}
  