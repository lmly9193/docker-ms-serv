var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("你怎麼這麼猶豫？你是一個英雄！你必須訓練，而訓練是好的！來吧，完成它吧！");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("好的，我已經做了足夠的解釋。讓我們進入下一個階段。下一步是什麼？ 我剛剛告訴過你了。要盡可能訓練，直到你變得足夠強大，才能夠打敗黑魔法師。");
    } else if (status == 1) {
	qm.sendNextPrev("過去你可能是一個英雄，但那是數百年前的事。即使不是黑魔法師的詛咒，那些凍結的時間，都會使你的身體僵硬和能力下降。你必須訓練，慢慢恢復你的能力。你說?要怎麼做?");
    } else if (status == 2) {
	qm.askAcceptDecline("你知道必須先掌握基礎知識嗎？所以明智的做法是從#b基礎訓練#k開始。哦，我知道你忘記所有事了。那麼這就是為什麼我出現在這裡。 你必需要自己體驗一下。那我們開始吧？");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
