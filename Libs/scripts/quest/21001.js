var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("不~!#b亞蘭(狂狼勇士)#k不要把我一個人留在這...TAT");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("哦(顫抖)我......好害怕...在這裡。拜託，帶我去#b赫莉娜．皮爾斯#k那裡!");
    } else if (status == 1) {
	if (qm.getQuestStatus(21001) == 0) {
	    qm.gainItem(4001271, 1);
	    qm.forceStartQuest(21001, null);
	}
	qm.warp(914000300, 0);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("那孩子在哪?如果孩子在你這，請把他交給我!");
	    qm.dispose();
	    return;
	} else if (status == 8) { // watching the introduction
	    if (qm.haveItem(4001271)) {
		qm.gainItem(4001271, -1);
	    }
	    qm.MovieClipIntroUI(true);
	    qm.forceCompleteQuest();
	    qm.warp(914090010, 0);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendYesNo("阿~，你安全了!那孩子呢?有怎麼樣嗎?在哪?");
    } else if (status == 1) {
	qm.sendNext("...哦，真的感謝你!");
    } else if (status == 2) {
	qm.sendNextPrevS("立刻上船!我們沒有多餘的時間了...", 3);
    } else if (status == 3) {
	qm.sendNextPrev("是的是的，我們沒有太多時間。我可以感覺到#r黑魔法師#k的力量越來越大，我有一種不好的預感，感覺#r黑魔法師#k已經快找到方舟了!如果我們現在不離開，那就慘了!");
    } else if (status == 4) {
	qm.sendNextPrevS("Leave now!", 3);
    } else if (status == 5) {
	qm.sendNextPrev("#b亞蘭(狂狼勇士)#k!立刻上船!我知道你鄉幫助你的夥伴和他們一起奮戰，但一切都太晚了!讓你的朋友好好對付#b黑魔法師#k...你現在應該上船，逃到維多利亞島!");
    } else if (status == 6) {
	qm.sendNextPrevS("不，我不能這麼做!", 3);
    } else if (status == 7) {
	qm.sendNextPrevS("#b赫莉娜．皮爾斯#k，妳好好照顧他們，並前往維多利亞島。我答應妳，我不會死!我很快就會在那見到妳。我必須幫助我的夥伴，一起並肩作戰且永遠與#r黑魔法師#k戰鬥!", 3);
    } else if (status == 8) {
	qm.sendYesNo("你想跳過視頻嗎?");
    } else if (status == 9) { // Not watching
	if (qm.haveItem(4001271)) {
	    qm.gainItem(4001271, -1);
	}
	qm.forceCompleteQuest();
	qm.warp(140090000, 0);
	qm.dispose();
    }
}