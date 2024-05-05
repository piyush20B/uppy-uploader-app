/* 
* JavaScript code for the Uppy project - a cloud storage platform
* This code is part of a portfolio project
* Version: 1.0.0
* Creator: Piyush Rana
*/

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

    function closeProfileDropdown() { // Function to close the profile dropdown...
        $('#profile-dropdown').attr('isOpen', 'closed').stop(true, true).slideUp(300).fadeOut(300);
    }

    $('.link-profile-nav').click(function () { // Click event to close dropdown when profile link is clicked...
        closeProfileDropdown();
    });

    $('#profile-dropdown-toggle').click(function () { // Click event to toggle profile dropdown...
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

    //menu items hover effects...
    $(".nav-item").on('mousemove', function(e) {
        $(this).css({
            '--x': e.pageX - $(this).offset().left + 'px',
            '--y': e.pageY - $(this).offset().top + 'px'
        });
    });

    // Search Function...
    $('#search-form').submit(function (event) { // Add event listener for form submission...
        event.preventDefault(); // Prevent default form submission...
        const searchContent = $('#search-content').val(); // Get the search query from the input field...
        window.location.href = searchUrl + "?query=" + encodeURIComponent(searchContent); // Redirect to the search URL with the search query...
    });
    $('#search-content').keypress(function (event) { // Add event listener for pressing enter in the input field...
        if (event.key === 'Enter') {
            $('#search-form').submit(); // Trigger form submission when enter key is pressed...
        }
    });

    // Keyboard Shortcuts...
    $(document).keydown(function (e) {
        if (e.ctrlKey && e.key === '/') { // Focus on search input when Ctrl+/ is pressed...
            $("#search-content").focus();
            e.preventDefault();
        }
        if (e.key === 'Escape') { // Blur search input when Escape key is pressed...
            $("#search-content").blur();
            e.preventDefault();
        }
    });

    // Focus Class Handling...
    $("#search-content").focus(function () { // Add focus class when search input is focused...
        $(".shortcut").addClass("focus");
    });
    $("#search-content").blur(function () { // Remove focus class when search input is blurred...
        if ($(this).val() === '') {
            $(".shortcut").removeClass("focus");
        } else {
            $(".shortcut").addClass("focus");
        }
    });
});
