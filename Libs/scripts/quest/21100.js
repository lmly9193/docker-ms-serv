var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 6) {
	    qm.sendNext("哦，還不夠嗎？ 如果你覺得需要進一步訓練，請隨意殺死更多的東西。 如果你殺了所有的人，即使傷了我的心，我也只好看著對方，因為他們為一個很好的事被犧牲...");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("與#r黑魔法師#k戰鬥的記載訊息不多。即使在#b預言書#k中，只記載有5為英雄，而他們的是誰和背景並沒有詳細說明。你有記得什麼嗎?", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("我不記得了...", 2);
    } else if (status == 2) {
	qm.sendNextPrevS("也是...不過我們相信你是5位英雄其中之一。然而，我們知道你在戰鬥中失去了裝備和武器，但是...哦#b(莉琳好像想到什麼)#k，是的，是的。我差點忘了!!你的#b武器#k...", 8);
    } else if (status == 3) {
	qm.sendNextPrevS("我的武器?", 2);
    } else if (status == 4) {
	qm.sendNextPrevS("我們在附近的冰塊裡，發現一個不可思議的武器。 我認為這個武器屬於5位其中一位英雄的，所以我把它帶到了鎮上，把它放在了鎮中心的某個地方。 你沒看到嗎?一個#b#p1201001##k... \r\r#i4032372#\r\r它就像這樣...", 8);
    } else if (status == 5) {
	qm.sendNextPrevS("我想一下，有我有看到一個#p1201001#在城市裡。", 2);
    } else if (status == 6) {
	qm.askAcceptDecline("對!!就是它。根據記載，英雄的武器會認主人的，如果你是#p1201001#的主人,當你拿起#p1201001#，#p1201001#應該會有反應。去拿看看#b#p1201001##k，搞不好會有什麼事發生...");
    } else if (status == 7) {
	if (qm.getQuestStatus(21100) == 0) {
	    qm.forceCompleteQuest();
	}
	qm.sendOkS("如果#p1201001#對你有反應，那我們就能確認你是傳說中#b亞蘭(狂狼勇士)#k，那位英雄就是揮舞著#p1201001#。", 8);
	qm.showWZEffect("Effect/Direction1.img/aranTutorial/ClickPoleArm");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
