var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("什麼？ 我不認為那個孩子以外還有嫌犯。 請再想一想。");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("你和#p1032112#說話了嗎?", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(你告訴她#p1032112#所看到的事情。)#k", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("一個有木偶的孩子？ 這似乎很可疑，我相信這個孩子是綠色蘑菇突然變得暴力的原因。");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendNextS("這個孩子怎麼敢在南方森林裡肆虐。 誰知道恢復森林需要多長時間？我大部分時間必須清理這些混亂。", 2);
    } else if (status == 4) {
	qm.sendPrevS("#b(您已經了解造成綠色蘑菇變化的原因。你應該向#p1002104#報告並且提供您收集的信息。)#k", 2);
    } else if (status == 5) {
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}