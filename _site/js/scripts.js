$(document).ready(function() {
    $("#box1").mouseleave(function() {
    $("#box1").scrollTop(0);
    })

    $("#box2").mouseleave(function() {
    $("#box2").scrollTop(0);
    })

    $("#box3").mouseleave(function() {
    $("#box3").scrollTop(0);
    })

    $(document).on('click', '#button1', function() {
      $('#buttonimg1').toggleClass("fa-compress");
      $('#box1').css("transition", "0s");
      if($('#box1').hasClass('box')) {
        $('#box1').removeClass('box');
        $('#box1').addClass('bigbox');
    } else {
        $('#box1').removeClass('bigbox');
        $('#box1').addClass('box');
        $('#icon1').css("transition", "0s");
        $('#iconfas1').css("transition", "0s");
    }
    });

    $(document).on('click', '#button2', function() {
      $('#buttonimg2').toggleClass("fa-compress");
      $('#box2').css("transition", "0s");
      if($('#box2').hasClass('box')) {
        $('#box2').removeClass('box');
        $('#box2').addClass('bigbox');
    } else {
        $('#box2').removeClass('bigbox');
        $('#box2').addClass('box');
        $('#icon2').css("transition", "0s");
        $('#iconfas2').css("transition", "0s");
    }
    });

    $('#bigprojects').hide();

    $(document).on('click', '#button3', function() {
      $('#buttonimg3').toggleClass("fa-compress");
      $('#box3').css("transition", "0s");
      if($('#box3').hasClass('box')) {
        $('#box3').removeClass('box');
        $('#box3').addClass('bigbox');

        $('#overlay1').hide();
        $('#projects').hide();
        $('#project1').hide()
        $('#text1').hide();
        $('#githubimg1').hide();
        $('#githubicon1').hide();

        $('#bigprojects').show();

    } else {
        $('#box3').removeClass('bigbox');
        $('#box3').addClass('box');
        $('#icon3').css("transition", "0s");
        $('#iconfas3').css("transition", "0s");

        $('#overlay1').show();
        $('#projects').show();
        $('#project1').show();
        $('#text1').show();
        $('#githubimg1').show();
        $('#githubicon1').show();

        $('#bigprojects').hide();
    }
    });

    $("#overlay1").mouseenter(function() {
    $("#overlay1").css("opacity", "1");
    })
    $("#overlay1").mouseleave(function() {
    $("#overlay1").css("opacity","0");
    })

    $(document).on('click','#githubimg2', function() {
      $('#githubimg2').css("color","#8800ff");
      window.console.log("adsf");
    });

});
