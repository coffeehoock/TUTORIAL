resize: function(){
    // maintain main video size based on screen dimensions
    // set video size
    var video_top,
        video_left,
        video_width,
        video_height;
    if($(window).height() <= ($(window).width() / 1.7777)){
        // width based
        video_width = $(window).width();
        video_height = video_width / 1.7777;
    } else {
        // height based
        video_height = $(window).height();
        video_width = video_height * 1.7777;
    }

    video_left = ($(window).width() - video_width) / 2;
    video_top = ($(window).height() - video_height) / 2;

    $('#video-bg, .video-bg-cover').css({
        left: video_left,
        top: video_top,
        width: video_width,
        height: video_height
    });
}
},