var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    qm.sendNext("我相信它會在你的旅途中派上用場。 請不要拒絕我的好意。");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendSimple("阿，你是那位英雄，我一直想和你見面 \r\n#b#L0#(看起來有點害羞...)#l");
    } else if (status == 1) {
	qm.askAcceptDecline("我想給你一個禮物已經想了好久了...我知道你很忙，特別是你要去城鎮的路上，但你會接受我的禮物吧?");
    } else if (status == 2) {
	qm.forceStartQuest();
	qm.sendNextS("禮物的材料在附近的一個盒子裡。 對不起，可以麻煩你破盒子給我一些#b#t4032309##k和一些#b#t4032310##k嗎? 我會馬上組裝起來的...", 1);
    } else if (status == 3) {
	qm.summonMsg(18);
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
	qm.sendNext("啊，你帶來了所有的材料。給我幾秒鐘的時間來組裝它們...像這樣...而且...和... \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010062# 1 #t3010062# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 exp");
    } else if (status == 1) {
	if (qm.getQuestStatus(21013) == 1) {
	    qm.gainItem(3010062, 1);
	    qm.gainExp(95);
	    qm.forceCompleteQuest();
	}
	qm.sendNextPrevS("這裡，一個舒服的椅子，這是獨一無二！我一直想把椅子作為給你的禮物，因為我知道一個英雄偶爾也需要休息。嘻嘻。", 1);
    } else if (status == 2) {
	qm.sendNextPrevS("英雄不是無敵的。之後肯定會面對挑戰，甚至有時候會搖擺不定。但你是一個英雄，所以需要克服任何可能遇到的障礙。", 1);
    } else if (status == 3) {
	qm.summonMsg(19);
	qm.dispose();
    }
}