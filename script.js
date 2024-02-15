$(document).ready(function() {
    // Move to the next input field when "Enter" key is pressed
    $('input').keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            var nextInput = $('input').eq($('input').index(this) + 1);
            nextInput.focus();
        }
    });

    function validate_myform(event) {
        if (document.myForm.fullName.value == "" || document.myForm.age.value == "") {
            alert("Please complete the Form");

            if (document.myForm.fullName.value == "") {
                document.myForm.fullName.focus();

                // Uncomment the line below to prevent the form from submitting
                // event.preventDefault();
                return false;
            } else {
                document.myForm.age.focus();
                // event.preventDefault();
                return false;
            }
        } else {
            alert("Thanks for completing the Form");
        }
    }

    function validate_onblur() {
        var fullName = document.myForm.fullName.value;
        var errorMsg = document.getElementById("fnamemsg");

        if (fullName == "") {
            errorMsg.innerHTML = "Please Provide Name";
            errorMsg.style.display = "block"; // Show the error message
        } else {
            errorMsg.innerHTML = ""; // Clear the error message
            errorMsg.style.display = "none"; // Hide the error message
        }
    }   

    $('#signup-form').submit(function(event) {
        event.preventDefault();
        var formValid = true;

        // Validate each input field
        $('input').each(function() {
            if ($(this).val() === "") {
                var errorMessage = $(this).attr('id') + "msg";
                $('#' + errorMessage).slideDown("slow").html("Please provide " + $(this).attr('placeholder'));
                formValid = false;
            }
        });

        // Check if email is valid
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if ($('#cEmail').val() !== "" && !expr.test($('#cEmail').val())) {
            $('#cemailmsg').slideDown("slow").html("Invalid email address");
            formValid = false;
        }

        // Check if phone number is valid
        var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        if ($('#homePhone').val() !== "" && !phoneNumberPattern.test($('#homePhone').val())) {
            $('#homephonemsg').slideDown("slow").html("Invalid phone number");
            formValid = false;
        }

        // Check if postal code is valid
        var postalCodeRegex = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/;
        if ($('#postalCode').val() !== "" && !postalCodeRegex.test($('#postalCode').val())) {
            $('#postalcodemsg').slideDown("slow").html("Invalid postal code");
            formValid = false;
        }

        // Check if password and confirm password match
        if ($('#pass').val() !== $('#confirmPass').val()) {
            $('#passmsg').slideDown("slow").html("Passwords do not match");
            $('#confirmpassmsg').slideDown("slow").html("Passwords do not match");
            formValid = false;
        }

        if (formValid) {
            // Display dynamic information
            var dynamicInfo = "<h3><strong>Thank you! You're account is all for: </h3>" +
                              "<p><strong>First Name:</strong> " + $('#firstName').val() + "</p>" +
                              "<p><strong>Last Name:</strong> " + $('#lastName').val() + "</p>" +
                              "<p><strong>Email:</strong> " + $('#cEmail').val() + "</p>" +
                              "<p><strong>Phone:</strong> " + $('#homePhone').val() + "</p>" +
                              "<p><strong>Address:</strong> " + $('#streetAddress').val() + ", " + $('#city').val() + ", " + $('#province').val() + ", " + $('#country').val() + ", " + $('#postalCode').val() + "</p>" +
                              "<p><strong>User ID:</strong> " + $('#userId').val() + "</p>";

            $('#dynamicInfo').html(dynamicInfo);

            // Hide the form section and show the dynamic information section
            $('#registrationForm').hide();
            $('#dynamicInfo').show();

            // Scroll to the top of the page
            $('html, body').animate({
                scrollTop: 0
            }, 'slow');

            // Submit the form if all fields are valid
            alert("Form submitted successfully!");
             this.submit();
        } else {
            // Scroll to the top of the form
            $('html, body').animate({
                scrollTop: $('#registrationForm').offset().top
            }, 'slow');
        }
    });
});

$(document).ready(function() {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Existing code for form validation and submission
    // Move to the next input field when "Enter" key is pressed
    $('input').keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            var nextInput = $('input').eq($('input').index(this) + 1);
            nextInput.focus();
        }
    });

    $('#signup-form').submit(function(event) {
        event.preventDefault();
        var formValid = true;
    });
});