/*
 * NPC : Francis (Doll master)
 * Map : 910510200
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	cm.sendNextS("我是浦藍西斯，黑翼的木偶師。你怎麼敢破壞我的木偶...真的讓我煩惱，但我會讓它恢復。 如果再讓我抓你破壞它，我以黑魔法師的名義發誓，我會讓你付出很大的代價。", 9);
    } else if (status == 1) {
	cm.sendNextPrevS("#b(黑翼? 嗯? 這是哪裡? 所以這一切與黑魔法師有關？嗯~也許該向#b特魯#k報告了)#k", 3);
    } else if (status == 2) {
	cm.forceStartQuest(21760, "0");
	cm.warp(105070300, 3);
	cm.dispose();
    }
}