var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    qm.sendNext("�ڬ۫H���|�b�A���ȳ~�����W�γ��C �Ф��n�ڵ��ڪ��n�N�C");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendSimple("���A�A�O����^���A�ڤ@���Q�M�A���� \r\n#b#L0#(�ݰ_�Ӧ��I�`��...)#l");
    } else if (status == 1) {
	qm.askAcceptDecline("�ڷQ���A�@��§���w�g�Q�F�n�[�F...�ڪ��D�A�ܦ��A�S�O�O�A�n�h�������W�A���A�|�����ڪ�§���a?");
    } else if (status == 2) {
	qm.forceStartQuest();
	qm.sendNextS("§�������Ʀb���񪺤@�Ӳ��l�̡C �藍�_�A�i�H�·ЧA�}���l���ڤ@��#b#t4032309##k�M�@��#b#t4032310##k��? �ڷ|���W�ո˰_�Ӫ�...", 1);
    } else if (status == 3) {
	qm.summonMsg(18);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("����?�A���Q�n?");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("�ڡA�A�a�ӤF�Ҧ������ơC���ڴX�������ɶ��Ӳո˥���...���o��...�ӥB...�M... \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010062# 1 #t3010062# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 exp");
    } else if (status == 1) {
	if (qm.getQuestStatus(21013) == 1) {
	    qm.gainItem(3010062, 1);
	    qm.gainExp(95);
	    qm.forceCompleteQuest();
	}
	qm.sendNextPrevS("�o�̡A�@�ӵΪA���Ȥl�A�o�O�W�@�L�G�I�ڤ@���Q��Ȥl�@�����A��§���A�]���ڪ��D�@�ӭ^�������]�ݭn�𮧡C�H�H�C", 1);
    } else if (status == 2) {
	qm.sendNextPrevS("�^�����O�L�Ī��C����֩w�|����D�ԡA�Ʀܦ��ɭԷ|�n�\���w�C���A�O�@�ӭ^���A�ҥH�ݭn�J�A����i��J�쪺��ê�C", 1);
    } else if (status == 3) {
	qm.summonMsg(19);
	qm.dispose();
    }
}