/*
 * The return of the Hero
 * Rien Cold Forest 1
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 3) {
	    qm.sendNext("�������A�A���໡���n�C���ޫ�򻡡A�o�u�O���Ĥ��C���~�A���A�o�˪��^���A�ڥi�H�H�����U�A�C���p�G�A���ܥD�N�A�����ڪ��D!");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("��...?�A�O����H���b�o?����...�K!�O���Y!!�o�ӤH�O��? �@!���Y�A�{�ѥL?����?�@�ӭ^��?...");
    } else if (status == 1) {
	qm.sendNextPrev("#i4001170#");
    } else if (status == 2) {
	qm.sendNextPrev("�����A�ҥH�ڲ{���ݵ۩p�@���H�Ӧb���ݪ����өp�f�����^��?�z!���L...�L�ݰ_�Ӧ��I��z...");
    } else if (status == 3) {
	qm.askAcceptDecline("�i��O#r�§Ův#k�A�G�����Y�C #b��!�o�O�@�ث�_�Ĥ��A�Ю���#k�C");
    } else if (status == 4) { // TODO HP set to half
	qm.sendNext("�M��A�⥦�ܤF�A�ڭ̦A�~��ͧa!");
	qm.gainItem(2000022, 1);
	qm.forceStartQuest();
    } else if (status == 5) {
	qm.sendNextPrevS("#b(�����A�o�n����?�ڧѤF......)#k", 3);
    } else if (status == 6) {
	qm.summonMsg(0xE);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendNext("�ڤ@���b�}�޸̦��M���󪺦B���A�Ʊ����ڭ̪��^���A���O...�ڨä��{���L�|�O�u���s�b!�ݨӹw���O�u��!#b���Y#k�A�p�O�諸!�{�b�^���^�ӤF�A�ڭ����Ӥ��ΦA���#r�§Ův#k�F�a?");
    } else if (status == 1) {
	qm.sendNextPrev("�����A��p�A�ڤ@����ۧA�A����!���ڴ�����A��L�����Z�]�|�����ڤ@�˪������C#b�Хh�P��L���Z����D#k�C�p�G�A�M�L�̹�ܪ��ܡA�L�̤@�w�ܾ_��A����...\n\r #fUI/UIWindow.img/QuestIcon/4/0# \r #i2000022# #t2000022# 5 \r #i2000023# #t2000023# 5 \n\r #fUI/UIWindow.img/QuestIcon/8/0# 16 exp");
    } else if (status == 2) {
	qm.sendNextPrev("�z�A�A�ɯŤF!�b�o�ӥ@�ɥu�n�ɵ��A�N�|��o3�I�ޯ��I�C�Ы��U #bK#k �}�ҧޯ���C");
	if (qm.getQuestStatus(21010) == 1) {
	    qm.gainExp(16);
	    qm.gainItem(2000022, 5);
	    qm.gainItem(2000023, 5);
	    qm.forceCompleteQuest();
	}
    } else if (status == 3) {
	qm.sendNextPrevS("#b(�o�ǥ��Z�ݰ_�ӫܩM���A���ڮڥ����O�o�L�̤F...)#k");
    } else if (status == 4) {
	qm.summonMsg(0xF);
	qm.dispose();
    }
}