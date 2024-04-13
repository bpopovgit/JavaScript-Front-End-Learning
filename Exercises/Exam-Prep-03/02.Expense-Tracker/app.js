window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const expenseInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');
    const previewListElement = document.getElementById('preview-list');
    const expenseListElement = document.getElementById('expenses-list');
    const deleteButtonElement = document.querySelector('.btn.delete');
    


    addButtonElement.addEventListener('click', () => {
        // Get input information

        deleteButtonElement.addEventListener('click', () => {
            expenseListElement.innerHTML = '';
        })

        const expense = expenseInputElement.value;
        const amount = amountInputElement.value;
        const date = dateInputElement.value;

        //Check empty element

        if (!expense || !amount || !date) {
            return;
        }

        //Add to preview list

        const expenseLiElement = createArticleElement(expense, amount, date);
        previewListElement.appendChild(expenseLiElement);

            //Disable add button
    addButtonElement.setAttribute('disabled', 'disabled');

    //Clear inputs
    clearInputs();

    //get ok and edit buttons
    const editButtonElement = document.querySelector('.btn.edit');
    const okButtonElement = document.querySelector('.btn.ok');

    editButtonElement.addEventListener('click', (event) => {
        // Extract data from preview
        const pElementsNodeList = expenseLiElement.querySelectorAll('article p');
        const pElements = Array.from(pElementsNodeList);
        const expenseType = pElements[0].textContent.substring(6);
        const amount = pElements[1].textContent.substring(8, pElements[1].textContent.length - 1);
        const date = pElements[2].textContent.substring(6);

        // Send data to input fields
        expenseInputElement.value = expenseType;
        amountInputElement.value = amount;
        dateInputElement.value = date;

        //Clear preview (should remove event listeners also)
        expenseLiElement.remove();

        //Enable add button
        addButtonElement.removeAttribute('disabled');
    });

    // Attach ok event listener
    okButtonElement.addEventListener('click', (event) => {
        // Remove buttons from preview 
        const expenseButtonsElement = expenseLiElement.querySelector('.buttons');
        console.log(expenseLiElement);
        expenseButtonsElement.remove();

        // Move expense items to expense list
        console.log(expenseLiElement);
        expenseListElement.appendChild(expenseLiElement);

        // Enable add button element
        addButtonElement.removeAttribute('disabled');
    });
    

    })

    function createArticleElement(expense, amount, date) {
        const pTypeElement = document.createElement('p');
        pTypeElement.textContent = `Type: ${expense}`;
        const pAmount = document.createElement('p');
        pAmount.textContent = `Amount: ${amount}$`;
        const pDateElement = document.createElement('p');
        pDateElement.textContent = `Date: ${date}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pAmount);
        articleElement.appendChild(pDateElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('btn', 'edit');
        editButtonElement.textContent = 'edit';

        const okButtonElement = document.createElement('button');
        okButtonElement.classList.add('btn', 'ok');
        okButtonElement.textContent = 'ok';

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(okButtonElement);

        const liExpenseElement = document.createElement('li');
        liExpenseElement.classList.add('expense-item');
        liExpenseElement.appendChild(articleElement);
        liExpenseElement.appendChild(buttonsDivElement);

        return liExpenseElement;
    }

    function clearInputs() {
        expenseInputElement.value = '';
        amountInputElement.value = '';
        dateInputElement.value = '';
    }



}