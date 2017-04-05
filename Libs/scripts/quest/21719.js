var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("你不是我在#m101000000#所看的人嗎?我終於找到你了！ 你可知道我找你找了好久了？", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("你是誰?", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("我? 如果你想知道，來我的洞穴吧! 我邀請你... 一旦你接受，你就會直接被傳送到我的洞穴。我們在那相見!");
    } else if (status == 3) {
	qm.forceCompleteQuest();
	qm.warp(910510200, 0);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}