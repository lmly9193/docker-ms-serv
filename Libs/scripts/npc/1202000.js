/*
 * Tutorial Lirin
 */

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
if (cm.getPlayer().getMapId() != 140090000) {
if (status == 0) {
	cm.sendSimple("等等! 下面列出的信息等你10級後可以獲得，所以不需要提前了解。 只有想要提前了解才要從這裡開始 \n\r 好的，哪一個是你想先了解的?  \n\r #b#L1#Minimap#l \n\r #b#L2#任務欄#l \n\r #b#L3#物品欄#l \n\r #b#L4#攻擊#l \n\r #b#L5#Picking up items#l \n\r #b#L6#裝備欄#l \n\r #b#L7#技能欄#l \n\r #b#L8#如何使用技能快捷鍵#l \n\r #b#L9#打箱子#l \n\r #b#L10#坐椅子#l \n\r #b#L11#提高能力值#l");
} else {
    cm.summonMsg(selection);
    cm.dispose();
}
} else {
    if (cm.getInfoQuest(21019).equals("")) {
	if (status == 0) {
	    cm.sendNext("你終於醒了！");
	} else if (status == 1) {
	    cm.sendNextPrevS("...妳是誰?", 2);
	} else if (status == 2) {
	    cm.sendNextPrev("我一直在等你醒來。等待著曾與#r黑巫師#k戰鬥英雄醒來!就是你...");
	} else if (status == 3) {
	    cm.sendNextPrevS("等等，妳再說什麼??", 2);
	} else if (status == 4) {
	    cm.sendNextPrevS("兒...等等...我是誰?我不記得任何事了。我...我頭好痛!!", 2);
	} else if (status == 5) {
	    cm.updateInfoQuest(21019, "helper=clear");
	    cm.showWZEffect("Effect/Direction1.img/aranTutorial/face");
	    cm.showWZEffect("Effect/Direction1.img/aranTutorial/ClickLirin");
	    cm.playerSummonHint(true);
	    cm.dispose();
	}
    } else {
	if (status == 0) {
	    cm.sendNext("你還好嗎?");
	} else if (status == 1) {
	    cm.sendNextPrevS("我...不記得任何事了...我在哪裡?你是誰?", 2);
	} else if (status == 2) {
	    cm.sendNextPrev("放輕鬆。可能是#b黑巫師#k的詛咒讓你沒有任何記憶。別擔心，我會好好跟你解釋的。");
	} else if (status == 3) {
	    cm.sendNextPrev("幾百年前，你曾是這裡的英雄。你和你的夥伴為了拯救世界曾與#r黑巫師#k在這裡戰鬥過，當你們封印它時，可能給你下了詛咒使你凍結，也有可能這原因使你沒記憶...");
	} else if (status == 4) {
	    cm.sendNextPrev("你目前在一個叫做#b瑞恩#k的島上，這裡已經被#r黑巫師#k詛咒了。由於被詛咒的關係，這座島一直以來下著雪總是被雪蓋住。而我們就發現你在洞穴的深處。");
	} else if (status == 5) {
	    cm.sendNextPrev("我的名子叫#b莉琳#k，是瑞恩種族。我們一直盼望著你的歸來，現在終於有希望了!你就站在這，站在我們的面前...");
	} else if (status == 6) {
	    cm.sendNextPrev("我可能一次給你太多訊息了...抱歉...因為我太興奮了，哈哈。如果你還搞不懂，沒關係。等等到了城鎮，你還是可以找到我。");
	} else if (status == 7) {
	    cm.playerSummonHint(true);
	    cm.warp(140090100, 1);
	    cm.dispose();
	}
    }
}
}