var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("不~#b亞蘭#k...我們不能把任何人留在這裡，尤其是孩子。大家都要離開!!我知道我話很多，但拜託請重新考慮!!");
	    qm.dispose();
	    return;
	}
	status--
    }
    if (status == 0) {
	qm.askAcceptDecline("等等!!少了一個孩子，那小孩在哪!?不!!他一定被困在森林了...#b亞蘭#k我們需要那孩子平安地到這裡。我知道你受傷了，但你是唯一的希望能找到那孩子並保護他，拜託了!");
    } else if (status == 1) {
	qm.forceStartQuest(21000); // Idk what data lol..
	qm.forceStartQuest(21000); // Twice, intended..
	qm.sendNext("#b那孩子應該在森林深處的某個地方#k!我們必須要在#r黑巫師#k找到我們之前離開這，所以趕快找到那孩子!");
    } else if (status == 1) {
	qm.sendNextPrev("現在最重要的是不要驚慌，#b亞蘭#k。如果你想知道任務位置，請按下鍵盤#bQ#k打開任務視窗欄。");
    } else if (status == 2) {
	qm.sendNextPrev("請救救那孩子!我們不能再因為#r黑巫師#k，而受到傷害了!!");
    } else if (status == 3) {
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}