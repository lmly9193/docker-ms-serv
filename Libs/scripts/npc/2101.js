/* Author: Xterminator
	NPC Name: 		Heena
	Map(s): 		Maple Road : Lower level of the Training Camp (2)
	Description: 		Takes you outside of Training Camp
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.sendOk("你還沒完成訓練嗎?如果你想離開這個地方，就直接告訴我吧!");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendYesNo("你完成你的訓練了嗎?我可以帶你離開這裡。");
    } else if (status == 1) {
	cm.sendNext("做得好!");
    } else if (status == 2) {
	cm.warp(3, 0);
	cm.dispose();
    }
}