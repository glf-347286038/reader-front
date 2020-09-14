var status = 1;   //修改用户资料默认状态为1  表示收起
function editUserInfo(){  //修改用户资料
   if(status == 1){    //如果写成=1  则不会执行else
    $(".editUserInfo").css({  //添加登陆文字下划线
        "display":"block",
    })
    status = 2;
   }else{
    $(".editUserInfo").css({  //添加登陆文字下划线
        "display":"none",
    })
    status = 1;
   }
}

$(document).ready(function(){
    //判断点击的是哪个下拉按钮并将图片修改
    //为所有展开图标添加点击事件
  $(".li-more").click(function(){
      //获取src中的值
      var status = $(this).attr("src");
      if(status=="../IMG/收起.png"){
        //当前图片箭头朝上 为展开状态  显示收起状态图片 点击则将子菜单隐藏 图片变为箭头朝下
        $(this).attr("src","../IMG/展开.png");
          $(this).parent().next().slideToggle(300);
        // $(this).parent().next().css({
        //     "display":"none",
        // })
      }else{
          //当前图片箭头朝下 为收起状态 点击的话显示出隐藏内容
        $(this).attr("src","../IMG/收起.png");
          $(this).parent().next().slideToggle(300);
        // $(this).parent().next().css({
        //     "display":"block",
        // })

          // $('#toggle').click(function(){  上下滑动
          //     $('.left').slideToggle(300);
          // });
      }
  });

});



//展开或收起左侧导航栏
$(document).ready(function () {
    $(".stretch").click(function () {
        //1.判断当前状态
        var status = $(this).attr("src")
        if(status=="../IMG/firstTop/hiddenLeftNav.png"){
            //当前为展开状态，显示的是可以隐藏按钮
            //将左侧导航栏向左滑动剩余60px
            $('.body_left').animate({width:'60px'},350);
            //修改状态图片
            $(this).attr("src","../IMG/firstTop/showLeftNav.png");
            //将所有展开收起状态全部设置为展开状态
            $(".li-more").attr("src","../IMG/展开.png")
            //将左侧导航栏的所有字体隐藏
            $(".atag cite").css({
                display:"none",
            });
            //将头像下组件隐藏
            $(".usernameSpan").css({
                display:"none",
            })

            //展开图标全部隐藏
            $(".li-more").css({
                display:"none",
            })
            //将二级标题全部隐藏
            $(".nav-child").css({
                display:"none",
            })
            //将最顶部导航栏\顶部标签栏\右侧主体 设置距离左边60px
            $(".body_top,.page_tabs,.body_right").css({
                left:"60px"
            })
            $(".mainImgList").css({
                width:"89.5%",
            })
        }else {
            //当前状态为影藏左侧dao航栏 显示的是展开图片

            //修改状态图片
            $(this).attr("src","../IMG/firstTop/hiddenLeftNav.png");

            $(".usernameSpan").css({
                display:"block",
            })
            //将左侧导航栏的所有字体、展开图标、二级标题显示
            $(".atag cite,.li-more").css({
                display:"inline",
            });



            //将最顶部导航栏\顶部标签栏\右侧主体 设置距离左边220px
            $(".body_top,.page_tabs,.body_right").css({
                left:"220px"
            })

            $(".mainImgList").css({
                width:"77.4%",
            })

            //将左侧导航栏向右滑动宽度变为220px
            $('.body_left').animate({width:'220px'},250);

        }
        // $(".body_left").animate({right:'50px'});
    })
})


//1.点击左侧导航栏主页切换iframe  2.且添加顶部标签栏title
$(document).ready(function () {
    //1.点击左侧导航栏主页切换iframe data-name作为新增的div块id
    $(".child-this").click(function () {
        var dataName = $(this).attr("data-name");           //获得唯一名称作为后面添加的id div
        var htmlPath = $(this).children('a').attr("path");  //获得要跳转的页面地址
        var htmlTitleName = $(this).children('a').text()        //获得a标签中的文字作为顶部导航图标中的文字
        var addId = '#'+dataName;  //要添加的div id
        if($(".body_right").children(addId).length>0){   //!不需要加双引号   点击的页面已经被加上页面的话
            $(".tabs-body-iframe").hide();      //将所有iframe的类隐藏
            $(addId).show();                    //将点击的这个id显示

            addId+="ico";
            //处理顶部图标css
            $("#tab-title").children('li').css({
                background: "none" ,
                "border-top":"2px solid white"
            })
            $(addId).css({
                background:"#f3e9f3",
                "border-top": '2px solid black',
            })

        }else {
            //追加主体iframe
            var html = '';
            html += " <div id=\"\"  class=\"tabs-body-iframe\">   ";
            html += "  <iframe class=\"reader-iframe\" src=\"\"></iframe> "
            html +=" </div>"
            //前端html追加iframe
            $(".body_right").append(html);
            $(".tabs-body-iframe").last().attr("id",dataName)  //为最新加的ifram块添加唯一id标识
            $(addId).children(".reader-iframe").attr("src",htmlPath)
            //隐藏其他的iframe，显示这个iframe
            $(".tabs-body-iframe").hide();
            $(addId).show();

            //追加顶部图标
            var topTitleHtml = "<li class=\"tab-title-ico\">\n" +
                "                        <span></span>\n" +
                "                        <img src=\"../IMG/secendTop/closeTitle.png\">\n" +
                "                    </li>"
            $("#tab-title").append(topTitleHtml)    //前端追加图标
            dataName +="ico";   //顶部图标设置唯一id以面后面操作css会冲突
            $(".tab-title-ico").last().children('span').html(htmlTitleName)   //给图标中span赋文字
            $(".tab-title-ico").last().attr("id",dataName)
           // 为最新添加的顶部图标设置css,先取消其他的图标css样式 不要用#table li因为会覆盖鼠标悬停样式
            $("#tab-title").children('li').css({
                background: "none" ,
                "border-top":"2px solid white"
            })
            $(".tab-title-ico").last().css({    //为最新添加的图标添加css样式
                background:"#f3e9f3",
                "border-top": '2px solid black',
            })


        }
    })

})

