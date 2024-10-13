
document.addEventListener("DOMContentLoaded", main);

function main() {
    displayRamens();
    addSubmitListener();
}

function displayRamens() {
    fetch('http://localhost:3000/ramens')
        .then(response => response.json())
        .then(ramens => {
            const ramenMenu = document.getElementById('ramen-menu');
            ramenMenu.innerHTML = ''; // Clear existing content
            ramens.forEach(ramen => {
                const ramenImage = document.createElement('img');
                ramenImage.src = ramen.image;
                ramenImage.alt = ramen.name;
                ramenImage.addEventListener('click', () => handleClick(ramen));
                ramenMenu.appendChild(ramenImage);
            });
        })
        .catch(error => console.error('Error fetching ramens:', error));
}

function handleClick(ramen) {
    document.getElementById('detail-image').src = ramen.image;
    document.getElementById('detail-name').innerText = ramen.name;
    document.getElementById('detail-description').innerText = ramen.description;
    document.getElementById('detail-rating').innerText = ramen.rating;
}

function addSubmitListener() {
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    
       const newImage = document.createElement('img');
       newImage.src = newRamen.image; 
       ramenMenu.appendChild(newImage);
       const img = ramenMenuDivAfter[ramenMenuDivBefore.length];
       const ramenMenuDivAfter = document.querySelectorAll('#ramen-menu img');
       expect(ramenMenuDivAfter.length).toBe(ramenMenuDivBefore.length + 1);

        const newImg = ramenMenuDivAfter[ramenMenuDivAfter.length - 1];
        expect(newImg.src).toBe(newRamen.image);
        




        const name = document.getElementById('new-ramen-name').value;
        const image = document.getElementById('new-ramen-image').value;
        const description = document.getElementById('new-ramen-description').value;
        const rating = document.getElementById('new-ramen-rating').value;

        const newRamen = { name, image, description, rating };

        const ramenMenu = document.getElementById('ramen-menu');
        const ramenImage = document.createElement('img');
        ramenImage.src = newRamen.image;
        ramenImage.alt = newRamen.name;
        ramenImage.addEventListener('click', () => handleClick(newRamen));
        ramenMenu.appendChild(ramenImage);

        console.log('Ramen Menu After:', document.querySelectorAll('#ramen-menu img').length);


        // Clear form fields
        form.reset();
    });
}

export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,

};

// console.log('Ramen Menu Before:', ramenMenuDivBefore.length);
// console.log('Ramen Menu After:', ramenMenuDivAfter.length);
// console.log('New Image Element:', newImg);
// // A test case that checks error handling
// describe('Error handling', () => {
//   it('should handle fetch error gracefully', async () => {
//       await displayRamens(); // This should trigger the fetch

//       // You can check for specific error handling behavior
//       expect(document.getElementById('ramen-menu').innerHTML).toBe(''); // Ensure no images are shown
//       // Add any other assertions you expect to occur on error
//   });
// });