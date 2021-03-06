var status = -1;
//polearm booster, combo ability, polearm mastery, final charge, combo smash, combo drain, full swing
function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("#b(你需要時間想一下...)#k");
	    qm.dispose();
	    return;
	} else if (status == 2) {
	    qm.MovieClipIntroUI(true);
	    qm.warp(914090100, 0);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendYesNo("#b(你想確定你是否是揮舞著#p1201001#的英雄?哈哈!當然，你當然是... 你最好，好好的緊握住我(#p1201001#)。)#k");
    } else if (status == 1) {
	if (qm.getJob() == 2000) {
	    qm.changeJob(2100);
	    qm.forceCompleteQuest();
	    qm.resetStats(35, 4, 4, 4);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(2, 4);
	    qm.expandInventory(3, 4);
	    qm.expandInventory(4, 4);
	    qm.gainItem(1142129, 1);
	    qm.forceCompleteQuest(29924); //medal
	    qm.sendNextS("#b(我好像想起什麼了...)#k", 3);
	}
    } else if (status == 2) {
	qm.sendYesNoS("你要跳過視頻剪輯嗎？ 即使你跳過場景，遊戲也不會受到影響。", 1);
    } else if (status == 3) {
	qm.warp(140000000, 0)
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
