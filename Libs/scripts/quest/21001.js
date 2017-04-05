var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("��~~#b����(�g�T�i�h)#k�A�O��U��......");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("�@...(�o��) ��... ...�o��...�n�i�ȡC���U�a�����}�o�A�ڭn�h#b�����R�D�ֺ���#k��...");
    } else if (status == 1) {
	if (qm.getQuestStatus(21001) == 0) {
	    qm.gainItem(4001271, 1);
	    qm.forceStartQuest(21001, null);
	}
	qm.warp(914000300, 0);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("���Ĥl�b��?");
	    qm.dispose();
	    return;
	} else if (status == 8) { // watching the introduction
	    if (qm.haveItem(4001271)) {
		qm.gainItem(4001271, -1);
	    }
	    qm.MovieClipIntroUI(true);
	    qm.forceCompleteQuest();
	    qm.warp(914090010, 0);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendYesNo("�A�S��?���Ĥl�O?�L�b��?");
    } else if (status == 1) {
	qm.sendNext("��!�u���P�§A#b����(�g�T�i�h)#k�C");
    } else if (status == 2) {
	qm.sendNextPrevS("�ߨ�W��!�ڭ̨S���h�l���ɶ��F...", 3);
    } else if (status == 3) {
	qm.sendNextPrev("�O���O���A�ڭ̨S���Ӧh�ɶ��C�ڥi�H�Pı��#r�§Ův#k���O�q�V�ӶV�j�A�ڦ��@�ؤ��n���w�P�A�Pı#r�§Ův#k�w�g�֧����F!�p�G�ڭ̲{�b�����}�A���N�G�F!");
    } else if (status == 4) {
	qm.sendNextPrevS("Leave now!", 3);
    } else if (status == 5) {
	qm.sendNextPrev("#b����(�g�T�i�h)#k!�ߨ�W��!�ڪ��D�A�m���U�A���٦�M�L�̤@�_�ľԡA���@�����ӱߤF!���A���B�ͦn�n��I#b�§Ův#k...�A�{�b���ӤW��A�k����h�Q�Ȯq!");
    } else if (status == 6) {
	qm.sendNextPrevS("No, I can't do that!", 3);
    } else if (status == 7) {
	qm.sendNextPrevS("#b�����R�D�ֺ���#k�A�p�n�n���U�L�̡A�ëe�����h�Q�Ȯq�C�ڵ����p�A�ڤ��|��!�ګܧִN�|�b������p�C�ڥ������U�ڪ��٦�A�@�_�êӧ@�ԥB�û��P#r�§Ův#k�԰�!", 3);
    } else if (status == 8) {
	qm.sendYesNo("�A�Q���L���W��?");
    } else if (status == 9) { // Not watching
	if (qm.haveItem(4001271)) {
	    qm.gainItem(4001271, -1);
	}
	qm.forceCompleteQuest();
	qm.warp(140090000, 0);
	qm.dispose();
    }
}