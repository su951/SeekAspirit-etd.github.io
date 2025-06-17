document.addEventListener('DOMContentLoaded', () => {

    // --- Main Navigation Elements ---
    const loginBtn = document.getElementById('login-btn');
    const loginNav = document.getElementById('login-nav');

    // --- Popup Elements ---
    const loginPopup = document.getElementById('login-popup');
    const closeBtn = document.querySelector('.close-btn');
    const tabs = document.querySelectorAll('.tab');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const forms = document.querySelectorAll('.form-content');

    // --- Functions ---

    // Function to show the popup
    const showPopup = () => {
        loginPopup.style.display = 'flex';
    };

    // Function to hide the popup
    const hidePopup = () => {
        loginPopup.style.display = 'none';
    };

    // Function to update nav to "My Session"
    const showMySession = () => {
        hidePopup();
        const mySessionLink = document.createElement('a');
        mySessionLink.href = 'my-session.html';
        mySessionLink.textContent = 'My Session';

        const mySessionLi = document.createElement('li');
        mySessionLi.appendChild(mySessionLink);

        loginNav.innerHTML = ''; // Clear the login button
        loginNav.appendChild(mySessionLink);
    };

    // --- Event Listeners ---

    // Show login popup when nav button is clicked
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showPopup();
    });

    // Hide login popup via close button
    closeBtn.addEventListener('click', hidePopup);

    // Hide login popup when clicking the background overlay
    window.addEventListener('click', (e) => {
        if (e.target === loginPopup) {
            hidePopup();
        }
    });

    // Handle Tab Switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Deactivate all tabs and forms
            tabs.forEach(item => item.classList.remove('active'));
            forms.forEach(form => form.classList.remove('active'));

            // Activate the clicked tab and corresponding form
            tab.classList.add('active');
            const formId = tab.getAttribute('data-form');
            document.getElementById(formId).classList.add('active');
        });
    });

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically handle actual login validation
        console.log('Login attempt');
        showMySession(); // For demo, proceed to "My Session"
    });

    // Handle signup form submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically handle user creation
        console.log('Signup attempt');
        showMySession(); // For demo, proceed to "My Session"
    });
});
