var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("�A���O�ڦb#m101000000#�Ҭݪ��H��?�ڲש���A�F�I �A�i���D�ڧ�A��F�n�[�F�H", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("�A�O��?", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("��? �p�G�A�Q���D�A�ӧڪ��}�ާa! ���ܽЧA... �@���A�����A�A�N�|�����Q�ǰe��ڪ��}�ޡC�ڭ̦b���ۨ�!");
    } else if (status == 3) {
	qm.forceCompleteQuest();
	qm.warp(910510200, 0);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}