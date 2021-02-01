/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----
var cdn = https://cdn.jsdelivr.net/gh/lear315/OwnCDN@1.0.3/ggj2021/";
loadLib(cdn + "libs/laya.core.js")
loadLib("libs/laya.wxmini.js")
loadLib(cdn + "libs/laya.html.js")
loadLib(cdn + "libs/laya.ui.js")
loadLib(cdn + "libs/laya.d3.js")
loadLib(cdn + "libs/fairygui.js")
loadLib(cdn + "libs/laya.physics3D.js")
loadLib(cdn + "libs/laya.physics.js")
//loadLib(cdn + "libs/vconsole.min.js")
//loadLib(cdn + "libs/behavior3js.js")
//-----libs-end-------
loadLib("js/bundle.js");
