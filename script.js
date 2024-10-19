window.onscroll = function() {
    var whatsapp = document.getElementById("whatsapp");
    var stickyPoint = 127; // Sticky starts after scrolling 127px
    if (window.pageYOffset > stickyPoint) {
        whatsapp.style.position = "fixed";
        whatsapp.style.top = "129px"; // Set the sticky position from top
        whatsapp.style.right = "10px"; // Adjust the right position if needed
    } else {
        whatsapp.style.position = "relative";
        whatsapp.style.top = "150px"; // Original absolute position
        whatsapp.style.right = ""; // Reset right position to original
    }
};