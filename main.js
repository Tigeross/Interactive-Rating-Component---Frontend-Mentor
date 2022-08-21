$(".thankyou").hide();

let rating;

$(".rate-state").hide();
$(".thankyou").show()

$(".rate").click(function() {
    rating = $(this).attr("id");
    $(".active").removeClass("active");
    $(this).addClass("active");
    $(".thanks-rating").text(`You selected ${rating} out of 5 stars`);
})

$(".submit").click(function() {
    $(".thankyou").show();
    $(".rate-state").hide();
})

