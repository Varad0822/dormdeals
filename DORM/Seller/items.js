// Retrieve items from localStorage and display them
const itemList = document.getElementById('itemList');

// Get items from localStorage
let items = JSON.parse(localStorage.getItem('items')) || [];

if (items.length > 0) {
    items.forEach(item => {
        // Create a new item card
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');

        itemCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="price">$${item.price}</p>
            <p>${item.description}</p>
        `;

        // Append the item card to the item list
        itemList.appendChild(itemCard);
    });
} else {
    itemList.innerHTML = "<p>No items listed yet.</p>";
}
