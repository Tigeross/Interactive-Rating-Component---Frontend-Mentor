$(".thankyou").hide();

let rating;

$(".rate").click(function() {
    rating = $(this).attr("id");
    $(".active").removeClass("active");
    $(this).addClass("active");
    $(".thanks-rating").text(`You selected ${rating} out of 5 stars`);
})

$(".submit").click(function() {
    if (rating) {
        $(".thankyou").show();
    $(".thankyou").show();
    $(".rate-state").hide();
    } else {
        alert("Please select a rating");
    }
})

