
// window.open("URL",'top'); 只是表示打开这个页面，并不是打开并刷新页面；

// window.location.href="URL"; 表示重新定向到新页面，同时刷新打开的这个页面；
// 1.该名称由字母、数字和下划线字符组成。
// 2."_top"、"_blank"、"_selft"具有特殊意义的名称。
//    _blank：在新窗口显示目标网页
//    _self：在当前窗口显示目标网页
//    _top：框架网页中在上部窗口中显示目标网页  window.open('http://www.imooc.com','_blank','width=600,height=400,top=100px,left=0px')

$(document).ready(function(){
    $(".earth").bind("click",function(){  //为class为earth添加点击函数
        window.open("../../service/HTML/earth.html");
        // window.location.href="../../service/HTML/earth.html";  本页面跳转
        //jquery跳转
        // $(window).attr('location',"../../HTML/earth.html");
        // window.open("../../HTML/earth.html");
        // $(window).attr("location","../../HTML/earth.html");
    });
    
    $(".libary").on("click",function(){
        window.open("../HTML/libary.html");
    });
    
    $(".fruits").click(function(){
        alert($("#text2").val());
        
    });
});
 