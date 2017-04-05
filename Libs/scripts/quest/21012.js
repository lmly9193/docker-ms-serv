var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("嗯，你不覺得會有幫助嗎？ 想想看，它應該可以幫助，你知道...");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("歡迎回來英雄!什麼?你想知道我為什麼知道你來了?哈哈，我有偷偷聽到你的事情。我相信，這件事已經傳騙了整個#b瑞恩#k島嶼了。大家都知道你已經回來啦!!");
    } else if (status == 1) {
	qm.sendNextPrev("怎麼?你為什麼拉長著臉?有問題嗎?恩?你不知道你是否是真的英雄?哦~你失去你的記憶了?沒辦法...一定是被困在冰裡太久了，腦袋都被凍壞了...");
    } else if (status == 2) {
	qm.askAcceptDecline("嗯...你有試著拿那把劍嗎?沒事發生?好吧!還記的如何在戰鬥中使用武器攻擊嗎?你可以去獵殺一些怪物回來嗎?");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendNext("在這附近有很多 #r#o9300383##k. 你可以去獵殺#r3#k隻? 搞不可以幫助你想起幾件事...");
    } else if (status == 4) {
	qm.sendNextPrevS("阿，你也忘記如何使用技能?#b你可以把技能#r(K)#b放到快捷鍵上，可以更方便的使用技能，當然你的消耗品#r(I)#b也可以放在快捷鍵中，方便使用#k。", 1);
    } else if (status == 5) {
	qm.summonMsg(17);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("什麼?你不想要?");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendYesNo("嗯...你的表情告訴我，這項任務沒有回想起任何事。 但不要擔心最後一定會想起來的！ \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# 10 #t2000022# \r\n#i2000023# 10 #t2000023# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 57 exp");
    } else if (status == 1) {
	qm.gainItem(2000022, 10);
	qm.gainItem(2000023, 10);
	qm.gainExp(57);
	qm.forceCompleteQuest();
	qm.sendOkS("#b(即使你是真的英雄，但大家都說目前沒能力有什麼用...)#k", 2);
	qm.dispose();
    }
}