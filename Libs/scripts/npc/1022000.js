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
	cm.sendOk("當你想好了再來找我吧!");
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
		cm.sendNext("所以你想成為一位#r劍士#k嗎?");
	    } else {
		cm.sendOk("以你現在的能力，不可能成為一位#r劍士#k，請離開別浪費我的時間。");
		cm.dispose();
	    }
	} else {
	    if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 100) { // WARROPR
		if (cm.getQuestStatus(100003) >= 1) {
		    cm.completeQuest(100005);
		    if (cm.getQuestStatus(100005) == 2) {
			status = 20;
			cm.sendNext("做得好!繼續前往下一步吧!");
		    } else {
			if (!cm.haveItem(4031008)) {
			    cm.gainItem(4031008, 1);
			}
			cm.sendOk("把這個拿去西部沿山IV給#r轉職教官#k，他會告訴你怎麼做。")
			cm.dispose();
		    }
		} else {
		    status = 10;
		    cm.sendNext("看來你越來越強了!");
		}
	    } else if (cm.getQuestStatus(100100) == 1  && cm.haveItem(4031059)) {
		cm.completeQuest(100101);
		if (cm.getQuestStatus(100101) == 2) {
		    cm.sendOk("看來你已經證明了你自己，把這個交給#b泰勒斯#k。");
		} else {
		    cm.sendOk("#b#h0##k! 如果你要獲得我的認同，就得去異界打倒我的分身取得#b黑符#k，證明你自己。我將會把你傳送到通往古老路上的次元裂縫，它將可以帶你到異界。");
		    cm.startQuest(100101);
		    cm.warpParty(105070200,0);
		}
		cm.dispose();
	    } else {
		cm.sendOk("你有明智的選擇。");
		cm.dispose();
	    }
	}
    } else if (status == 1) {
	cm.sendNextPrev("這是一個重大的選擇，你將無法回頭!");
    } else if (status == 2) {
	cm.sendYesNo("你真的想成為一位#r劍士#k?");
    } else if (status == 3) {
	if (cm.getJob() == 0) {
	    cm.resetStats(35, 4, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
	    cm.changeJob(100); // WARRIOR
	}
	cm.gainItem(1402001, 1);
	cm.sendOk("繼續前進吧!勇士...");
	cm.dispose();
    } else if (status == 11) {
	cm.sendNextPrev("你已經準備成為一位 #r狂戰士#k, #r見習騎士#k or #r槍騎兵#k.")
    } else if (status == 12) {
	cm.askAcceptDecline("但首先你必須向我展示你的能力，你準備好了嗎?");
    } else if (status == 13) {
	cm.gainItem(4031008, 1);
	cm.startQuest(100003);
	cm.sendOk("去找西部沿山IV找#轉職教官#k他會告訴你方法。");
	cm.dispose();
    } else if (status == 21) {
	cm.sendSimple("很好你已經向我展示你的能力了，你想成為一位#b\r\n#L0#狂戰士#l\r\n#L1#見習騎士#l\r\n#L2#槍騎兵#l#k?");
    } else if (status == 22) {
	var jobName;
	if (selection == 0) {
	    jobName = "狂戰士";
	    job = 110; // FIGHTER
	} else if (selection == 1) {
	    jobName = "見習騎士";
	    job = 120; // PAGE
	} else {
	    jobName = "槍騎兵";
	    job = 130; // SPEARMAN
	}
	cm.sendYesNo("你確定想成為一位#r" + jobName + "#k?");
    } else if (status == 23) {
	cm.changeJob(job);
	cm.gainItem(4031012, -1);
	cm.sendOk("繼續前進吧!勇士...");
	cm.dispose();
    }
}	
