var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 6) {
	    qm.sendNext("�@�A�٤����ܡH �p�G�Aı�o�ݭn�i�@�B�V�m�A���H�N������h���F��C �p�G�A���F�Ҧ����H�A�Y�϶ˤF�ڪ��ߡA�ڤ]�u�n�ݵ۹��A�]���L�̬��@�ӫܦn���ƳQ�묹...");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("�P#r���]�k�v#k�԰����O���T�����h�C�Y�Ϧb#b�w����#k���A�u�O����5���^���A�ӥL�̪��O�֩M�I���èS���Բӻ����C�A���O�o�����?", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("�ڤ��O�o�F...", 2);
    } else if (status == 2) {
	qm.sendNextPrevS("�]�O...���L�ڭ̬۫H�A�O5��^���䤤���@�C�M�ӡA�ڭ̪��D�A�b�԰������h�F�˳ƩM�Z���A���O...�@#b(���Y�n���Q�줰��)#k�A�O���A�O���C�ڮt�I�ѤF!!�A��#b�Z��#k...", 8);
    } else if (status == 3) {
	qm.sendNextPrevS("�ڪ��Z��?", 2);
    } else if (status == 4) {
	qm.sendNextPrevS("�ڭ̦b���񪺦B���̡A�o�{�@�Ӥ��i��ĳ���Z���C �ڻ{���o�ӪZ���ݩ�5��䤤�@��^�����A�ҥH�ڧ⥦�a��F��W�A�⥦��b�F���ߪ��Y�Ӧa��C �A�S�ݨ��?�@��#b#p1201001##k... \r\r#i4032372#\r\r���N���o��...", 8);
    } else if (status == 5) {
	qm.sendNextPrevS("�ڷQ�@�U�A���ڦ��ݨ�@��#p1201001#�b�����̡C", 2);
    } else if (status == 6) {
	qm.askAcceptDecline("��!!�N�O���C�ھڰO���A�^�����Z���|�{�D�H���A�p�G�A�O#p1201001#���D�H,��A���_#p1201001#�A#p1201001#���ӷ|�������C�h���ݬ�#b#p1201001##k�A�d���n�|������Ƶo��...");
    } else if (status == 7) {
	if (qm.getQuestStatus(21100) == 0) {
	    qm.forceCompleteQuest();
	}
	qm.sendOkS("�p�G#p1201001#��A�������A���ڭ̴N��T�{�A�O�ǻ���#b����(�g�T�i�h)#k�A����^���N�O���R��#p1201001#�C", 8);
	qm.showWZEffect("Effect/Direction1.img/aranTutorial/ClickPoleArm");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
