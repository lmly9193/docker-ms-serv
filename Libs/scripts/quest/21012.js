var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("��A�A��ı�o�|�����U�ܡH �Q�Q�ݡA�����ӥi�H���U�A�A���D...");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("�w��^�ӭ^��!����?�A�Q���D�ڬ����򪾹D�A�ӤF?�����A�ڦ�����ť��A���Ʊ��C�ڬ۫H�A�o��Ƥw�g���F�F���#b�箦#k�q���F�C�j�a�����D�A�w�g�^�Ӱ�!!");
    } else if (status == 1) {
	qm.sendNextPrev("���?�A������Ԫ����y?�����D��?��?�A�����D�A�O�_�O�u���^��?�@~�A���h�A���O�ФF?�S��k...�@�w�O�Q�x�b�B�̤Ӥ[�F�A���U���Q���a�F...");
    } else if (status == 2) {
	qm.askAcceptDecline("��...�A���յۮ�����C��?�S�Ƶo��?�n�a!�ٰO���p��b�԰����ϥΪZ��������?�A�i�H�h�y���@�ǩǪ��^�Ӷ�?");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendNext("�b�o���񦳫ܦh #r#o9300383##k. �A�i�H�h�y��#r3#k��? �d���i�H���U�A�Q�_�X���...");
    } else if (status == 4) {
	qm.sendNextPrevS("���A�A�]�ѰO�p��ϥΧޯ�?#b�A�i�H��ޯ�#r(K)#b���ֱ���W�A�i�H���K���ϥΧޯ�A��M�A�����ӫ~#r(I)#b�]�i�H��b�ֱ��䤤�A��K�ϥ�#k�C", 1);
    } else if (status == 5) {
	qm.summonMsg(17);
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
	qm.sendYesNo("��...�A�����i�D�ڡA�o�����ȨS���^�Q�_����ơC �����n��̫߳�@�w�|�Q�_�Ӫ��I \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# 10 #t2000022# \r\n#i2000023# 10 #t2000023# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 57 exp");
    } else if (status == 1) {
	qm.gainItem(2000022, 10);
	qm.gainItem(2000023, 10);
	qm.gainExp(57);
	qm.forceCompleteQuest();
	qm.sendOkS("#b(�Y�ϧA�O�u���^���A���j�a�����ثe�S��O�������...)#k", 2);
	qm.dispose();
    }
}