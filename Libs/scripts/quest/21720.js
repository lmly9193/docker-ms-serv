var status = -1;

function start(mode, type, selection) {
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 6) {
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("�گର�A������H����H ���l�H", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(�A�i�D�L������w�v�M���l�A�H�ΥL�̪��ϩR�C)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrevS("�ڤF�ѤF...���ڪ��D��#b���l#k�o�˪���´...�L�̤����D�_��#r���]�k�v#k�O�@��h��M�I���ƶ�?", 8);
    } else if (status == 3) {
	qm.sendNextPrevS("�o...�O�u��...\r\r#b(�ݪ��X�Ӧo�@�I�����`��)#k", 2);
    } else if (status == 4) {
	qm.sendNextPrevS("#b���w�����ѡ�#k���X�A�^���̱N�P�ªk�v���� �ڤ����D�o�O���O�u���A���o�ҹ�F���]�k�v�i���٦s�b�C", 8);
    } else if (status == 5) {
	qm.sendNextPrevS("�A�`�ȶ�??", 2);
    } else if (status == 6) {
	qm.sendYesNo("�`��!? �P! �֦b�G#r���]�k�v#k���X�{�C�A�w�g�b�o�A�i�H�O�@�ڭ̡C����! �p�G�A������n�ǳƪ��i�H�ӧ�ڡC ��!�ڷQ��@��ơA�ڧ��F�@�Ӧ���#b�ޯ�#k�Ÿ������b�C�A�Q�ݬݶ�?");
    } else if (status == 7) {
	if (qm.getQuestStatus(21720) == 0) {
	    qm.forceCompleteQuest();
	    qm.teachSkill(21001003, qm.getPlayer().getSkillLevel(21001003), 20);
	    qm.gainExp(3900);
	}
	qm.AranTutInstructionalBubble("Effect/BasicEff.img/AranGetSkill");
	qm.sendNextS('#b(�A�Q�_#r���t����#b�ޯ�!)#k', 2);
    } else if (status == 8) {
	qm.sendNextPrevS("�ڦb��s�j�N���b�ɵo�{�o�ӧޯ�C�ڦ��@�ӹw�P�A�o�i��O�A�L�h�ϥΪ��@�اޯ�A��ı�o�ڬO�諸�C", 8);
    } else if (status == 9) {
	qm.sendNextPrevS("�A�ܱo�V�ӶV�j�j�A�ڷ|�~�����U�A�C�A�S������i�`�Ȫ��C�A���|���h�԰���O�C �A�O���O�鵹#r���]�k�v#k�ҥH�~�Q�B��H �O��!�o�@���A�A�@�w�|���Q�L����û��I", 8);
    } else if (status == 10) {
	qm.sendPrevS("�u�n�A�~��V�m!�A�@�w�|��H�e��j�A��ɭԥL���|�����|��!!", 8);
    } else if (status == 11) {
	qm.dispose();
    }
}