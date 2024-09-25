// Handle form submission and save items to localStorage
const itemForm = document.getElementById('itemForm');

itemForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemImage = document.getElementById('itemImage').files[0];

    if (itemImage) {
        const reader = new FileReader();
        reader.readAsDataURL(itemImage);
        reader.onload = function(e) {
            const imageSrc = e.target.result;

            // Create an item object
            const newItem = {
                image: imageSrc,
                name: itemName,
                price: itemPrice,
                description: itemDescription,
            };

            // Get existing items from localStorage
            let items = JSON.parse(localStorage.getItem('items')) || [];
            items.push(newItem);

            // Save updated items array to localStorage
            localStorage.setItem('items', JSON.stringify(items));

            // Clear the form
            itemForm.reset();
            alert("Item successfully added!");
        };
    }
});
