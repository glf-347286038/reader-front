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


  //为所有a标签添加元素
  // $(".child-this").click(function(){
  //     //获得当前元素为a的子标签中的内容
  //     var path = $(this).children("a").attr("path")
  //     alert(path)
  //   $(".reader-iframe").attr("src","/HTML/LibaryIfram/user/roleManage.html")
  // })

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


var mybook = "/HTML/LibaryIfram/book/myBook.html";
var array = new Array();
array.push(mybook)
//主页切换iframe
$(document).ready(function () {
    //为左侧导航栏所有按纽添加函数
    var html = '';
    html += " <div class=\"tabs-body-iframe\">   ";
    html += "  <iframe class=\"reader-iframe\" src=\"\"></iframe> "
    html +=" </div>"
    $(".child-this").click(function () {
        var htmlPath = $(this).attr("path");
        //遍历数组
        $.each(array,function (i) {
            if (array[i]==htmlPath){
                alert("存在了")
            } else {
                array.push(htmlPath);  //将新添加的页面路径加入数组中
                $(".body_right").append(html);   //前端html追加
                var index01= $(".tabs-body-iframe").index();
                alert(index01)
                $(".tabs-body-iframe").children()
                $(".tabs-body-iframe").children(".reader-iframe").attr("src",htmlPath)
                // $(".tabs-body-iframe").hide()
            }
        })



        //
        // ($(".tabs-body-iframe").children(".reader-iframe").attr("src")==(dataName)).show()

    })

})

