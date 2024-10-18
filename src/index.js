const baseUrl = 'http://localhost:3000/ramens';
document.addEventListener("DOMContentLoaded", main);

function main() {
    displayRamens();
    addSubmitListener();
}

function displayRamens() {
    fetch(baseUrl)
        .then(response => response.json())
        .then(ramens => {
            const ramenMenu = document.getElementById('ramen-menu');
            ramenMenu.innerHTML = ''; 
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
    document.querySelector('#ramen-detail .detail-image').src = ramen.image;
    document.querySelector('#ramen-detail .name').textContent = ramen.name;
    document.querySelector('#ramen-detail .restaurant').textContent = ramen.restaurant;
    document.getElementById('rating-display').textContent = ramen.rating;
    document.getElementById('comment-display').textContent = ramen.comment;
}

function addSubmitListener() {
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Collect form data
        const name = document.getElementById('new-name').value;
        const restaurant = document.getElementById('new-restaurant').value;
        const image = document.getElementById('new-image').value;
        const rating = document.getElementById('new-rating').value;
        const comment = document.getElementById('new-comment').value;

        const newRamen = { name, restaurant, image, rating, comment };

        // Append the new ramen image to the ramen menu
        const ramenMenu = document.getElementById('ramen-menu');
        const ramenImage = document.createElement('img');
        ramenImage.src = newRamen.image;
        ramenImage.alt = newRamen.name;

        // Add event listener to the new image for details display
        ramenImage.addEventListener('click', () => handleClick(newRamen));
        ramenMenu.appendChild(ramenImage);

        // Ensure the new ramen details are displayed correctly
        console.log('Ramen Menu After:', document.querySelectorAll('#ramen-menu img').length);

        // Reset the form after submission
        form.reset();
    });
}

export {
    displayRamens,
    addSubmitListener,
    handleClick,
    main,
};
