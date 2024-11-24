const popupOverlay = document.querySelector(".popup-overlay");
const popupBox = document.querySelector(".popup-box");
const addPopupButton = document.getElementById("add-popup-button");
const cancelPopup = document.getElementById("cancel-popup");
const addBookButton = document.getElementById("add");
const container = document.querySelector(".container");
const themeToggleButton = document.getElementById("theme-toggle-button");

// Toggle Popup
addPopupButton.addEventListener("click", () => {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

cancelPopup.addEventListener("click", (event) => {
    event.preventDefault();
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});

// Add Book
addBookButton.addEventListener("click", (event) => {
    event.preventDefault();

    const title = document.getElementById("book-title-input").value;
    const author = document.getElementById("book-auther-input").value;
    const description = document.getElementById("book-description-input").value;

    if (title && author && description) {
        const bookDiv = document.createElement("div");
        bookDiv.className = "book-container";
        bookDiv.innerHTML = `
            <h1>${title}</h1>
            <h5>${author}</h5>
            <p>${description}</p>
            <button onclick="deleteBook(event)">Delete</button>
        `;
        container.append(bookDiv);
        popupOverlay.style.display = "none";
        popupBox.style.display = "none";
    } else {
        alert("Please fill all fields.");
    }
});

// Delete Book
function deleteBook(event) {
    event.target.parentElement.remove();
}

// Dark Mode Toggle
themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

