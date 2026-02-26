// Wait for the HTML to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab all the navigation links and all the page sections
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    // Loop through each link to add a click event listener
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            
            // Prevent the default link behavior (which would refresh the page)
            event.preventDefault(); 

            // Get the target ID from the clicked link (e.g., "book-1")
            const targetId = this.getAttribute('data-target');

            // 1. Hide all pages by removing the 'active' class
            pages.forEach(page => {
                page.classList.remove('active');
            });

            // 2. Show the target page by adding the 'active' class
            const targetPage = document.getElementById(targetId);
            if (targetPage) {
                targetPage.classList.add('active');
            }

            // Optional: Scroll back to the top of the page when navigating
            window.scrollTo(0, 0);
        });
    });
});
