var username,password;
function login(){
  
    username = $('.name').val();
    password = $('.password').val();
    var code = $(".code").val();
    var code01 = $("#code").val();
    if(code!=code01){  //验证码输入不正确
        alert("验证码输入不正确！");
    }else{
        $.ajax({
            type: "post",
            url: "http://localhost:8080/reader/login",
            data:JSON.stringify({
                name:username,
                password:password,
            }),
            // data:{
            //     username:username,
            //     password:password,
            // },
            
            contentType:"application/json;charset=UTF-8",
            // jsonp:"callback",  //Jquery生成验证参数的名称
            success: function (response) {
                alert(response);
                if(response=='true'){
                    window.location.href="/HTML/appList.html";
                }else{
                    alert("用户名或密码错误");
                }
                
            },
            error:function(){
                alert("错误！")
            }
        });  //ajax结束
    }
   

    // if (username=="glf"&&password=="123") {   //模拟查询后台登陆
    //     window.location.href="/HTML/demo01.html";
    // } else {
    //     alert("请输入正确的用户名和密码");
    // }
}

function loginIframe(){
    $(".registSpan").css({   //取消注册文字下划线
        "border-bottom": "none",
    });
    $(".loginSpan").css({  //添加登陆文字下划线
        "border-bottom":"4px solid #1629b5",
    });
 
    $("#LoginIframe").css({  //恢复隐藏的登陆iframe
        "display":"block",  
        "z-index":"2",
    });

    $("#RegistIframe").css({   //隐藏注册iframe
        "display":"none",
    });

    
}

function registIframe(){
    $(".loginSpan").css({   //取消登陆下划线
        "border-bottom": "none",
    });

    $(".registSpan").css({  //添加注册下划线
        "border-bottom":"4px solid #1629b5",
    });
 
    $("#LoginIframe").css({  //隐藏loginiframe
        "display":"none",  
        "z-index":"0",
    });

    $("#RegistIframe").css({  //显示注册iframe
        "display":"block",
    });


}