/*
 * Tutorial Lirin
 */

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
if (cm.getPlayer().getMapId() != 140090000) {
if (status == 0) {
	cm.sendSimple("����! �U���C�X���H�����A10�ū�i�H��o�A�ҥH���ݭn���e�F�ѡC �u���Q�n���e�F�Ѥ~�n�q�o�̶}�l \n\r �n���A���@�ӬO�A�Q���F�Ѫ�?  \n\r #b#L1#Minimap#l \n\r #b#L2#������#l \n\r #b#L3#���~��#l \n\r #b#L4#����#l \n\r #b#L5#Picking up items#l \n\r #b#L6#�˳���#l \n\r #b#L7#�ޯ���#l \n\r #b#L8#�p��ϥΧޯ�ֱ���#l \n\r #b#L9#���c�l#l \n\r #b#L10#���Ȥl#l \n\r #b#L11#������O��#l");
} else {
    cm.summonMsg(selection);
    cm.dispose();
}
} else {
    if (cm.getInfoQuest(21019).equals("")) {
	if (status == 0) {
	    cm.sendNext("�A�ש���F�I");
	} else if (status == 1) {
	    cm.sendNextPrevS("...�p�O��?", 2);
	} else if (status == 2) {
	    cm.sendNextPrev("�ڤ@���b���A���ӡC���ݵ۴��P#r�§Ův#k�԰��^������!�N�O�A...");
	} else if (status == 3) {
	    cm.sendNextPrevS("�����A�p�A������??", 2);
	} else if (status == 4) {
	    cm.sendNextPrevS("��...����...�ڬO��?�ڤ��O�o����ƤF�C��...���Y�n�h!!", 2);
	} else if (status == 5) {
	    cm.updateInfoQuest(21019, "helper=clear");
	    cm.showWZEffect("Effect/Direction1.img/aranTutorial/face");
	    cm.showWZEffect("Effect/Direction1.img/aranTutorial/ClickLirin");
	    cm.playerSummonHint(true);
	    cm.dispose();
	}
    } else {
	if (status == 0) {
	    cm.sendNext("�A�٦n��?");
	} else if (status == 1) {
	    cm.sendNextPrevS("��...���O�o����ƤF...�ڦb����?�A�O��?", 2);
	} else if (status == 2) {
	    cm.sendNextPrev("���P�C�i��O#b�§Ův#k���A�G���A�S������O�СC�O��ߡA�ڷ|�n�n��A�������C");
	} else if (status == 3) {
	    cm.sendNextPrev("�X�ʦ~�e�A�A���O�o�̪��^���C�A�M�A���٦񬰤F�@�ϥ@�ɴ��P#r�§Ův#k�b�o�̾԰��L�A��A�̫ʦL���ɡA�i�൹�A�U�F�A�G�ϧA�ᵲ�A�]���i��o��]�ϧA�S�O��...");
	} else if (status == 4) {
	    cm.sendNextPrev("�A�ثe�b�@�ӥs��#b�箦#k���q�W�A�o�̤w�g�Q#r�§Ův#k�A�G�F�C�ѩ�Q�A�G�����Y�A�o�y�q�@���H�ӤU�۳��`�O�Q���\��C�ӧڭ̴N�o�{�A�b�}�ު��`�B�C");
	} else if (status == 5) {
	    cm.sendNextPrev("�ڪ��W�l�s#b���Y#k�A�O�箦�رڡC�ڭ̤@���߱�ۧA���k�ӡA�{�b�ש󦳧Ʊ�F!�A�N���b�o�A���b�ڭ̪����e...");
	} else if (status == 6) {
	    cm.sendNextPrev("�ڥi��@�����A�Ӧh�T���F...��p...�]���ڤӿ��ĤF�A�����C�p�G�A�ٷd�����A�S���Y�C������F����A�A�٬O�i�H���ڡC");
	} else if (status == 7) {
	    cm.playerSummonHint(true);
	    cm.warp(140090100, 1);
	    cm.dispose();
	}
    }
}
}