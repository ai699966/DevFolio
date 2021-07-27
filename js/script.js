$('ul a').click(function (e) {
    let sec = $(e.target).attr("href");
    console.log($(sec).offset().top);
    $("html,body").animate({scrollTop:$(sec).offset().top},1000);
    })



