/* 
* JavaScript code for the Uppy project - a cloud storage platform
* This code is part of a portfolio project
* Version: 1.0.0
* Creator: Piyush Rana
*/

$(document).ready(function () {
    const button = document.querySelector('#profile-dropdown-toggle');
    const tooltip = document.querySelector('#profile-dropdown');

    // Creating Popper instance for header dropdown positioning...
    const popperInstance = Popper.createPopper(button, tooltip, {
        placement: 'bottom-start',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 10],
                },
            }
        ],
    });

    // Function to close the profile dropdown...
    function closeDropdown() {
        $('#profile-dropdown').attr('isOpen', 'closed').stop(true, true).slideUp(300).fadeOut(300);
    }

    // Click event to close dropdown when profile link is clicked...
    $('.link-profile-nav').click(function () {
        closeDropdown();
    });

    // Click event to toggle profile dropdown...
    $('#profile-dropdown-toggle').click(function () {
        popperInstance.update(); // Update Popper position...
        const isOpen = $('#profile-dropdown').attr('isOpen');
        if (isOpen === "closed") {
            $('#profile-dropdown').attr('isOpen', 'opened').stop(true, true).slideDown(300).fadeIn(300);
        } else if (isOpen === "opened") {
            closeDropdown();
        }
    });

    // Click event to toggle menu...
    $('.toggle-menu').click(function () {
        const openMenu = $('.toggle-menu .open-menu');
        if (openMenu.attr('isOpen') === "closed") {
            // Open menu animations...
            openMenu.addClass('active').attr('isOpen', "opened");
            $('body').addClass('ovh'); // Add class to prevent scrolling...
            $('.nav-wrapper').fadeIn(300).css('display', 'flex'); // Fade in navigation wrapper and display it as flex...
            $('header').addClass('active'); // Add class to header for styling purposes...
            $('.nav-main-container').animate({ opacity: 1, transform: 'scale(1)' }, 500); // Animate scaling and opacity...
            // Animate li items using GSAP...
            gsap.to('.nav-item', {
                duration: 0.5,
                opacity: 1,
                y: 0,
                stagger: 0.1
            });
        } else if (openMenu.attr('isOpen') === "opened") {
            // Close menu animations...
            openMenu.removeClass('active').attr('isOpen', "closed");
            $('body').removeClass('ovh'); // Remove class to enable scrolling...
            $('.nav-wrapper').fadeOut(300); // Fade out navigation wrapper...
            $('header').removeClass('active'); // Remove class from header...
            $('.nav-main-container').animate({ opacity: 0, transform: 'scale(0.7)' }, 500); // Animate scaling and opacity
            // Animate li items using GSAP...
            gsap.to('.nav-item', {
                duration: 0.5,
                opacity: 0,
                y: -10,
                stagger: 0.1
            });
        }
    });

    // Search Function...
    // Add event listener for form submission...
    $('#search-form').submit(function (event) {
        // Prevent default form submission...
        event.preventDefault();

        // Get the search query from the input field...
        const searchContent = $('#search-content').val();

        // Redirect to the search URL with the search query...
        window.location.href = searchUrl + "?query=" + encodeURIComponent(searchContent);
    });

    // Add event listener for pressing enter in the input field...
    $('#search-content').keypress(function (event) {
        if (event.key === 'Enter') {
            // Trigger form submission when enter key is pressed...
            $('#search-form').submit();
        }
    });
});
