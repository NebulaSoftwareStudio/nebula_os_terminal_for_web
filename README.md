# Nebula OS Terminal for Web：一个没有实际用途的 Operating System 模拟器。

### 概述

 Nebula OS Terminal for Web 只是一个在浏览器上玩的小“终端模拟器”，没有实际功能。

目前  Nebula OS Terminal for Web 支持以下指令：（注*为本版本新增指令）
>  help     知悉所有指令相关信息。<br/>
>   \> 某指令 -\[help\]  知悉某指令的下层指令；<br/>
>   \> 某指令 -\[help\] -l   知悉某指令下层指令详情；
>
>  exit     退出当前进行的指令，或使用 \[ Ctrl+C \] 组合键。
>
>  shutdown     关闭所有正在运行的指令并关闭 Nebula OS 。<br/>
>   \> shutdown now   立即关闭计算机；<br/>
>   \> shutdown -t \[time\]   在指定时间之后关闭 Nebula OS；
>
>  clean     清除当前屏幕指令与log内容 
>
>  restart     重新启动 Nebula OS 。
>
>   ps     查看正在运行的进程。
>
>   doge     看一眼嘛。 <br/>
>    \> doge -flash    看……看一眼嘛； 
>
>   fullscreen     进入 Nebula OS 全屏模式。 <br/>
>    \> fullscreen -q    退出 Nebula OS 全屏模式； 
>
>   soft     Nebula OS 软件包管理器 *<br/>
>    \> soft list    列出所有可用的软件列表 *
>    \> soft install \[name\]    安装指定的软件包 *
>    \> soft remove \[name\]    卸载指定的软件包 *
>
>   about     关于 Nebula OS   *<br/>

欢迎 Star 或 fork ~

### 请注意
目前我们只支持PC或自带键盘的设备输入指令，相对于Android、iOS等使用虚拟键盘的用户，我就没办法了。因为我这里用的js判断用户的按键事件，然后输出一个字符而已。

> 打个比方，你按下了A键，那么js拿到的是一个数值，表示这个键，然后程序会根据这个值输出字符。如果我设定的字符是B，那么你按A键，屏幕会输出一个B。

### 更新记录
#### V1.01 build 00003
> 1、新增功能：soft指令；<br/>
> 2、新增功能：about指令；<br/>
> 3、兼容软件安装操作。
#### V1.01 build 00002
> 1、新增功能：restart、ps、doge*、fullscreen指令；别问我doge是什么；<br/>
> 2、仍然不支持PC等自带实体键盘之外的设备。<br/>
> 3、样式更新，修改光标的闪烁方式，新增important log的提示方式（闪烁）
#### V1.01 build 00001
> 1、建立基础框架与外观（css3+jQuery+html）；<br/>
> 2、目前不支持help中的exit、shutdown和clean命令，后期会添加支持。<br/>
> 3、不支持PC等自带实体键盘之外的设备，虚拟键盘无能为力。


### 开放源代码许可
本项目使用了jQuery库，有关Jquery 技术细节 与其 开放源代码许可 请造访[jQuery网站](http://jquery.com/)。

本项目遵循[ Apache License Version 2.0 ](https://github.com/NebulaSoftwareStudio/NebulaOSTerminalforWeb/blob/master/LICENSE)许可协议。