var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 5) {
	    qm.sendNextS("#b(�A�n�ڵ����ߡA�����O�k�]�C���l�@�f��A�N�R�U�ӡA�A�դ@��...)#k", 2);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("�ݨӧA�{�b�w�g�������F�C �o�O�Y�檺�V�m�O�i�H���U�A�إ߰�ꪺ��¦�C �ڭ��~��i��A���a�H", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("�O�ɭԥh���Ѥ@��#r#o0100133##k�b#b#m140020200##k�C�ڬ۫H#r20#k�����������˧A�C�h�a�M��... ��?  �A������Q������?", 8);
    } else if (status == 2) {
	qm.sendNextPrevS("���V���V�h��?", 2);
    } else if (status == 3) {
	qm.sendNextPrevS("��M!!���M�O?�o�O�V�m�A�n�V�m��M�n�@����@�����A�@����@���h��...", 8);
    } else if (status == 4) {
	qm.sendNextPrevS("��~�n�h...", 2);
    } else if (status == 5) {
	qm.askAcceptDecline("�O�o��!�A�Q�Q�A����˪��A�ׯ����A�����@�ӭ^��?");
    } else if (status == 6) {
	qm.forceStartQuest();
	qm.sendNextS('#b(�A�����F�A�O�A�h���F���M�L�S�n�H�H��...)#k', 2);
    } else if (status == 7) {
	qm.sendNextPrevS('���~��A����20��#o0100133#�������ȡC', 8);
    } else if (status == 8) {
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
