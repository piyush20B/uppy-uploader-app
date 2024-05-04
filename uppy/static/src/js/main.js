$(document).ready(function () {
    // Selecting elements
    const button = document.querySelector('#profile-dropdown-toggle');
    const tooltip = document.querySelector('#profile-dropdown');

    // Creating Popper instance
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

    // Function to close the dropdown
    function closeDropdown() {
        $('#profile-dropdown').attr('isOpen', 'closed').stop(true, true).slideUp(300).fadeOut(300);
    }

    // Click event to close dropdown when profile link is clicked
    $('.link-profile-nav').click(function () {
        closeDropdown();
    });

    // Click event to toggle dropdown
    $('#profile-dropdown-toggle').click(function () {
        popperInstance.update(); // Update Popper position
        const isOpen = $('#profile-dropdown').attr('isOpen');
        if (isOpen === "closed") {
            $('#profile-dropdown').attr('isOpen', 'opened').stop(true, true).slideDown(300).fadeIn(300);
        } else if (isOpen === "opened") {
            closeDropdown();
        }
    });

    // Click event to toggle menu
    // This is necessary animation for my toggler
    $('.toggle-menu').click(function () {
        const openMenu = $('.toggle-menu .open-menu');
        if (openMenu.attr('isOpen') === "closed") {
            openMenu.addClass('active').attr('isOpen', "opened");
            $('body').addClass('ovh')
            $('.nav-wrapper').fadeIn(300).css('display', 'flex');
            $('header').addClass('active');
            $('.nav-main-container').animate({ opacity: 1, transform: 'scale(1)' }, 500);
            // Animate li items using GSAP
            gsap.to('.nav-item', {
                duration: 0.5,
                opacity: 1,
                y: 0,
                stagger: 0.1
            });
        } else if (openMenu.attr('isOpen') === "opened") {
            openMenu.removeClass('active').attr('isOpen', "closed");
            $('body').removeClass('ovh')
            $('.nav-wrapper').fadeOut(300);
            $('header').removeClass('active');
            $('.nav-main-container').animate({ opacity: 0, transform: 'scale(0.7)' }, 500);
            // Animate li items using GSAP
            gsap.to('.nav-item', {
                duration: 0.5,
                opacity: 0,
                y: -10,
                stagger: 0.1
            });
        }
    });
});
