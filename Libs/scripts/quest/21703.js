var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 6) {
	    qm.sendNext("我知道一個難以置信的力量，並且會超過你的導師，但你不是要讓自己消失。 你必須走上更好的事情！ 你必須竭盡全力擁抱你的英雄能力！");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("你的能力真的開始成長了。我很驚訝，像我這樣的老人能夠幫助你。 我只是在想著能夠幫助你是多麼好的一件事。 *唉~*");
    } else if (status == 1) {
	qm.sendNextPrevS("#b(你和他的訓練沒很久......為什麼他在哭?)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrev("好的，這是訓練的第三個階段也是最後一個階段。你最後的對手是... #r#o9300343##k!你知道關於#o1210100#的事嗎?");
    } else if (status == 3) {
	qm.sendNextPrevS('好像...只有一點點...', 2);
    } else if (status == 4) {
	qm.sendNextPrev("他們是天生的戰士！ 他們出生時對食物的渴望很大。 他們吞噬任何東西，只要一瞬間任何東西都會被吞食。很可怕，不是嗎");
    } else if (status == 5) {
	qm.sendNextPrevS("#b(這是真的嗎?)#k", 2);
    } else if (status == 6) {
	qm.askAcceptDecline("好吧，現在 #b再進去一次訓練場#k, 打敗#r30#k隻#o9300343#，展你你的能力！你必須竭盡全力打敗他們！ 衝啊！ 超越我吧！");
    } else if (status == 7) {
	qm.forceStartQuest();
	qm.sendOk("現在去解決#o9300343#吧!");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("你是不想離開導師嗎? *啜泣* 我好感動，但你不能一直待在這。 你有更重要的事要做!");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("啊，你打敗了30隻#o9300343#，且回來了... 我可以從你身上知道...即使你忘了任何東西，還是能發會出力量!為什麼?因為你是使用矛的勇士，而你正在使用他...!");
    } else if (status == 1) {
	qm.sendNextPrevS("#b(他是在拉著你的腿嗎?)#k'", 2);
    } else if (status == 2) {
	qm.sendYesNo("我沒有什麼可以教你的，因為你已經超過了我的能力了。 現在出發！ 不要回頭！ 我這位老人很高興成為你的導師。");
    } else if (status == 3) {
	if (qm.getQuestStatus(21703) == 1) {
	    qm.forceCompleteQuest();
	    qm.teachSkill(21000000, qm.getPlayer().getSkillLevel(21000000), 10);   // Combo Ability Skill
	    qm.gainExp(2800);
	}
	qm.sendNextS("(你想起了#b矛之鬥氣#k!你開始相信這位導師的訓練了...)", 2);
	qm.AranTutInstructionalBubble("Effect/BasicEff.img/AranGetSkill");
    } else if (status == 4) {
	qm.sendPrev("現在回去回報#p1201000#，我相信他知道你進步了，一定會為你感到驕傲。");
	qm.dispose();
    }
}