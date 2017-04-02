var status = -1;

function action(mode, type, selection) {
    if (cm.getQuestStatus(21002) == 0) {
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	if (status == 0) {
	    cm.sendNext("嘿!亞蘭(狂狼勇士)你終於醒了! 什麼你受傷了?...  你想知道現在發生什麼事情嗎?");
	} else if (status == 1) {
	    cm.sendNextPrev("我們已經準備好要離開這個地方了。大家都已經上了方舟，在方舟飛行中會有神鳥保護我們，所以別太擔心。一旦我們確定了一切，我們會繼續前往維多利亞島。");
	} else if (status == 2) {
	    cm.sendNextPrev("亞蘭(狂狼勇士)夥伴...? 好吧... 他們去和#r黑魔法師#k戰鬥了。當我們準備要逃跑時，它們決定和黑魔法師戰鬥並且封印他。什麼!?你想加入他們?不行!沒辦法，你已經受傷了你應該要上船跟我們一起走...");
	} else if (status == 3) {
	    cm.forceStartQuest(21002, "1");
	    // Ahh, Oh No. The kid is missing
	    cm.showWZEffect("Effect/Direction1.img/aranTutorial/Trio");
	    cm.dispose();
	}
    } else {
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	if (status == 0) {
	    cm.sendSimple("我們現在狀態緊急，你想知道什麼? \r #b#L0#黑魔法師在哪?#l \r #b#L1#如何離開這?#l \r #b#L2#我的夥伴呢?#l");
	} else if (status == 1) {
	    switch (selection) {
		case 0:
		    cm.sendOk("我聽說現在#r黑魔法師#k正在靠近我們的地方。因為#r黑魔法師#k控制了所有龍的關係，甚至不可能從森林逃出.正因為這樣，所以我們才想出利用方舟作為我們的逃生路線。離開這裡的唯一方法就是飛往#b維多利亞島#k。");
		    break;
		case 1:
		    cm.sendOk("在方舟上的每一個人，都準備好離開這個地方了。當人都上船了，我們就要立刻前往#b維多利亞島#k。在空中神鳥會保護我們。");
		    break;
		case 2:
		    cm.sendOk("你的夥伴...為了幫助我們有足夠的時間逃離這，已經去和#r黑魔法師#k戰鬥了。他們決定不讓你去，因為你受傷了，他們希望妳可以和我們一起離開。亞蘭!一旦救了孩子，你應該和我們一起離開。");
		    break;
	    }
	    cm.safeDispose();
	}
    }
}