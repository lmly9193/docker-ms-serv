/*
 * The return of the Hero
 * Rien Cold Forest 1
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 3) {
	    qm.sendNext("不不不，你不能說不要。不管怎麼說，這只是個藥水。此外，像你這樣的英雄，我可以隨時幫助你。但如果你改變主意，請讓我知道!");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("嗯...?你是什麼人怎麼在這?等等...嘿!是莉琳!!這個人是誰? 哦!莉琳你認識他?什麼?一個英雄?...");
    } else if (status == 1) {
	qm.sendNextPrev("#i4001170#");
    } else if (status == 2) {
	qm.sendNextPrev("等等，所以我現正看著妳一直以來在等待的那個妳口中的英雄?哇!不過...他看起來有點虛弱...");
    } else if (status == 3) {
	qm.askAcceptDecline("可能是#r黑巫師#k詛咒的關係。 #b來!這是一種恢復藥水，請拿著#k。");
    } else if (status == 4) { // TODO HP set to half
	qm.sendNext("然後，把它喝了，我們再繼續談吧!");
	qm.gainItem(2000022, 1);
	qm.forceStartQuest();
    } else if (status == 5) {
	qm.sendNextPrevS("#b(等等，這要怎麼喝?我忘了......)#k", 3);
    } else if (status == 6) {
	qm.summonMsg(0xE);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendNext("我一直在洞穴裡收尋任何的冰塊，希望能找到我們的英雄，但是...我並不認為他會是真的存在!看來預言是真的!#b莉琳#k，妳是對的!現在英雄回來了，我們應該不用再擔心#r黑巫師#k了吧?");
    } else if (status == 1) {
	qm.sendNextPrev("等等，抱歉，我一直抱著你，哈哈!但我敢打賭，其他的企鵝也會有像我一樣的反應。#b請去與其他企鵝打交道#k。如果你和他們對話的話，他們一定很震驚，哈哈...\n\r #fUI/UIWindow.img/QuestIcon/4/0# \r #i2000022# #t2000022# 5 \r #i2000023# #t2000023# 5 \n\r #fUI/UIWindow.img/QuestIcon/8/0# 16 exp");
    } else if (status == 2) {
	qm.sendNextPrev("哇，你升級了!在這個世界只要升等，就會獲得3點技能點。請按下 #bK#k 開啟技能欄。");
	if (qm.getQuestStatus(21010) == 1) {
	    qm.gainExp(16);
	    qm.gainItem(2000022, 5);
	    qm.gainItem(2000023, 5);
	    qm.forceCompleteQuest();
	}
    } else if (status == 3) {
	qm.sendNextPrevS("#b(這些企鵝看起來很和善，但我根本不記得他們了...)#k");
    } else if (status == 4) {
	qm.summonMsg(0xF);
	qm.dispose();
    }
}