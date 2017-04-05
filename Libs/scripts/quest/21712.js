var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("你不明白發生什麼事了嗎?和我再次對話我會跟你解釋。");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("#t4032315#... #r這個木偶會發出奇怪的噪音#k。 你的耳多聽不到? 當然，只有#o1210102#能夠聽得到。 我像是這是#o1210102#發出的變異的聲音。");
    } else if (status == 1) {
	qm.askAcceptDecline("這些#o1210102#受到噪音的影響已經變得憤世嫉俗。他們已經開始打擊不受影響的#o1210102#，這使得所有的#o1210102#已經開始準備戰鬥。#b#o1210102#的變化是因為這個木偶#k!你明白了嗎?");
    } else if (status == 2) {
	qm.forceStartQuest();
	qm.sendNextS("我不知道是什麼觸發了這一點。這個傀儡是沒有辦法自然創造的，這意味著有人計劃這個。我應該繼續注意#o1210102#。", 9);
    } else if (status == 3) {
	qm.sendPrevS("#b(你弄清楚了導致#o1210102#的變化，你應該向#p1002104#報告並且提供您收集的信息。)#k", 2);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}