function start(mode, type, selection) {
    qm.dispose();
}

var status = -1;

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 4) {
	    qm.sendNext("*sniff sniff* Isn''t this sword good enough for you, just for now? I''d be so honored...");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	if (qm.getQuestStatus(21011) == 0) {
	    qm.forceStartQuest();
	    qm.dispose();
	    return;
	}
	qm.sendNext("等等，你是...不可能...你是#b莉琳#k一直在說的那位英雄#b(狂狼勇士)#k嗎?#b莉琳#k!不要只會點頭...親口告訴我!這是妳一直以來等待的那位英雄嗎?");
    } else if (status == 1) {
	qm.sendNextPrev("#i4001171#");
    } else if (status == 2) {
	qm.sendNextPrev("我...我很抱歉。我只是在壓抑我的情緒...(聞了一下)我的天!!妳一定很開心，#b莉琳#k。");
    } else if (status == 3) {
	qm.sendNextPrev("等等...你沒攜帶武器。我記得每位英雄都有他專屬的武器。哦，你一定是在戰鬥中失去了...");
    } else if (status == 4) {
	qm.sendYesNo("這不足以和你的武器相比，但#b現在攜帶這把劍#k。這是我給你的禮物，不要嫌棄它。 \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1302000# 1 #t1302000# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 exp");
    } else if (status == 5) {
	if (qm.getQuestStatus(21011) == 1) {
	    qm.gainItem(1302000, 1);
	    qm.gainExp(35);
	}
	qm.forceCompleteQuest();
	qm.sendNextPrevS("#b(劍?武器?這要如何使用...)#k", 3);
    } else if (status == 6) {
	qm.summonMsg(16); // How to equip shiet
	qm.dispose();
    }
}