function colorize() {
    const evenRowElements = document.querySelectorAll('table tr:nth-child(2n)');
    console.log(evenRowElements);

    // evenRowElements.forEach(element => element.style.backgroundColor = 'teal');

    for (const evenRow of evenRowElements) {
        evenRow.style.backgroundColor = 'teal';
    }
}