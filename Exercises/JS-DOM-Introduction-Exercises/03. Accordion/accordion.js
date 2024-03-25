function toggle() {
    const toggleButtonElement = document.querySelector('.head span.button');
    const extraInformationElement = document.getElementById('extra');

    const currentButtonText = toggleButtonElement.textContent;
    if (currentButtonText === 'More') {
        extraInformationElement.style.display = 'block';
        toggleButtonElement.textContent = 'Less';
    } else {
        extraInformationElement.style.display = 'none';
        toggleButtonElement.textContent = 'More';
    }


}