/* Warrior Job Instructor
	Warrior 2nd Job Advancement
	Victoria Road : West Rocky Mountain IV (102020300)
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.getQuestStatus(100004) == 1) {
	    cm.sendOk("幫我收集#b30個#t4031013##k.祝你好運!!");
	    status = 3;
	} else {
	    if (cm.getQuestStatus(100004) == 2) {
		cm.sendOk("你是真正的勇士!");
		cm.safeDispose();
	    } else if (cm.getQuestStatus(100003) >= 1) {
		cm.completeQuest(100003);
		if (cm.getQuestStatus(100003) == 2) {
		    cm.sendNext("這不是來自#b武術教練#k的信嗎?");
		}
	    } else {
		cm.sendOk("來吧，你準備好了嗎?");
		cm.safeDispose();
	    }
	}
    } else if (status == 1) {
	cm.sendNextPrev("你想證明你自己嗎? 非常好...")
    } else if (status == 2) {
	cm.askAcceptDecline("我會再給你機會，你準備好了嗎?");
    } else if (status == 3) {
	cm.startQuest(100004);
	cm.sendOk("你必須收集#b30個#t4031013##k。")
    } else if (status == 4) {
	//	    cm.gainItem(4031008, -1);
	cm.warp(108000300, 0);
	cm.dispose();
    }
}	