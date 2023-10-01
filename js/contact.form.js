/**
*
* -----------------------------------------------------------------------------
*
* Template : Hepta - Multipurpose Business HTML Template
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* -----------------------------------------------------------------------------
*
**/

(function($) {
    'use strict';
    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#name, #email, #phone_number, #subject, #message').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });

    //Second Form
    // Get the form.
    var form2 = $('#contact-form2');

    // Get the messages div.
    var formMessages2 = $('#form-messages2');

    // Set up an event listener for the contact form.
    $(form2).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form2).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form2).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages2).removeClass('error');
            $(formMessages2).addClass('success');

            // Set the message text.
            $(formMessages2).text(response);

            // Clear the form.
            $('#name, #email, #phone_number, #subject, #message').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages2).removeClass('success');
            $(formMessages2).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages2).text(data.responseText);
            } else {
                $(formMessages2).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });

})(jQuery);