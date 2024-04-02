function create(words) {
   const contentElement = document.getElementById('content'); 

   const divElements = words
      .map(word => {
         const pElement = document.createElement('p');
         pElement.textContent = word;
         pElement.style.display = 'none';

         const divElement = document.createElement('div');
         divElement.appendChild(pElement);

         divElement.addEventListener('click', () => {
            pElement.style.display = 'block';
         });

         return divElement;
      });

      // divElements.forEach(divElement => {
      //    divElement.addEventListener('click', () => {
               // const pElement = document.querySelector('p');
               // pElement.style.display = 'block';
      //    })
      // });

   // Append all to DOM

   // contentElement.append(...divElements); // Doesn't work in Judge
   divElements.forEach(divElement => contentElement.appendChild(divElement)); // Not efficient
}