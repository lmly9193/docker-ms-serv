var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("�A�٨S�ǳƦn�h�l��#o0100132#��? �n�a���A�����ǳƦn�ɦA�h�a�C���ɶ������H...");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("�O�_�~��i���¦�T�m�H �b�������e�A�нT�O�A�w�g�����˳ƤF�A���Z���B�ޯ�M�Ĥ�");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
