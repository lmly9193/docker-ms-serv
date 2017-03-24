/* Dances with Balrog
	Warrior Job Advancement
	Victoria Road : Warriors' Sanctuary (102000003)

	Custom Quest 100003, 100005
*/

var status = 0;
var job;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
	cm.sendOk("��A�Q�n�F�A�ӧ�ڧa!");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.getJob() == 0) {
	    if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0) {
		cm.sendNext("�ҥH�A�Q�����@��#r�C�h#k��?");
	    } else {
		cm.sendOk("�H�A�{�b����O�A���i�ন���@��#r�C�h#k�A�����}�O���O�ڪ��ɶ��C");
		cm.dispose();
	    }
	} else {
	    if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 100) { // WARROPR
		if (cm.getQuestStatus(100003) >= 1) {
		    cm.completeQuest(100005);
		    if (cm.getQuestStatus(100005) == 2) {
			status = 20;
			cm.sendNext("���o�n!�~��e���U�@�B�a!");
		    } else {
			if (!cm.haveItem(4031008)) {
			    cm.gainItem(4031008, 1);
			}
			cm.sendOk("��o�Ӯ��h�賡�u�sIV��#r��¾�Щx#k�A�L�|�i�D�A��򰵡C")
			cm.dispose();
		    }
		} else {
		    status = 10;
		    cm.sendNext("�ݨӧA�V�ӶV�j�F!");
		}
	    } else if (cm.getQuestStatus(100100) == 1  && cm.haveItem(4031059)) {
		cm.completeQuest(100101);
		if (cm.getQuestStatus(100101) == 2) {
		    cm.sendOk("�ݨӧA�w�g�ҩ��F�A�ۤv�A��o�ӥ浹#b���Ǵ�#k�C");
		} else {
		    cm.sendOk("#b#h0##k! �p�G�A�n��o�ڪ��{�P�A�N�o�h���ɥ��˧ڪ��������o#b�²�#k�A�ҩ��A�ۤv�C�ڱN�|��A�ǰe��q���j�Ѹ��W���������_�A���N�i�H�a�A�첧�ɡC");
		    cm.startQuest(100101);
		    cm.warpParty(105070200,0);
		}
		cm.dispose();
	    } else {
		cm.sendOk("�A����������ܡC");
		cm.dispose();
	    }
	}
    } else if (status == 1) {
	cm.sendNextPrev("�o�O�@�ӭ��j����ܡA�A�N�L�k�^�Y!");
    } else if (status == 2) {
	cm.sendYesNo("�A�u���Q�����@��#r�C�h#k?");
    } else if (status == 3) {
	if (cm.getJob() == 0) {
	    cm.resetStats(35, 4, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
	    cm.changeJob(100); // WARRIOR
	}
	cm.gainItem(1402001, 1);
	cm.sendOk("�~��e�i�a!�i�h...");
	cm.dispose();
    } else if (status == 11) {
	cm.sendNextPrev("�A�w�g�ǳƦ����@�� #r�g�Ԥh#k, #r�����M�h#k or #r�j�M�L#k.")
    } else if (status == 12) {
	cm.askAcceptDecline("�������A�����V�ڮi�ܧA����O�A�A�ǳƦn�F��?");
    } else if (status == 13) {
	cm.gainItem(4031008, 1);
	cm.startQuest(100003);
	cm.sendOk("�h��賡�u�sIV��#��¾�Щx#k�L�|�i�D�A��k�C");
	cm.dispose();
    } else if (status == 21) {
	cm.sendSimple("�ܦn�A�w�g�V�ڮi�ܧA����O�F�A�A�Q�����@��#b\r\n#L0#�g�Ԥh#l\r\n#L1#�����M�h#l\r\n#L2#�j�M�L#l#k?");
    } else if (status == 22) {
	var jobName;
	if (selection == 0) {
	    jobName = "�g�Ԥh";
	    job = 110; // FIGHTER
	} else if (selection == 1) {
	    jobName = "�����M�h";
	    job = 120; // PAGE
	} else {
	    jobName = "�j�M�L";
	    job = 130; // SPEARMAN
	}
	cm.sendYesNo("�A�T�w�Q�����@��#r" + jobName + "#k?");
    } else if (status == 23) {
	cm.changeJob(job);
	cm.gainItem(4031012, -1);
	cm.sendOk("�~��e�i�a!�i�h...");
	cm.dispose();
    }
}	
