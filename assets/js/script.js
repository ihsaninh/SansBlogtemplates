$(document).ready(() => {
    $(window).on("scroll", () => {
        let scrollTop = $(this).scrollTop();
        let windowHeight = $(window).height();
        let documentHeight = $(document).height();
        let percentagescroll = scrollTop / (documentHeight - windowHeight);
        let percentageround = Math.round(percentagescroll * 100);
        $(".progress-bar").css("width", percentageround + "%");
    });
});
