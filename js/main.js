(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });



})(jQuery);

var iframe = document.getElementById("map-iframe");
iframe.src = "https://maps.app.goo.gl/TSn8VEyXFfoHUC3R6";





// Sample student details (replace with your data)
const studentData = [
    { certificateId: "ADV860964", name: "Vinay Kumar", Domain: "Java Developer", Starting_date: "15/09/2023", Ending_date: "15/10/2023" },
    { certificateId: "ADV860965", name: "Jane Smith", Domain: "Data Science", Starting_date: "15/09/2023", Ending_date: "15/10/2023" },
];

const form = document.getElementById("verification-form");
const certificateIdInput = document.getElementById("certificate-id");
const resultDiv = document.getElementById("result");
const studentDetails = document.getElementById("student-details");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const certificateId = certificateIdInput.value.trim();

    const student = studentData.find((student) => student.certificateId === certificateId);

    if (student) {
        resultDiv.style.display = "block";
        studentDetails.innerHTML = `
            <strong>Name:</strong> ${student.name}<br>
            <strong>Domain:</strong> ${student.Domain}<br>
            <strong>Starting Date:</strong> ${student.Starting_date}<br>
            <strong>Ending Date:</strong> ${student.Ending_date}<br>
        `;
        successMessage.style.display = "block"; // Show the success message
    } else {
        resultDiv.style.display = "none";
        successMessage.style.display = "none"; // Hide the success message
        alert("Certificate ID not found. Please check the ID and try again.");
    }
});
