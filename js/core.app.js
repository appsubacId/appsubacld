$(function(){

    $('#navbar-logout').click(function () {
        //if(!confirm('Do you want to logout?'))
        //return false;
    });

    var createCookie = function(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }
    
    $('a.sidebar-toggle').click(function () {
        if($('body').hasClass('sidebar-collapse')) {
            createCookie("collapse", false, 30);
        } else {
            createCookie("collapse", true, 30);
        }
    })

    $('.control-sidebar').slimscroll({
        wrapperClass: 'control-sidebar',
        right: '0',
        height: '100%'
    });

    $('#navbar-control').click(function () {
        if($('aside.control-sidebar').hasClass('control-sidebar-open')) {
            $('aside.control-sidebar').parent().css({
                right: '0'
            });
        } else {
            $('aside.control-sidebar').parent().css('right','');
        }
    });

    $.notifyDefaults({
        placement: {
            from: "top",
            align: "right"
        },
        animate: {
            enter: 'animated fadeInUp',
            exit: 'animated fadeOutRight'
        },
        z_index: 2031,
        delay: 2000,
        template: '<div data-notify="container" class="col-xs-11 col-sm-4 notify notify-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<span data-notify="icon"></span> ' + 
        '<span class="notify-title">{1}</span><br>' +
        '<span class="notify-message">{2}</span>' +
        '</div>'
    });

    var url = window.location.href;
    var as = $('li.treeview a[href="'+ url +'"]').addClass('active');
    //var lis = as.parents('li.treeview').not('.services').addClass('active');
    //lis.each(function (key, value) {
    //    alert($(this).html());
    //});

    // Javascript to enable link to tab
    var hash = document.location.hash;
    var prefix = "";
    if (hash) {
        $('.nav-tabs a[href='+hash.replace(prefix,"")+']').tab('show');
    }

    // Change hash for page-reload
    $('.nav-tabs a').on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash.replace("#", "#" + prefix);
        var scroll = $(window).scrollTop();
        //alert(scroll);
        $(window).scrollTop(scroll);
    });

    // Jump fix when a tab clicked in Bootstrap Tab Control
    $('.nav-tabs li a').click( function(e) {
        e.preventDefault();
        history.pushState( null, null, $(this).attr('href') );
    });
    
    // init menu
   /* var link = window.location.href;
    if ($('[href="' + link + '"]').parents('.treeview-menu').length == 1) {
        $('[href="' + link + '"]').parents('.treeview-menu').addClass('menu-open');
        $('[href="' + link + '"]').parents('.treeview-menu').attr('style', 'display: block;');
        $('[href="' + link + '"]').parents('.treeview-menu').parents('.treeview').addClass('active');
    }*/
   menu = {
       init:function(){
           var link = window.location.href;
           if ($('[href="' + link + '"]').parents('.treeview-menu').length >= 1) {
               $('[href="' + link + '"]').parents('.treeview-menu').addClass('menu-open');
               $('[href="' + link + '"]').parents('.treeview-menu').attr('style', 'display: block;');
               $('[href="' + link + '"]').parents('.treeview-menu').parents('.treeview').addClass('active');
           }
       }
   }
});

$(document).ready(function() {
   menu.init();
});
