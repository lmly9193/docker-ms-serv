var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("你還沒準備好去追捕#o0100132#嗎? 好吧等你完全準備好時再去吧。但時間不等人...");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("是否繼續進行基礎訊練？ 在接受之前，請確保你已經妥善裝備了你的武器、技能和藥水");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
