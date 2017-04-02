var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("不!#b亞蘭#k...如果我們離開把孩子自己留在這裡，這不是我們離開的原因。我知道我話很多，但是請重新考慮!");
	    qm.dispose();
	    return;
	}
	status--
    }
    if (status == 0) {
	qm.askAcceptDecline("等等!!少了一個孩子...孩子在哪?喔不，他一定被困在森林裡!我們需要帶回那孩子在方舟離開之前#b亞蘭#k...拜託找到那孩子!我知道你受傷了，但你是我們唯一的希望!");
    } else if (status == 1) {
	qm.forceStartQuest(21000); // Idk what data lol..
	qm.forceStartQuest(21000); // Twice, intended..
	qm.sendNext("#b那孩子可能在森林的抹一個地方#k，你必須在#r黑魔法師#k找到我們之前離開，所以請快點!!!");
    } else if (status == 1) {
	qm.sendNextPrev("現在最重要的是不要緊張，#b亞蘭(狂狼勇士)#k。你可以按下#bQ#k打開任務欄，看看任務的位置。");
    } else if (status == 2) {
	qm.sendNextPrev("#b亞蘭(狂狼勇士)#k!請救出孩子，我們不能再有人受到#r黑魔法師#k的傷害了!");
    } else if (status == 3) {
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}