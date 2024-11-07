$(document).ready(function () {

    var intro = new Audio('1.mp3');
    var error = new Audio('error.mp3');
    var correct = new Audio('correct.mp3');
    var last = new Audio('2.mp3');

    // Play intro audio on button press
    $(".buttonIntro").mousedown(function () {
        intro.load();
        intro.play();
    });
    $(".buttonIntro").mouseup(function () {
        intro.load();
        intro.play();
    });

    // Play error audio on button press
    $(".button").mousedown(function () {
        error.load();
        error.play();
    });
    $(".button").mouseup(function () {
        error.load();
        error.play();
    });

    // Play correct audio, then last audio on button press
    $(".buttonCorrect").mousedown(function () {
        correct.load();
        correct.play();

        // When correct audio ends, play the last audio
        correct.onended = function () {
            last.load();
            last.play();
        };
    });
    $(".buttonCorrect").mouseup(function () {
        correct.load();
        correct.play();

        // When correct audio ends, play the last audio
        correct.onended = function () {
            last.load();
            last.play();
        };
    });

    // Function to handle arrow color change and reset after 2 seconds
    function changeArrowColor(imageId) {
        var image = document.getElementById(imageId);
        image.src = "arrow.png"; // Set to original arrow

        // Change to red arrow
        var timer = setTimeout(function () {
            image.src = "red.png"; // Set to red arrow

            // Reset back to original color after 2 seconds
            setTimeout(function () {
                image.src = "arrow.png"; // Reset to original arrow
            }, 2000);
        }, 0); // Change immediately
    }

    // Handle click events for each error button and change the arrow color
    $("#errorbtn1").click(function () { changeArrowColor('errorimage1'); });
    $("#errorbtn2").click(function () { changeArrowColor('errorimage2'); });
    $("#errorbtn3").click(function () { changeArrowColor('errorimage3'); });
    $("#errorbtn4").click(function () { changeArrowColor('errorimage4'); });
    $("#errorbtn5").click(function () { changeArrowColor('errorimage5'); });
    $("#errorbtn6").click(function () { changeArrowColor('errorimage6'); });
    $("#errorbtn7").click(function () { changeArrowColor('errorimage7'); });
    $("#errorbtn8").click(function () { changeArrowColor('errorimage8'); });
    $("#errorbtn9").click(function () { changeArrowColor('errorimage9'); });
    $("#errorbtn10").click(function () { changeArrowColor('errorimage10'); });
    $("#errorbtn11").click(function () { changeArrowColor('errorimage11'); });
    $("#errorbtn12").click(function () { changeArrowColor('errorimage12'); });

    // Share functionality for WhatsApp
    $("#wimage").click(function () {
        var image = document.getElementById('simage');
        image.src = "whatsapp-share-button-icon.png";
        var imageURL = image.src;

        var fakeLink = document.createElement('a');
        fakeLink.setAttribute('href', 'https://api.whatsapp.com:/send?text=' + encodeURIComponent(window.location.href) + '%0D%0Aमी डेमो मतदान केले, तुम्ही केले का?');
        fakeLink.setAttribute('data-action', 'share/whatsapp/share');
        fakeLink.click();
        image.src = "whatsapp-share-button-icon.png";
    });

});
