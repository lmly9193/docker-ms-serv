var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("�A���o��S�ݡH�A�O�@�ӭ^���I�A�����V�m�A�ӰV�m�O�n���I�ӧa�A�������a�I");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("�n���A�ڤw�g���F�����������C���ڭ̶i�J�U�@�Ӷ��q�C�U�@�B�O����H �ڭ��i�D�L�A�F�C�n�ɥi��V�m�A����A�ܱo�����j�j�A�~������Ѷ��]�k�v�C");
    } else if (status == 1) {
	qm.sendNextPrev("�L�h�A�i��O�@�ӭ^���A�����O�Ʀʦ~�e���ơC�Y�Ϥ��O���]�k�v���A�G�A���ǭᵲ���ɶ��A���|�ϧA��������w�M��O�U���C�A�����V�m�A�C�C��_�A����O�C�A��?�n���?");
    } else if (status == 2) {
	qm.askAcceptDecline("�A���D�������x����¦���ѶܡH�ҥH���������k�O�q#b��¦�V�m#k�}�l�C�@�A�ڪ��D�A�ѰO�Ҧ��ƤF�C����o�N�O������ڥX�{�b�o�̡C �A���ݭn�ۤv����@�U�C���ڭ̶}�l�a�H");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
