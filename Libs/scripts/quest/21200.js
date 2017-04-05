var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("真的很緊急，不能拒絕，不然你會後悔...。你與你的#b戰矛#k有關，意味著他可知道你的過去。誰知道...?搞不好他是你喚醒你能力的關鍵...?");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("訓練進行的如何？ 哇，看著你，我可以告訴你的實力已經更高了。 那真是太棒了，不管怎樣，我知道你很忙，但是你務必回到島上。");
    } else if (status == 1) {
	qm.forceStartQuest(21200); //??
	qm.sendOk("你的#b矛壁#k 一直保持在#b瑞嗯#k但他出奇怪的反應。根據書上，當他需要主人時就會有反應。");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 11) {
	    qm.sendNext("嘿，至少你告訴我你試過了！");
	    qm.dispose();
	    return;
	} else if (status == 13) {
	    qm.MovieClipIntroUI(true);
	    qm.warp(914090200, 0);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("嗚...... ... ...嗚嗯......", 2);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(巨矛嗡嗡作響，突然有個男孩站在那裡?)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrevS("#b(我從未看過他，他是誰?他看起來一點也不像人類...)#k", 2);
    } else if (status == 3) {
	qm.sendNextPrev("啊! 亞蘭! 你有聽到我說話嗎? 沒聽見嗎? 啊~! 氣死人了!");
    } else if (status == 4) {
	qm.sendNextPrevS("#b(咦?這是誰的聲音，聽起來像兇惡的少年...)#k", 2);
    } else if (status == 5) {
	qm.sendNextPrev("哎呀...沒想到主人醒來後，就把武器丟著不管，現在也聽不到我...?");
    } else if (status == 6) {
	qm.sendNextPrevS("你是誰?", 2);
    } else if (status == 7) {
	qm.sendNextPrev("亞蘭? 你聽的道我說話了? 是我啊!你的武器#b矛 瑪哈!#k!");
    } else if (status == 8) {
	qm.sendNextPrevS("#b(...瑪哈?巨大的矛會說話嗎?)#k", 2);
    } else if (status == 9) {
	qm.sendNextPrev("什麼嗎?真不敢相信，忘的也太徹底了吧?怎麼會有這種事啊?");
    } else if (status == 10) {
	qm.sendNextPrevS("我很抱歉...我真的什麼都不記得了...", 2);
    } else if (status == 11) {
	qm.sendYesNo("你以為對不起就可以了嗎!? 你知道這幾百年來我很孤獨嗎...?不管怎樣你一定要給我想起來!!");
    } else if (status == 12) {
	qm.sendNextS("#b(自己說是巨大的矛 瑪哈...真奇怪... 不管了，先去找莉琳。)#k", 2);
	qm.forceCompleteQuest();
    } else if (status == 13) {
	qm.sendYesNo("你要跳過動畫嗎?");
    } else if (status == 14) {
	qm.dispose();
    }
}