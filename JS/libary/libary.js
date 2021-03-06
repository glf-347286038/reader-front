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



$(document).ready(function () {

    //展开或隐藏左侧导航栏二级标题
    $("#side-menu li a").click(function(){
        //注意选中的标签，如果选中的是li li包含了展开的二级标题，再次点击二级标题，会收起
        //1.获得左侧导航栏是隐藏还是伸缩的，如果是隐藏的状态要改为展开状态
        var leftNavstatus = $(".stretch").attr("src")
        if(leftNavstatus=="../IMG/firstTop/showLeftNav.png"){
            checkLeftNavStatus(leftNavstatus)
        }
        //2.获取左侧导航栏一级标题的展开或者收缩状态，获取点击的li中右边的图标src判断当前状态
        var status = $(this).children(".li-more").attr("src");
        if(status=="../IMG/收起.png"){
            //当前图片箭头朝上 为展开状态  显示收起状态图片 点击则将子菜单隐藏 图片变为箭头朝下
            $(this).children(".li-more").attr("src","../IMG/展开.png");
            $(this).next(".nav-child").slideToggle(300);
        }else{
            //当前图片箭头朝下 为收起状态 点击的话显示出隐藏内容
            //1.修改右边图标
            $(this).children(".li-more").attr("src","../IMG/收起.png");
            //2.展开 时间为300毫秒
            $(this).next(".nav-child").slideToggle(300);
        }
    });



    //判断展开或收起左侧导航栏，通过展开伸缩左侧导航栏按钮名判断
    function checkLeftNavStatus(status) {
        if(status=="../IMG/firstTop/hiddenLeftNav.png"){
            //当前为展开状态，显示的是可以隐藏按钮
            //将左侧导航栏向左滑动剩余60px
            $('.body_left').animate({width:'60px'},350);
            //修改状态图片
            $(".stretch").attr("src","../IMG/firstTop/showLeftNav.png");
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
            $(".body_right").css({
                width: "95.6%",
            })
            $(".firstTop-nav-left").css({
                width:"95%"
            })
        }else {
            //当前状态为影藏左侧dao航栏 显示的是展开图片

            //修改状态图片
            $(".stretch").attr("src","../IMG/firstTop/hiddenLeftNav.png");

            $(".usernameSpan").css({
                display:"block",
            })
            //将左侧导航栏的所有字体、展开图标、二级标题显示
            // $(".atag cite,.li-more").css({
            //     display:"inline",
            // });
            $('.atag cite,.li-more').fadeIn(900);  //设置元素淡入时间


            //将最顶部导航栏\顶部标签栏\右侧主体 设置距离左边220px
            $(".body_top,.page_tabs,.body_right").css({
                left:"220px"
            })

            $(".mainImgList").css({
                width:"77.4%",
            })

            //将左侧导航栏向右滑动宽度变为220px
            $('.body_left').animate({width:'220px'},250);
            $(".body_right").css({
                width: "83.9%",
            })
            $(".firstTop-nav-left").css({
                width:"84%"
            })

        }
        // $(".body_left").animate({right:'50px'});
    }
    //为展开收缩按钮添加点击事件
    $(".stretch").click(function () {
        //1.判断当前状态
        var status = $(this).attr("src")
        checkLeftNavStatus(status)
    })
})


//1.点击左侧导航栏主页切换iframe  2.且添加顶部标签栏title
$(document).on("click",".child-this",function(){
    //1.点击左侧导航栏主页切换iframe data-name作为新增的div块id
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

        }else {   //该页面没有被打开
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
            var titleIco =dataName+"ico";   //顶部图标设置唯一id以面后面操作css会冲突
            $(".tab-title-ico").last().children('span').html(htmlTitleName)   //给图标中span赋文字
            $(".tab-title-ico").last().attr("id",titleIco)
           // 为最新添加的顶部图标设置css,先取消其他的图标css样式 会覆盖之前的css hover样式
            $("#tab-title").children('li').css({
                background: "none" ,
                "border-top":"2px solid white"
            })

            $(".tab-title-ico").last().css({    //为最新添加的图标添加css样式
                background:"#f3e9f3",
                "border-top":"2px solid black"
            })
            // titleIco="#"+titleIco
            // $(titleIco).hover(function(){
            //     $(titleIco).css({  //为新增的顶部按钮添加悬停时事件   设置css优先级就可以解决了
            //         background:"#f3e9f3",
            //         "border-top": '2px solid black',
            //     });
            // },function(){
            //     $(titleIco).css({   //移开时事件
            //         background: "none" ,
            //         "border-top":"2px solid white"
            //     });
            // });
        }
    })




//点击顶部导航切换页面iframe 左侧导航背景改变 顶部导航图标css改变
$(document).on("click","#tab-title li",function(){
    var index = $(this).index()
    //隐藏其他iframe 显示点击的Iframe
    $(".body_right .tabs-body-iframe").eq(index).show().siblings().hide()

    //改变兄弟元素的图标
    $(this).siblings().css({
        background:"none",
        "border-top": "2px solid white",
    })
    //给当前图标加元素
    $(this).css({
        background:"#f3e9f3",
        "border-top": "2px solid black",
    })
    // $(this).css({

    // })
});