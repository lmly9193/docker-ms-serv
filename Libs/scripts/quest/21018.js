var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    qm.sendNext("哦，還不夠嗎？ 如果你覺得需要進一步訓練，請隨意殺死更多的東西。 如果你殺了所有的人，即使傷了我的心，我也只好看著對方，因為他們為一個很好的事被犧牲...");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("現在，你將進行最後測試，以確定你是否適合。 你需要做的是消滅在這個島上最強大的怪物#o0100134#. 大約#r50#k隻，但...");
    } else if (status == 1) {
	qm.askAcceptDecline("我們不能讓你完全消滅#o0100134#，他們數目不多。5隻如何呢? 你在這裡訓練，不要破壞生態阿。");
    } else if (status == 2) {
	qm.forceStartQuest();
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
