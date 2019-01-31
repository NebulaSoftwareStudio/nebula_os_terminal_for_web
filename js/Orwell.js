/**
 * edit by Hanawa Hinata
 * on 2018-10-24
 */
document.write("<link rel='stylesheet' href='css/orwell.css'/>");
document.write("<div id='orwell_main_box' class='orwell-main_background wait_cursor'></div>");




/*3秒后加载完成，输出动态的图标和声音，变换鼠标样式*/
setTimeout(function () {
    document.getElementById("orwell_main_box").innerHTML += "<div id='left_icon_box' class='left_icon_box'>" +
        "<div class='orwell_icon show_orwell_icon'></div>" +
        "</div>" ;
    $("#orwell_main_box").attr("class","orwell-main_background default_cursor");
    document.write("<audio id='background_music' src='http://video.anlalive.com/main_music.mp3' loop autoplay></audio>");
    document.write("<audio id='type_sound' src='' autoplay></audio>");
    setTimeout(function () {
        document.getElementById("left_icon_box").innerHTML = "<div class='orwell_icon'></div><div class='orwell_name hide_to_show'>ORWELL</div></div>" ;
    }, 2254);
    setTimeout(function () {
        document.getElementById("left_icon_box").innerHTML = "<div class='orwell_icon'></div><div class='orwell_name'>ORWELL</div></div>" ;
        document.getElementById("orwell_main_box").innerHTML += "<div id='orwell_content' class='orwell_content hide_to_show'>" +
            "<div class='orwell_welcome '><span class='orwell_welcome_main'>欢迎，</span><br/><span class='orwell_welcome_sub'>您的工作将有助于捍卫国家安全</span></div>" +
            "</div>";
        // document.getElementById("orwell_content").innerHTML = "" ;
    }, 2754);
    setTimeout(function () {
        document.getElementById("orwell_content").innerHTML += "";
    }, 3254);
    setTimeout(function () {
        document.getElementById("orwell_main_box").innerHTML += "<div class='function_box'>" +
            "<img src='images/orwell/icons/setting.png' class='function_button' alt='setting' />" +
            "<img src='images/orwell/icons/exit.png' class='function_button' style='margin-left: 50px;' alt='exit' />" +
            "</div>";
    }, 3754);
}, 3000);




