jQuery(document).ready(function ($) {
    $('.table-container .clickable-row').click(function () {
        const href = $(this).data('href');
        window.location.href = href;
    }).css('cursor', 'pointer');

    function cardAnchor() {
        $('.card-anchor').click(function () {
            const href = $(this).data('href');
            window.location.href = href;
        }).css('cursor', 'pointer');
    }

    $(document).on('click', '.project-card', function() {
        const href = $(this).data('href');
        console.log('href', href);
        window.location.href = href;
    }).css('cursor', 'pointer');

    function modifyIcons() {
        const validIcons = ['fa-twitter', 'fa-telegram', 'fa-facebook', 'fa-linkedin', 'fa-instagram', 'fa-reddit', 'fa-pinterest', 'fa-discord', 'fa-medium', 'fa-youtube', 'fa-slack'];
        $('.card-requirements .social-item i').each(function () {
            const $icon = $(this);
            const iconName = $icon.attr('class').split(' ')[1];
            const isIconValid = validIcons.includes(iconName);

            if (!isIconValid) {
                const parentSpan = $icon.closest('span');
                switch (iconName) {
                    case 'fa-email':
                        $icon.replaceWith('<i class="fa-solid fa-envelope"></i>');
                        break;
                    case 'fa-phone_number':
                        $icon.replaceWith('<i class="fa-solid fa-phone"></i>');
                        break;
                    default:
                        // Extract and uppercase the first 3 characters of the icon's name
                        var shortIconName = iconName.substring(3, 6).toUpperCase();
						  if(shortIconName === 'DEP') {
                            shortIconName = '$'
                        }
                        if(shortIconName === 'TRA') {
                            shortIconName = '⇆'
                        }
                        parentSpan.replaceWith('<span class="icon-text">' + shortIconName + '</span>');
                        break;
                }
            }
        });
    }

    // Expose modifyIcons and cardAnchor globally
    window.modifyIcons = modifyIcons;
    window.cardAnchor = cardAnchor;

    // Call to init
    modifyIcons();
    cardAnchor();

});



