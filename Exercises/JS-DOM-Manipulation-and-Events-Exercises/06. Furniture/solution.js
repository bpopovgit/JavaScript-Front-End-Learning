function solve() {
  const textareaInputElement = document.querySelector('#exercise textarea:first-of-type');
  const textAreaOutputElement = document.querySelector('#exercise textarea:last-of-type');
  const generateButtonElement = document.querySelector('#exercise button:first-of-type');
  const buyButtonElement = document.querySelector('#exercise button:last-of-type');
  const furnitureTbodyElement = document.querySelector('.table tbody');

  //Parse input
  
  generateButtonElement.addEventListener('click', (e) => {
    const furnitures = JSON.parse(textareaInputElement.value);

    for (const furniture of furnitures) {
      const imageElement = document.createElement('img');
      imageElement.src = furniture.img;
      const imageTdElement = document.createElement('td');
      imageTdElement.appendChild(imageElement);

      const namePElement = document.createElement('p');
      namePElement.textContent = furniture.name;
      const nameTdElement = document.createElement('td');
      nameTdElement.appendChild(namePElement);

      const pricePElement = document.createElement('p');
      pricePElement.textContent = furniture.price;
      const priceTdElement = document.createElement('td');
      priceTdElement.appendChild(pricePElement);

      const decPElement = document.createElement('p');
      decPElement.textContent = furniture.decFactor;
      const decFactorTdElement = document.createElement('td');
      decFactorTdElement.appendChild(decPElement);

      const markElement = document.createElement('input');
      markElement.setAttribute('type', 'checkbox')
      const markTdElement = document.createElement('td');
      markTdElement.appendChild(markElement);

      const furnitureTrElement = document.createElement('tr');
      furnitureTbodyElement.appendChild(imageTdElement);
      furnitureTbodyElement.appendChild(nameTdElement);
      furnitureTbodyElement.appendChild(pricePElement);
      furnitureTbodyElement.appendChild(decFactorTdElement);
      furnitureTbodyElement.appendChild(markTdElement);

      furnitureTbodyElement.appendChild(furnitureTrElement)

    }
  });

  buyButtonElement.addEventListener('click', (e) => {
    let totalPrice = 0;
    let totalDecorationFactor = 0;
    let markedChildren = 0;
    let names = [];

    Array.from(furnitureTbodyElement.children)
      .forEach(furnitureTrElement => {
        const markInputElement = furnitureTrElement.querySelector('input[type=checkbox]')
        if (!markInputElement.checked) {
          return;
        }

        const name = furnitureTrElement.children.item(1).textContent;
        const price = Number(furnitureTrElement.children.item(2).textContent);
        const decorationFactor = Number(furnitureTrElement.children.item(3).textContent);

        console.log(name);
        console.log(price);
        console.log(decorationFactor);

        names.push(name);
        totalPrice += price;
        totalDecorationFactor += decorationFactor;
        markedChildren++;

      });

    const averageDecorationFactor = totalDecorationFactor / markedChildren;

    textAreaOutputElement.textContent += `Bought furniture: ${names.join(', ')}\n`
    textAreaOutputElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`
    textAreaOutputElement.textContent += `Average decoration factor: ${averageDecorationFactor}`

  })


}