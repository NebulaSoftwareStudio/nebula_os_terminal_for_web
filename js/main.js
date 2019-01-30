/**
 * Created by Bainesing with PhpStorm on 2017/10/15.
 */
jQuery(window).load(function(){

    /**
     * 第一部分 输出系统初始化信息
     */
    $('#cursor').before('<p class="log" id="start_command">欢迎使用 Nebula OS 1.01<br/>' +
        '版权所有 &copy;2019 nebula software studio 保留所有权利。</p>');
    setTimeout(function () {
        $('#cursor').before('<br/><span class="log">正在启动指令系统服务模块 ... </span>');
    }, 800);

    /**
     * 执行主入口
     */
    //检查是否安装桌面环境
    var desktop = getCookie("desktop");
    if(desktop === 'Orwell'){
        setTimeout(function () {
            $('#cursor').before('<br/><span class="unselect_log">您已安装 Orwell 桌面环境，正在启动 Orwell >>><br/></span>');
            $('#cursor').before('<br/><span class="unselect_log">外部环境加载完成，正在启动....<br/></span>');
        }, 5000);
        setTimeout(function () {
            //引入Orwell图形化桌面环境外部js文件
            $.getScript("js/Orwell.js",function(){  //加载 Orwell.js 成功后，执行回调函数
                $('#cursor').before('<br/><span class="unselect_log">外部环境加载完成，正在启动....<br/></span>');
            });
        }, 6000);
    }
    else if(desktop === 'hacknet'){
        setTimeout(function () {
            $('#cursor').before('<br/><span class="unselect_log">您已安装 hacknet 桌面环境，正在启动 hacknet >>><br/></span>');
        }, 5000);
        setTimeout(function () {
            //引入hacknet图形化桌面环境外部js文件
            $.getScript("js/Orwell.js",function(){  //加载 hacknet.js 成功后，执行回调函数
                $('#cursor').before('<br/><span class="unselect_log">外部环境加载完成，正在启动....<br/></span>');
            });
        }, 6000);
    }
    else{
        //没有桌面环境
        //初始化一个空的字符串变量，用于记录键入的命令
        var apply = "";
        //初始化一个空的字符串变量，用于记录上一次键入的命令。
        var last_apply = "";

        setTimeout(function () {
            $('#cursor').before('<br/><span class="unselect_log">完成！现在您可以通过键入指令操作计算机。' +
                '如要知悉指令相关信息，请键入help指令名。<br/></span>');
        }, 5000);
        setTimeout(function () {
            $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
            //开始键盘监听。
            keyLinsener();
        }, 5000);
    }


    /**
     * 第二部分 键盘监听函式
     * 用户按键盘上的键或组合键，函式进行相应的响应。
     */
    function keyLinsener() {
        document.onkeydown=function(event){
            var e = event || window.event || arguments.callee.caller.arguments[0];

            //单【字母】按键事件
            if (e.keyCode == 65 /*&& e.ctrlKey*/) {
                $('#cursor').before('a');
                apply+="a";
            }
            else if(e.keyCode == 66){
                $('#cursor').before('b');
                apply+="b";
            }
            else if(e.keyCode == 67){
                $('#cursor').before('c');
                apply+="c";
            }
            else if(e.keyCode == 68){
                $('#cursor').before('d');
                apply+="d";
            }
            else if(e.keyCode == 69){
                $('#cursor').before('e');
                apply+="e";
            }
            else if(e.keyCode == 70){
                $('#cursor').before('f');
                apply+="f";
            }
            else if(e.keyCode == 71){
                $('#cursor').before('g');
                apply+="g";
            }
            else if(e.keyCode == 72){
                $('#cursor').before('h');
                apply+="h";
            }
            else if(e.keyCode == 73){
                $('#cursor').before('i');
                apply+="i";
            }
            else if(e.keyCode == 74){
                $('#cursor').before('j');
                apply+="j";
            }
            else if(e.keyCode == 75){
                $('#cursor').before('k');
                apply+="k";
            }
            else if(e.keyCode == 76){
                $('#cursor').before('l');
                apply+="l";
            }
            else if(e.keyCode == 77){
                $('#cursor').before('m');
                apply+="m";
            }
            else if(e.keyCode == 78){
                $('#cursor').before('n');
                apply+="n";
            }
            else if(e.keyCode == 79){
                $('#cursor').before('o');
                apply+="o";
            }
            else if(e.keyCode == 80){
                $('#cursor').before('p');
                apply+="p";
            }
            else if(e.keyCode == 81){
                $('#cursor').before('q');
                apply+="q";
            }
            else if(e.keyCode == 82){
                $('#cursor').before('r');
                apply+="r";
            }
            else if(e.keyCode == 83){
                $('#cursor').before('s');
                apply+="s";
            }
            else if(e.keyCode == 84){
                $('#cursor').before('t');
                apply+="t";
            }
            else if(e.keyCode == 85){
                $('#cursor').before('u');
                apply+="u";
            }
            else if(e.keyCode == 86){
                $('#cursor').before('v');
                apply+="v";
            }
            else if(e.keyCode == 87){
                $('#cursor').before('w');
                apply+="w";
            }
            else if(e.keyCode == 88){
                $('#cursor').before('x');
                apply+="x";
            }
            else if(e.keyCode == 89){
                $('#cursor').before('y');
                apply+="y";
            }
            else if(e.keyCode == 90){
                $('#cursor').before('z');
                apply+="z";
            }

            //单【数字】按键事件
            else if(e.keyCode == 48 || e.keyCode == 96){
                $('#cursor').before('0');
                apply+="0";
            }
            else if(e.keyCode == 49 || e.keyCode == 97){
                $('#cursor').before('1');
                apply+="1";
            }
            else if(e.keyCode == 50 || e.keyCode == 98){
                $('#cursor').before('2');
                apply+="2";
            }
            else if(e.keyCode == 51 || e.keyCode == 99){
                $('#cursor').before('3');
                apply+="3";
            }
            else if(e.keyCode == 52 || e.keyCode == 100){
                $('#cursor').before('4');
                apply+="4";
            }
            else if(e.keyCode == 53 || e.keyCode == 101){
                $('#cursor').before('5');
                apply+="5";
            }
            else if(e.keyCode == 54 || e.keyCode == 102){
                $('#cursor').before('6');
                apply+="6";
            }
            else if(e.keyCode == 55 || e.keyCode == 103){
                $('#cursor').before('7');
                apply+="7";
            }
            else if(e.keyCode == 56 || e.keyCode == 104){
                $('#cursor').before('8');
                apply+="8";
            }
            else if(e.keyCode == 57 || e.keyCode == 105){
                $('#cursor').before('9');
                apply+="9";
            }

            //单【符号】按键事件
            else if(e.keyCode == 106){
                $('#cursor').before('*');
                apply+="*";
            }
            else if(e.keyCode == 109 || e.keyCode == 189){
                $('#cursor').before('-');
                apply+="-";
            }
            else if(e.keyCode == 110 ||e.keyCode == 190){
                $('#cursor').before('.');
                apply+=".";
            }
            else if(e.keyCode == 111 ||e.keyCode == 191){
                $('#cursor').before('/');
                apply+="/";
            }

            //按空格
            else if(e.keyCode == 32){
                $('#cursor').before(' ');
                apply+=" ";
            }

            //按backspace删除
            else if(e.keyCode == 8){
                /** 删除的思路：
                 * 1、判断apply字符串，如果不为空，则可以继续删除。如果为空，什么都不做。
                 * 2、删除字符串使用.before方法找到元素，删除元素的同时要记得同时对apply字符串进行操作。**/
                /***
                 * 字符串：var s = "1,2,3,4,5,"
                 目标：删除最后一个 ","
                 方法：
                 s=s.substring(0,s.length-1)；
                 字符串：var s2 = "img/upload/123.jpg"
                 目标：获取文件名(不包含后缀名)
                 方法：
                 s2=s2.substring(s2.lastIndexOf('/')+1, s2.lastIndexOf('.'));
                 * */
                //先判断apply是不是空的
                if (apply===""){
                    //什么都不做
                }
                else{
                    //删除一个字
                    apply=apply.substring(0,apply.length-1);
                    $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
                    $('#cursor').before(apply);
                    //获取目前的内容高度
                    var h = $(document).height()- $(window).height();
                    //滚到最底端。
                    $(document).scrollTop(h);
                }
            }

            /**
             * 第三部分 判断用户指令
             * 根据apply变量记录的值做出相应判断。
             */
            //按回车
            else if(e.keyCode == 13){
                var cd_apply = apply.substr(0,2);
                var soft_apply = apply.substr(0,4);
                //判断用户到底输入了什么命令

                //如果是空的（直接回车了）：
                if(apply==""){
                    $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
                }
                //用户需要帮助！（输入了help）
                else if(apply=="help") {
                    $('#cursor').before("<br/>目前 Nebula OS 支持以下指令：" +
                        "<br/>&emsp; help &emsp;&emsp;&emsp; 知悉所有指令相关信息。" +
                        "<br/>&emsp;&emsp; > 某指令 -[help]&emsp;&emsp;知悉某指令的下层指令；" +
                        "<br/>&emsp;&emsp; > 某指令 -[help] -l &emsp;&emsp;知悉某指令下层指令详情；" +
                        "<br/>&emsp; exit &emsp;&emsp;&emsp; 退出当前进行的指令，或使用 [ Ctrl+C ] 组合键。" +
                        "<br/>&emsp; shutdown &emsp;&emsp;&emsp; 关闭所有正在运行的指令并延时（30秒）关闭 Nebula OS 。" +
                        "<br/>&emsp;&emsp; > shutdown now &emsp;&emsp;立即关闭 Nebula OS ；" +
                        "<br/>&emsp;&emsp; > shutdown -t [time] &emsp;&emsp;在指定时间之后关闭 Nebula OS ；" +
                        "<br/>&emsp; restart &emsp;&emsp;&emsp; 重新启动 Nebula OS 。" +
                        "<br/>&emsp; clean &emsp;&emsp;&emsp; 清除当前屏幕指令与log内容，或使用 [ Ctrl+L ] 组合键。" +
                        "<br/>&emsp; ps &emsp;&emsp;&emsp; 查看正在运行的进程。" +
                        "<br/>&emsp; doge &emsp;&emsp;&emsp; 看一眼嘛。" +
                        "<br/>&emsp;&emsp; > doge -flash &emsp;&emsp; 看……看一眼嘛；" +
                        "<br/>&emsp; fullscreen &emsp;&emsp;&emsp; 进入 Nebula OS 全屏模式。" +
                        "<br/>&emsp;&emsp; > fullscreen -q &emsp;&emsp; 退出 Nebula OS 全屏模式；" +
                        "<br/>&emsp; soft &emsp;&emsp;&emsp; 列表或安装 Nebula OS 软件" +
                        "<br/>&emsp;&emsp; > soft list [*] &emsp;&emsp; 列出指定的软件列表；" +
                        "<br/>&emsp;&emsp; > soft install [*] &emsp;&emsp; 安装指定的软件；" +
                        "<br/>&emsp;&emsp; > soft remove [*] &emsp;&emsp; 卸载指定的软件。" +
                        "<br/>&emsp; about &emsp;&emsp;&emsp; 关于 Nebula OS" +
                        "<br/><br/>请继续键入指令或按 Enter 键继续：");
                }
                //用户要关机（输入了shutdown相关）
                else if(apply==="shutdown"){
                    $('#cursor').before("<br/>Nebula OS 将在30秒后关闭。");
                    setTimeout(shutdownOs(), 800);
                }
                else if(apply === "shutdown now"){
                    shutdownOs();
                }
                //用户觉得屏幕满满的（输入了clean指令）
                else if(apply==="clean"){
                    clean();
                }
                //用户要退出
                else if(apply==="exit"){
                    exit();
                    $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
                }
                //刷新？
                else if(apply === "restart"){
                    window.location.reload();
                }
                //当前任务
                else if(apply === "ps"){
                    $('#cursor').before("<br/>&emsp;&emsp;编号&emsp;终端&emsp;&emsp;时间&emsp;任务名" +
                        "<br/>&emsp;&emsp;"+(bash_ps = parseInt(Math.random()*10000))+"&emsp;pts/0&emsp;&emsp;00:00:00&emsp;bash" +
                        "<br/>&emsp;&emsp;"+(bash_ps+1234)+"&emsp;pts/0&emsp;&emsp;00:00:00&emsp;ps");
                    $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
                }
                //想要最高权限？金坷垃你们别想啦！
                else if(apply==="sudo passwd"){
                    $('#cursor').before("<br/>您没有权限使用这个命令。");
                    $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
                }
                else if(apply==="fullscreen"){
                    $('#cursor').before("<br/>进入全屏幕……");
                    requestFullScreen();
                    $('#cursor').before("<br/><span class='important_log'>完成。</span>");
                    $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
                }
                else if(apply==="fullscreen -q"){
                    $('#cursor').before("<br/>要退出全屏幕模式，请按 [ ESC ] 。");
                    $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
                }
                //用户要看狗
                else if(apply === "doge"){
                    echo_doge();
                }
                //用户要看闪烁的狗
                else if(apply === "doge -flash"){
                    echo_flash_doge();
                }
                else if(apply === "about"){
                    about();
                }

                //切换目录
                else if (cd_apply === "cd"){
                    var cd_index_apply = apply.substr(3,apply.length-3);
                    $('#cursor').before("<br/>很抱歉，您没有权限切换到“ "+cd_index_apply+" ”目录。");
                    $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
                }


                //列出软件
                else if (soft_apply === "soft"){

                    if(apply.substr(0,12) === "soft install"){
                        var software = apply.substr(12,apply.length-12);
                        software = software.replace(" ","");
                        if(software === ''){
                            $('#cursor').before("<br/>您所输入的软件包为空，安装程序停止...");
                            $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
                        }
                        else if(software === 'orwell-os' || software === 'hacknet'){
                            //设置Cookie
                            if(software === 'orwell-os'){
                                document.cookie="desktop=Orwell";
                            }
                            else if(software === 'hacknet'){
                                document.cookie="desktop=hacknet";
                            }
                            //输出安装状态
                            $('#cursor').before("<br/>已查找到软件包 "+software+" ...");
                            setTimeout(function () {
                                $('#cursor').before("<br/>正在安装 "+software+" ...");
                            }, 100);
                            setTimeout(function () {
                                $('#cursor').before("<br/>……&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8%");
                            }, 200);
                            setTimeout(function () {
                                $('#cursor').before("<br/>……………&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21%");
                            }, 400);
                            setTimeout(function () {
                                $('#cursor').before("<br/>…………………………&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;48%");
                            }, 800);
                            setTimeout(function () {
                                $('#cursor').before("<br/>……………………………………………………&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;78%");
                            }, 1000);
                            setTimeout(function () {
                                $('#cursor').before("<br/>……………………………………………………………&nbsp;&nbsp;&nbsp;&nbsp;96%");
                            }, 2000);
                            setTimeout(function () {
                                $('#cursor').before("<br/>………………………………………………………………&nbsp;正在完成安装...");
                            }, 3000);
                            setTimeout(function () {
                                $('#cursor').before("<br/>"+software+" 安装完成，正在重启 Nebula OS 。若长时间未响应，请手动重启操作系统。");
                                $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
                            }, 3300);
                            setTimeout(function () {
                                //重启
                                restart()
                            }, 6000);

                        }
                        else{
                            $('#cursor').before("<br/>您所输入的软件包“"+software+"”不存在，请检查输入。");
                            $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
                        }

                    }
                    else if(apply.substr(0,11) === "soft remove"){
                        var software = apply.substr(11,apply.length-11);
                        alert("即将安装"+software);
                        $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
                    }
                    else if(apply.substr(0,9) === "soft list"){
                        var software = apply.substr(9,apply.length-9);
                        $('#cursor').before("<br/>可用的软件包：");
                        $('#cursor').before("<table style='text-align: left;'>" +
                            "<tbody>" +
                            "<tr><th>软件名称</th><th>可用的版本号</th><th>开发商</th></tr>" +
                            "<tr><td style='padding: 0 20px 0 0;'>Orwell-OS</td><td style='padding: 0 20px 0 0;'>V1.0.1_build_19334_alpha</td><td style='padding: 0 20px 0 0;'>Nebula_SoftWare_Studio</td></tr>" +
                            "<tr><td style='padding: 0 20px 0 0;'>HackNet</td><td style='padding: 0 20px 0 0;'>V1.0.1_build_00102_alpha</td><td style='padding: 0 20px 0 0;'>Nebula_SoftWare_Studio</td></tr>" +
                            "</tbody>" +
                            "</table>");
                        $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
                    }
                    else{
                        $('#cursor').before("<br/>您的 soft 指令不完整。");
                        $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
                    }
                    // var cd_index_apply = apply.substr(3,apply.length-3);
                    // $('#cursor').before("<br/>很抱歉，您没有权限切换到“ "+cd_index_apply+" ”目录。");
                    // $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
                }





                //默认测试指令，调试用的
                else if (apply == "test"){
                    var demo = "cd 23333232323";
                    var cd = demo.substr(0, 2) ;
                    var cd_demo = demo.substr(3);
                    $('#cursor').before("<br/>"+cd_demo+"，"+cd);
                }



                //用户输入的命令与以上所有命令都不符：
                else{
                    $('#cursor').before("<br/>您输入的指令：“"+apply+"”不是 Nebula OS 可以识别的指令。请检查拼写是否正确，" +
                        "然后再试一次。<br/>如要知悉指令相关信息，请键入help指令名。");
                    $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
                }
                //记录这次的指令：
                last_apply = apply;
                //清空记录命令的字符串变量，用于记录下一次用户输入的指令。
                apply="";
                //获取目前的内容高度
                var h = document.body.clientHeight- window.innerHeight;
                //滚到最底端。
                document.documentElement.scrollTop = h;
            }
        };
    }

    //===========关机NOS================
    function shutdownOs() {
        if (navigator.userAgent.indexOf("MSIE") > 0) {
            if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                $('#cursor').before('<br/>再见。');
                window.opener = null; window.close();
            }
            else {
                $('#cursor').before('<br/>再见。');
                window.open('', '_top'); window.top.close();
            }
        }
        else if (navigator.userAgent.indexOf("Firefox") > 0) {
            $('#cursor').before('<br/>再见。');
            window.location.href = 'about:blank '; //火狐默认状态非window.open的页面window.close是无效的
        }
        else if (navigator.userAgent.indexOf("Chrome") > 0) {
            $('#cursor').before('<br/>再见。');
            window.opener = null;
            window.open('', '_self', '');
            window.close();
            $('#cursor').before('<br/>Chrome浏览器无法有效支持关闭指令，请手动关闭浏览器窗口。');
            $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
        }
        else {
            $('#cursor').before('<br/>再见。');
            window.opener = null;
            window.open('', '_self', '');
            window.close();
        }
    }

    //===========清屏================
    function clean() {
        document.getElementById('terminal').innerHTML = "<span class=\"cursor\" id=\"cursor\">|</span>";
        $('#cursor').before("<span class=\"command\">C:\\System\\bin\\software > </span>");
    }
    function exit() {
        $('#cursor').before("<br/>您当前没有运行任何指令或任务。");
    }


    //===========全屏================
    /**
     * 封装后兼容主流浏览器用法，且支持某个指定的元素全屏，支持class、id查询。默认是对整个网页全屏。调用方法：
     * 直接调用：
     requestFullScreen();
     * 对某标签元素
     requestFullScreen('body');
     * 对某查询id元素
     requestFullScreen('#main');
     */
    //进入全屏
    function requestFullScreen(element) {
        var de = document.querySelector(element) || document.documentElement;
        if (de.requestFullscreen) {
            de.requestFullscreen();
        } else if (de.mozRequestFullScreen) {
            de.mozRequestFullScreen();
        } else if (de.webkitRequestFullScreen) {
            de.webkitRequestFullScreen();
        }
    }
    //退出全屏
    function exitFullscreen(element) {
        var de = document.querySelector(element) || document.documentElement;
        if (de.exitFullscreen) {
            de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
            de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
            de.webkitCancelFullScreen();
        }
    }

    //输出doge
    function echo_doge() {
        $('#cursor').before(
            '<br/>░░░░░░░█▐▓▓░████▄▄▄█▀▄▓▓▓▌█' +
            '<br/>░░░░░▄█▌▀▄▓▓▄▄▄▄▀▀▀▄▓▓▓▓▓▌█' +
            '<br/>░░░▄█▀▀▄▓█▓▓▓▓▓▓▓▓▓▓▓▓▀░▓▌█' +
            '<br/>░░█▀▄▓▓▓███▓▓▓███▓▓▓▄░░▄▓▌█' +
            '<br/>░█▌▓▓▓▀▀▓▓▓▓███▓▓▓▓▓▓▓▄▀▓▓▐█' +
            '<br/>▐█▐██▐░▄▓▓▓▓▓▀▄░▀▓▓▓▓▓▓▓▓▓▌█▌' +
            '<br/>█▌███▓▓▓▓▓▓▓▓▐░░▄▓▓███▓▓▓▄▀▐█' +
            '<br/>█▐█▓▀░░▀▓▓▓▓▓▓▓▓▓██████▓▓▓▓▐█' +
            '<br/>▌▓▄▌▀░▀░▐▀█▄▓▓██████████▓▓▓▌█▌' +
            '<br/>▌▓▓▓▄▄▀▀▓▓▓▀▓▓▓▓▓▓▓▓█▓█▓█▓▓▌█▌' +
            '<br/>█▐▓▓▓▓▓▓▄▄▄▓▓▓▓▓▓█▓█▓█▓█▓▓▓▐' +
            '<br/>============DOGE============');
        $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
    }
    function echo_flash_doge() {
        $('#cursor').before(
            '<span class="important_log"> ' +
            '<br/>░░░░░░░█▐▓▓░████▄▄▄█▀▄▓▓▓▌█' +
            '<br/>░░░░░▄█▌▀▄▓▓▄▄▄▄▀▀▀▄▓▓▓▓▓▌█' +
            '<br/>░░░▄█▀▀▄▓█▓▓▓▓▓▓▓▓▓▓▓▓▀░▓▌█' +
            '<br/>░░█▀▄▓▓▓███▓▓▓███▓▓▓▄░░▄▓▌█' +
            '<br/>░█▌▓▓▓▀▀▓▓▓▓███▓▓▓▓▓▓▓▄▀▓▓▐█' +
            '<br/>▐█▐██▐░▄▓▓▓▓▓▀▄░▀▓▓▓▓▓▓▓▓▓▌█▌' +
            '<br/>█▌███▓▓▓▓▓▓▓▓▐░░▄▓▓███▓▓▓▄▀▐█' +
            '<br/>█▐█▓▀░░▀▓▓▓▓▓▓▓▓▓██████▓▓▓▓▐█' +
            '<br/>▌▓▄▌▀░▀░▐▀█▄▓▓██████████▓▓▓▌█▌' +
            '<br/>▌▓▓▓▄▄▀▀▓▓▓▀▓▓▓▓▓▓▓▓█▓█▓█▓▓▌█▌' +
            '<br/>█▐▓▓▓▓▓▓▄▄▄▓▓▓▓▓▓█▓█▓█▓█▓▓▓▐' +
            '</span>' +
            '<br/>============DOGE============');
        $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
    }

    //重启
    function restart(){
        window.location.reload();
    }

    //关于
    function about() {
        $('#cursor').before('<p class="log" id="start_command">欢迎使用 Nebula OS 1.01<br/>' +
            '版权所有 &copy;2019 nebula software studio 保留所有权利。</p>');
        $('#cursor').before('<br/>本项目开放源代码，项目基于 Apache License 2.0 协议授权。您可前往<a class="command_link" href="https://github.com/NebulaSoftwareStudio/NebulaOSTerminalforWeb" target="_blank">Github</a>查看。');
        $('#cursor').before('<br/><span class="command">C:\\System\\bin\\software \> </span>');
    }

    //获取Cookie
    function getCookie(c_name) {
        if (document.cookie.length>0) {
            c_start=document.cookie.indexOf(c_name + "=");
            if (c_start!==-1) {
                c_start=c_start + c_name.length+1;
                c_end=document.cookie.indexOf(";",c_start);
                if (c_end===-1) c_end=document.cookie.length;
                return unescape(document.cookie.substring(c_start,c_end))
            }
        }
        return ""
    }

});