var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 6) {
	    qm.sendNext("�ڪ��D�@�����H�m�H���O�q�A�åB�|�W�L�A���ɮv�A���A���O�n���ۤv�����C �A�������W��n���Ʊ��I �A�����ܺɥ��O�֩�A���^����O�I");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("�A����O�u���}�l�����F�C�ګ���Y�A���ڳo�˪��ѤH������U�A�C �ڥu�O�b�Q�ۯ�����U�A�O�h��n���@��ơC *��~*");
    } else if (status == 1) {
	qm.sendNextPrevS("#b(�A�M�L���V�m�S�ܤ[......������L�b��?)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrev("�n���A�o�O�V�m���ĤT�Ӷ��q�]�O�̫�@�Ӷ��q�C�A�̫᪺���O... #r#o9300343##k!�A���D����#o1210100#���ƶ�?");
    } else if (status == 3) {
	qm.sendNextPrevS('�n��...�u���@�I�I...', 2);
    } else if (status == 4) {
	qm.sendNextPrev("�L�̬O�ѥͪ��Ԥh�I �L�̥X�ͮɹﭹ��������ܤj�C �L�̧]������F��A�u�n�@��������F�賣�|�Q�]���C�ܥi�ȡA���O��");
    } else if (status == 5) {
	qm.sendNextPrevS("#b(�o�O�u����?)#k", 2);
    } else if (status == 6) {
	qm.askAcceptDecline("�n�a�A�{�b #b�A�i�h�@���V�m��#k, ����#r30#k��#o9300343#�A�i�A�A����O�I�A�����ܺɥ��O���ѥL�̡I �İڡI �W�V�ڧa�I");
    } else if (status == 7) {
	qm.forceStartQuest();
	qm.sendOk("�{�b�h�ѨM#o9300343#�a!");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("�A�O���Q���}�ɮv��? *��_* �ڦn�P�ʡA���A����@���ݦb�o�C �A���󭫭n���ƭn��!");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("�ڡA�A���ѤF30��#o9300343#�A�B�^�ӤF... �ڥi�H�q�A���W���D...�Y�ϧA�ѤF����F��A�٬O��o�|�X�O�q!������?�]���A�O�ϥΥ٪��i�h�A�ӧA���b�ϥΥL...!");
    } else if (status == 1) {
	qm.sendNextPrevS("#b(�L�O�b�ԵۧA���L��?)#k'", 2);
    } else if (status == 2) {
	qm.sendYesNo("�ڨS������i�H�ЧA���A�]���A�w�g�W�L�F�ڪ���O�F�C �{�b�X�o�I ���n�^�Y�I �ڳo��ѤH�ܰ��������A���ɮv�C");
    } else if (status == 3) {
	if (qm.getQuestStatus(21703) == 1) {
	    qm.forceCompleteQuest();
	    qm.teachSkill(21000000, qm.getPlayer().getSkillLevel(21000000), 10);   // Combo Ability Skill
	    qm.gainExp(2800);
	}
	qm.sendNextS("(�A�Q�_�F#b�٤�����#k!�A�}�l�۫H�o��ɮv���V�m�F...)", 2);
	qm.AranTutInstructionalBubble("Effect/BasicEff.img/AranGetSkill");
    } else if (status == 4) {
	qm.sendPrev("�{�b�^�h�^��#p1201000#�A�ڬ۫H�L���D�A�i�B�F�A�@�w�|���A�P��ź�ơC");
	qm.dispose();
    }
}