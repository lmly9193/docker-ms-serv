var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("�u���ܺ��A����ڵ��A���M�A�|�ᮬ...�C�A�P�A��#b�ԥ�#k�����A�N���ۥL�i���D�A���L�h�C�֪��D...?�d���n�L�O�A����A��O������...?");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("�V�m�i�檺�p��H �z�A�ݵۧA�A�ڥi�H�i�D�A����O�w�g�󰪤F�C ���u�O�ӴΤF�A���ޫ�ˡA�ڪ��D�A�ܦ��A���O�A�ȥ��^��q�W�C");
    } else if (status == 1) {
	qm.forceStartQuest(21200); //??
	qm.sendOk("�A��#b�پ�#k �@���O���b#b���#k���L�X�_�Ǫ������C�ھڮѤW�A��L�ݭn�D�H�ɴN�|�������C");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 11) {
	    qm.sendNext("�K�A�ܤ֧A�i�D�ڧA�չL�F�I");
	    qm.dispose();
	    return;
	} else if (status == 13) {
	    qm.MovieClipIntroUI(true);
	    qm.warp(914090200, 0);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("��...... ... ...���......", 2);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(���ٶ��@�T�A��M���Өk�į��b����?)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrevS("#b(�ڱq���ݹL�L�A�L�O��?�L�ݰ_�Ӥ@�I�]�����H��...)#k", 2);
    } else if (status == 3) {
	qm.sendNextPrev("��! ����! �A��ť��ڻ��ܶ�? �Sť����? ��~! �𦺤H�F!");
    } else if (status == 4) {
	qm.sendNextPrevS("#b(�x?�o�O�֪��n���Ať�_�ӹ����c���֦~...)#k", 2);
    } else if (status == 5) {
	qm.sendNextPrev("�u�r...�S�Q��D�H���ӫ�A�N��Z����ۤ��ޡA�{�b�]ť�����...?");
    } else if (status == 6) {
	qm.sendNextPrevS("�A�O��?", 2);
    } else if (status == 7) {
	qm.sendNextPrev("����? �Ať���D�ڻ��ܤF? �O�ڰ�!�A���Z��#b�� ����!#k!");
    } else if (status == 8) {
	qm.sendNextPrevS("#b(...����?���j���ٷ|���ܶ�?)#k", 2);
    } else if (status == 9) {
	qm.sendNextPrev("�����?�u�����۫H�A�Ѫ��]�ӹ����F�a?���|���o�بư�?");
    } else if (status == 10) {
	qm.sendNextPrevS("�ګܩ�p...�گu�����򳣤��O�o�F...", 2);
    } else if (status == 11) {
	qm.sendYesNo("�A�H���藍�_�N�i�H�F��!? �A���D�o�X�ʦ~�ӧګܩt�W��...?���ޫ�˧A�@�w�n���ڷQ�_��!!");
    } else if (status == 12) {
	qm.sendNextS("#b(�ۤv���O���j���� ����...�u�_��... ���ޤF�A���h����Y�C)#k", 2);
	qm.forceCompleteQuest();
    } else if (status == 13) {
	qm.sendYesNo("�A�n���L�ʵe��?");
    } else if (status == 14) {
	qm.dispose();
    }
}