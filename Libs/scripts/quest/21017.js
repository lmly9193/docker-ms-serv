var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 5) {
	    qm.sendNextS("#b(你要拒絕恐懼，但不是逃跑。先吸一口氣，冷靜下來，再試一次...)#k", 2);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("看來你現在已經熱身完了。 這是嚴格的訓練是可以幫助你建立堅實的基礎。 我們繼續進行，走吧？", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("是時候去擊敗一些#r#o0100133##k在#b#m140020200##k。我相信#r20#k之應該難不倒你。去吧然後... 嗯?  你有什麼想說的嗎?", 8);
    } else if (status == 2) {
	qm.sendNextPrevS("怎麼越打越多隻?", 2);
    } else if (status == 3) {
	qm.sendNextPrevS("當然!!不然呢?這是訓練，要訓練當然要一次比一次難，一次比一次多啊...", 8);
    } else if (status == 4) {
	qm.sendNextPrevS("不~好多...", 2);
    } else if (status == 5) {
	qm.askAcceptDecline("別這樣!你想想，什麼樣的態度能讓你成為一個英雄?");
    } else if (status == 6) {
	qm.forceStartQuest();
	qm.sendNextS('#b(你接受了，別再多說了不然他又要碎碎唸...)#k', 2);
    } else if (status == 7) {
	qm.sendNextPrevS('請繼續，殺死20隻#o0100133#完成任務。', 8);
    } else if (status == 8) {
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
