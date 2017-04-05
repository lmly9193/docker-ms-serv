var status = -1;

function action(mode, type, selection) {
    if (cm.getQuestStatus(21002) == 0) {
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	if (status == 0) {
	    cm.sendNext("�@!#b����(�g�T�i�h)#k�A�A�ש���F!�A���ˤF?�A���D�{�b�o�ͤ���Ʊ���?");
	} else if (status == 1) {
	    cm.sendNextPrev("�ڭ̤w�g�ǳƭn���}���a�e�����h�Q�Ȯq�F�C");
	} else if (status == 2) {
	    cm.sendNextPrev("�������٦�?��...�n�a�A�A���٦�̤w�g�h�M#r�§Ův#k�԰��F�C����§Ův�����ڭ̮ɡA�A���٦�̨M�w���ڭ̪����k�]�ɶ��A�h�M#r�§Ův#k��ܤF�C����!?�A�n�h���U�L��?��!!����A�A���ˤF!�A���Ӹ�ۧڭ̤@�_���}...");
	} else if (status == 3) {
	    cm.forceStartQuest(21002, "1");
	    // Ahh, Oh No. The kid is missing
	    cm.showWZEffect("Effect/Direction1.img/aranTutorial/Trio");
	    cm.dispose();
	}
    } else {
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	if (status == 0) {
	    cm.sendSimple("�{�b�ڪ����p�D�`���A�A�Q���D����? \r #b#L0#�§Ův�b��?#l \r #b#L1#�k�]���p�e?#l \r #b#L2#�ڪ��٦񱡪p?#l");
	} else if (status == 1) {
	    switch (selection) {
		case 0:
		    cm.sendOk("�ثe�ݨ�#r�§Ův#k�Z���ڭ̤������a��C�˪L�����s�w�g�Q#r�§Ův#k����F�A�n�q�˪L���}�O���i�઺�C�ҥH�ڭ̤~�Q�Τ��@���ڭ̪��k���k�A�ڭ̰ߤ@���}�o��h���a��N�O�e�����h�Q�Ȯq�C");
		    break;
		case 1:
		    cm.sendOk("�Ҧ��H�w�g�ǳƦn���}���a�A�j�a�w�g���֤W��F�C�b���椤�A#b����#k�O�@�ڭ̡C");
		    break;
		case 2:
		    cm.sendOk("�A���٦�w�g�e���h�M#r�§Ův#k�԰��F�C�]���A���ˤF�A�ҥH�L�̨M�w�����A�\�P�԰��C#b����(�g�T�i�h)#k�A����M�ڭ����}!");
		    break;
	    }
	    cm.safeDispose();
	}
    }
}