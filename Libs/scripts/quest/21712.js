var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("�A�����յo�ͤ���ƤF��?�M�ڦA����ܧڷ|��A�����C");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("#t4032315#... #r�o�Ӥ참�|�o�X�_�Ǫ�����#k�C �A���զhť����? ��M�A�u��#o1210102#���ť�o��C �ڹ��O�o�O#o1210102#�o�X���ܲ����n���C");
    } else if (status == 1) {
	qm.askAcceptDecline("�o��#o1210102#���쾸�����v�T�w�g�ܱo���@���U�C�L�̤w�g�}�l���������v�T��#o1210102#�A�o�ϱo�Ҧ���#o1210102#�w�g�}�l�ǳƾ԰��C#b#o1210102#���ܤƬO�]���o�Ӥ참#k!�A���դF��?");
    } else if (status == 2) {
	qm.forceStartQuest();
	qm.sendNextS("�ڤ����D�O����Ĳ�o�F�o�@�I�C�o�ӳ��w�O�S����k�۵M�гy���A�o�N���ۦ��H�p���o�ӡC�������~��`�N#o1210102#�C", 9);
    } else if (status == 3) {
	qm.sendPrevS("#b(�A�˲M���F�ɭP#o1210102#���ܤơA�A���ӦV#p1002104#���i�åB���ѱz�������H���C)#k", 2);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}