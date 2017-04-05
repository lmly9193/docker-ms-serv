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
	qm.sendNextS("和導師訓練得如何?我相你他有幫助到你。", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(你告訴她，你想起了一項技能。)#k", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("那很棒！但老實說，我認為這與#p1202006#的訓練方法沒有什麼關係，有關係的是你喚醒你身體的記憶。#b我相信，當你繼續訓練時，你的身體會喚醒更多的技能#k!  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 500 exp");
    } else if (status == 3) {
	qm.forceCompleteQuest();
	qm.gainExp(500);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}