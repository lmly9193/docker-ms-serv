var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 4) {
	    qm.sendNext("�A���A�i�H�ۤv�V�m�ܡH����!�ڥu�O���A���D�A�p�G�A��нm�@�_�V�m�A�A�|�o���n�����G�C�A�����a�ۤv�b�o�ӥ@�ɥͬ��C �A�����Ƿ|�P�O�H�۳B�C");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("�ݰ_�ӧA���ǰO�ФF�C�A���ԥٻ{�X�F�A�A�o�N���ۧA�N�O#b����(�g�T�i�h)#k,#b�ԥ�#k���D�H�A�A���Q�_����p��ϥξԥ٪��ޯ��?������?", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(�A�i�D�o�A�A�O�o�@�ǧޯ�)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrevS("�ݨӤ��O�ܦh...�A���A���ܱj�F�@�ǡC����ڭ̪����I���ө�b���A�^��b�A�Q�ᵲ���e�a���A�C", 8);
    } else if (status == 3) {
	qm.sendNextPrevS('���n��򰵩O?', 2);
    } else if (status == 4) {
	qm.askAcceptDecline("�u���@�ؤ�k�i�H����o�@�I�C �V�m�I �V�m�I �V�m�I �V�m�I�p�G�A�~��V�m�A�q�`����|�O��ۤv����O�C ���F���U�z������^�Q�A������ӰV�m�A�ڱN�V�z���Ф@��V�m�ɮv�C");
    } else if (status == 5) {
	qm.forceStartQuest();
	qm.sendNext("�ڷ|���A�@��#b��#k�]���o�O�A�̼��x���Z���C�o���ӷ|����...");
    } else if (status == 6) {
	qm.sendPrev("�i�J����#b����#k���I�A�A�i�H�ݨ�V�m���ߡC�A�N�|�M#b#p1202006##k�b���۹J�C �ڦ��I��ߡA���L�����԰��ޥ��O�Ƥ@�ƤG���C�ڬ۫H�A�i�H�q�L���W�Ǩ�@����...");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}