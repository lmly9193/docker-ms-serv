var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    qm.sendNext("�@�A�٤����ܡH �p�G�Aı�o�ݭn�i�@�B�V�m�A���H�N������h���F��C �p�G�A���F�Ҧ����H�A�Y�϶ˤF�ڪ��ߡA�ڤ]�u�n�ݵ۹��A�]���L�̬��@�ӫܦn���ƳQ�묹...");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("�{�b�A�A�N�i��̫���աA�H�T�w�A�O�_�A�X�C �A�ݭn�����O�����b�o�Ӯq�W�̱j�j���Ǫ�#o0100134#. �j��#r50#k���A��...");
    } else if (status == 1) {
	qm.askAcceptDecline("�ڭ̤������A��������#o0100134#�A�L�̼ƥؤ��h�C5���p��O? �A�b�o�̰V�m�A���n�}�a�ͺA���C");
    } else if (status == 2) {
	qm.forceStartQuest();
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
