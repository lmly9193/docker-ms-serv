/* Holy Stone
	Hidden Street: Holy Ground at the Snowfield (211040401)
	
	Custom quest: 100102
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 2 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.haveItem(4031058) || cm.getQuestStatus(100102) != 1) {
	    cm.sendOk("�ڬO�@�ӥ��Y.");
	    cm.dispose();
	} else {
	    cm.sendNext("�ڬO�@�ӥ��Y.");
	}
    } else if (status == 1) {
	cm.sendNextPrev("����#b�·t����#k �B�^���ڪ����D�A�ڷ|���A#b���z����#k.");
    } else if (status == 2) {
	if (!cm.haveItem(4005004)) {
	    cm.sendOk("�A�S��#b�·t����#k.");
	    cm.dispose();
	} else {
        cm.completeQuest(100102);
	    cm.gainItem(4005004,-1);
	    cm.gainItem(4031058,1);
	    cm.sendOk("����..");
	    cm.dispose();
	}
    }
}