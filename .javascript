const bookmarkForm = document.getElementById('bookmarkForm');
const siteNameInput = document.getElementById('siteNameInput');
const siteUrlInput = document.getElementById('siteUrlInput');
const siteNameErrMsg = document.getElementById('siteNameErrMsg');
const siteUrlErrMsg = document.getElementById('siteUrlErrMsg');
const bookmarksList = document.getElementById('bookmarksList');

// Validation Function
function validateInputs() {
    let isValid = true;

    if (siteNameInput.value.trim() === '') {
        siteNameErrMsg.textContent = 'Please enter a site name.';
        isValid = false;
    } else {
        siteNameErrMsg.textContent = '';
    }

    if (siteUrlInput.value.trim() === '') {
        siteUrlErrMsg.textContent = 'Please enter a site URL.';
        isValid = false;
    } else if (!siteUrlInput.value.startsWith('http://') && !siteUrlInput.value.startsWith('https://')) {
        siteUrlErrMsg.textContent = 'Please enter a valid URL starting with http:// or https://';
        isValid = false;
    } else {
        siteUrlErrMsg.textContent = '';
    }

    return isValid;
}

// Event Listeners for input changes
siteNameInput.addEventListener('change', validateInputs);
siteUrlInput.addEventListener('change', validateInputs);

// Form submission event listener
bookmarkForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    if (validateInputs()) {
        const siteName = siteNameInput.value.trim();
        const siteUrl = siteUrlInput.value.trim();

        // Create new bookmark
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = siteUrl;
        link.textContent = siteName;
        link.target = '_blank';
        listItem.appendChild(link);

        bookmarksList.appendChild(listItem);

        // Clear input fields
        siteNameInput.value = '';
        siteUrlInput.value = '';
    }
});
