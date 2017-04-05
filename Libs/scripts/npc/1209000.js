var status = -1;

function action(mode, type, selection) {
    if (cm.getQuestStatus(21002) == 0) {
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	if (status == 0) {
	    cm.sendNext("哦!#b亞蘭(狂狼勇士)#k，你終於醒了!你受傷了?你知道現在發生什麼事情嗎?");
	} else if (status == 1) {
	    cm.sendNextPrev("我們已經準備要離開此地前往維多利亞島了。");
	} else if (status == 2) {
	    cm.sendNextPrev("亞蘭的夥伴?嗯...好吧，你的夥伴們已經去和#r黑巫師#k戰鬥了。正當黑巫師攻擊我們時，你的夥伴們決定為我們爭取逃跑時間，去和#r黑巫師#k對抗了。什麼!?你要去幫助他們?不!!不行，你受傷了!你應該跟著我們一起離開...");
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
	    cm.sendSimple("現在我的狀況非常緊急，你想知道什麼? \r #b#L0#黑巫師在哪?#l \r #b#L1#逃跑的計畫?#l \r #b#L2#我的夥伴情況?#l");
	} else if (status == 1) {
	    switch (selection) {
		case 0:
		    cm.sendOk("目前看來#r黑巫師#k距離我們不遠的地方。森林中的龍已經被#r黑巫師#k控制了，要從森林離開是不可能的。所以我們才利用方舟作為我們的逃脫方法，我們唯一離開這能去的地方就是前往維多利亞島。");
		    break;
		case 1:
		    cm.sendOk("所有人已經準備好離開此地，大家已經都快上船了。在飛行中，#b神鳥#k保護我們。");
		    break;
		case 2:
		    cm.sendOk("你的夥伴已經前往去和#r黑巫師#k戰鬥了。因為你受傷了，所以他們決定不讓你餐與戰鬥。#b亞蘭(狂狼勇士)#k你應當和我們離開!");
		    break;
	    }
	    cm.safeDispose();
	}
    }
}