/**
	Konpei - Near the Hideout(801040000)
*/

function start() {
    cm.sendYesNo("你想要前往#b維多利亞港#k嗎?");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("來吧!跟著我出發!!!!!");
    } else {
	cm.warp(104000000,0);
    }
    cm.dispose();
}