/* 
* JavaScript code for the Uppy project - a cloud storage platform
* This code is part of a portfolio project
* Version: 1.0.0
* Creator: Piyush Rana
*/

// ripple effect
$('.rip').on('click', function (e) {
    let $this = $(this);
    let offset = $this.offset();
    let x = e.clientX - offset.left;
    let y = e.clientY - offset.top;
    let ripples = $('<span>').addClass('ripple-effect')
        .css({ 'left': x + 'px', 'top': y + 'px' });
    $this.append(ripples);

    setTimeout(() => {
        ripples.remove();
    }, 500);
});

$(document).ready(function () {
    // initially check the user theme and update it...

    // Profile Dropdown...
    const button = document.querySelector('#profile-dropdown-toggle');
    const tooltip = document.querySelector('#profile-dropdown');
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
    function closeProfileDropdown() {
        $('#profile-dropdown').attr('isOpen', 'closed').stop(true, true).slideUp(300).fadeOut(300);
    }

    // Click event to close dropdown when profile link is clicked...
    $('.link-profile-nav').click(function () {
        closeProfileDropdown();
    });

    // Click event to toggle profile dropdown...
    $('#profile-dropdown-toggle').click(function () {
        popperInstance.update(); // Update Popper position...
        const isOpen = $('#profile-dropdown').attr('isOpen');
        if (isOpen === "closed") {
            $('#profile-dropdown').attr('isOpen', 'opened').stop(true, true).slideDown(300).fadeIn(300);
        } else if (isOpen === "opened") {
            closeProfileDropdown();
        }
    });

    $(document).click(function (event) {
        if (!$(event.target).closest('#profile-dropdown-toggle, #profile-dropdown').length) {
            closeProfileDropdown();
        }
    });

    $('#profile-dropdown-toggle').blur(() => { closeProfileDropdown() });

    // Toggle Menu...
    $('#main-menu-toggler').click(function () {
        const openMenu = $('#main-menu-toggler .open-menu');
        if (openMenu.attr('isOpen') === "closed") {
            // Open menu animations...
            openMenu.addClass('active').attr('isOpen', "opened");
            $('body').addClass('ovh'); // Add class to prevent scrolling...
            $('#main-navigation-body').fadeIn(300).css('display', 'flex'); // Fade in navigation wrapper and display it as flex...
            $('header').addClass('active'); // Add class to header for styling purposes...
            $('#main-navigation-body .nav-main-container').animate({ opacity: 1, transform: 'scale(1)' }, 500); // Animate scaling and opacity...
            // Animate to open li items using GSAP...
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
            $('#main-navigation-body').fadeOut(300); // Fade out navigation wrapper...
            $('header').removeClass('active'); // Remove class from header...
            $('#main-navigation-body .nav-main-container').animate({ opacity: 0, transform: 'scale(0.7)' }, 500); // Animate scaling and opacity...
            // Animate to close li items using GSAP...
            gsap.to('.nav-item', {
                duration: 0.5,
                opacity: 0,
                y: -10,
                stagger: 0.1
            });
        }
    });

    // Menu items hover effects...
    $(".nav-item").on('mousemove', function (e) {
        $(this).css({
            '--x': e.pageX - $(this).offset().left + 'px',
            '--y': e.pageY - $(this).offset().top + 'px'
        });
    });

    // Search Function...
    const $inputField = $('#search-content');
    const $submitButton = $('.search-btn button[type="submit"]');

    // Disable the submit button initially
    $submitButton.prop('disabled', true);

    // Enable/disable the submit button based on input field content
    $inputField.on('input', function () {
        if ($inputField.val().trim() !== "") {
            $submitButton.prop('disabled', false);
        } else {
            $submitButton.prop('disabled', true);
        }
    });

    // Add event listener for form submission
    $('#search-form').submit(function (event) {
        const searchContent = $inputField.val().trim();

        // Prevent form submission if the input field is empty
        if (searchContent === "") {
            event.preventDefault();
        } else {
            // Redirect to the search URL with the search query
            const searchUrl = "/search"; // Update this with your actual search URL
            window.location.href = searchUrl + "?query=" + encodeURIComponent(searchContent);
        }
    });

    // Add event listener for pressing enter in the input field
    $inputField.keypress(function (event) {
        if (event.key === 'Enter') {
            $('#search-form').submit(); // Trigger form submission when enter key is pressed
        }
    });

    // Keyboard Shortcuts
    $(document).keydown(function (e) {
        // Focus on search input when Ctrl+/ or Ctrl+k is pressed
        if (e.ctrlKey && (e.key === '/' || e.key === 'k')) {
            $inputField.focus();
            e.preventDefault();
        }
        // Blur search input when Escape key is pressed
        if (e.key === 'Escape') {
            $inputField.blur();
            e.preventDefault();
        }
    });

    // Focus Class Handling
    $inputField.focus(function () {
        $(".shortcut").addClass("focus");
    });

    $inputField.blur(function () {
        if ($inputField.val().trim() === '') {
            $(".shortcut").removeClass("focus");
        } else {
            $(".shortcut").addClass("focus");
        }
    });
});
