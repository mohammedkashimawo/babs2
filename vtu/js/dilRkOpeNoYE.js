!function(t){"use strict";var e={},a="static/plugin/";t.fn.exists=function(){return this.length>0},e.PreLoad=function(){document.getElementById("loading").style.display="none"},e.MenuClose=function(){t(".navbar-nav .nav-link").on("click",(function(){t(".navbar-toggler").is(":visible")&&t(".navbar-collapse").collapse("hide")}))},e.HeaderFixd=function(){t(window).scrollTop();t("header").addClass("fixed-header")},e.OnePage=function(){t('header a[href*="#"]:not([href="#"]), .got-to a[href*="#"]:not([href="#"])').on("click",(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var e=t(this.hash);if((e=e.length?e:t("[name="+this.hash.slice(1)+"]")).length)return t("html,body").animate({scrollTop:e.offset().top-70},1e3),!1}}))},e.MegaMenu=function(){t(".m-dropdown-toggle").on("click",(function(){t(this).parent().toggleClass("open-menu-parent"),t(this).next("ul").toggleClass("open-menu"),t(this).toggleClass("open")}))},e.Counter=function(){var e=jQuery(".counter"),o=t(".counter");e.length>0&&n(a+"counter/jquery.countTo.js",(function(){o.each((function(){var e=t(this);e.appear((function(){e.find(".count").countTo({speed:2e3,refreshInterval:10})}))}))}))},e.Owl=function(){var e=jQuery("div.owl-carousel");e.length>0&&n(a+"owl-carousel/js/owl.carousel.min.js",(function(){e.each((function(){var e=t(this),a=e.data("items")?e.data("items"):1,o=!e.attr("data-loop")||e.data("loop"),n=!!e.data("nav-dots")&&e.data("nav-dots"),i=!!e.data("nav-arrow")&&e.data("nav-arrow"),s=!e.attr("data-autoplay")||e.data("autoplay"),r=e.attr("data-autospeed")?e.data("autospeed"):5e3,u=e.attr("data-smartspeed")?e.data("smartspeed"):1e3,d=!!e.data("autoheight")&&e.data("autoheight"),l=!!e.data("center")&&e.data("center"),c=e.attr("data-space")?e.data("space"):30;t(this).owlCarousel({loop:o,items:a,responsive:{0:{items:e.data("xx-items")?e.data("xx-items"):1},480:{items:e.data("xs-items")?e.data("xs-items"):1},768:{items:e.data("sm-items")?e.data("sm-items"):2},980:{items:e.data("md-items")?e.data("md-items"):3},1200:{items:a}},dots:n,autoplayTimeout:r,smartSpeed:u,autoHeight:d,center:l,margin:c,nav:i,navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],autoplay:s,autoplayHoverPause:!0})}))}))},e.Gallery=function(){(t(".lightbox-gallery").exists()||t(".popup-youtube, .popup-vimeo, .popup-gmaps").exists())&&n(a+"magnific/jquery.magnific-popup.min.js",(function(){t(".lightbox-gallery").exists()&&t(".lightbox-gallery").magnificPopup({delegate:".gallery-link",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-fade",fixedContentPos:!0,closeBtnInside:!1,gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}}),t(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()&&t(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1})}))},e.VideoBG=function(){t(".video-bg").exists()&&n(a+"vide/jquery.vide.min.js",(function(){}))},e.ContactForm=function(){t(".contactform").on("submit",(function(){t(".output_message").text("Loading...");var e=t(this);return t.ajax({url:e.attr("action"),method:e.attr("method"),data:e.serialize(),success:function(e){"success"==e?(t(".contactform").find(".output_message").addClass("success"),t(".output_message").text("Message Sent!")):(t(".contactform").find(".output_message").addClass("error"),t(".output_message").text("Error Sending!"))}}),!1}))};var o={};function n(t,e){if(o[t])e&&e();else{o[t]=!0;var a=document.getElementsByTagName("body")[0],n=document.createElement("script");n.type="text/javascript",n.src=t,n.onload=e,a.appendChild(n)}}t(window).on("load",(function(){e.PreLoad()})),t(document).on("ready",(function(){e.VideoBG(),e.HeaderFixd(),e.OnePage(),e.Counter(),e.MenuClose(),e.Gallery(),e.MegaMenu(),e.ContactForm(),e.Owl()})),t(window).on("scroll",(function(){e.HeaderFixd()})),t(window).on("resize",(function(){}))}(jQuery);