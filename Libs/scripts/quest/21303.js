var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest(21303);
	qm.dispose();
}
function end (mode, type, selection) {
	if (qm.getQuestStatus(21303) == 0) {
		qm.forceStartQuest(21303);
	}else if (qm.getQuestStatus(21301) == 1) {
		qm.forceCompleteQuest();
		qm.gainItem(4032312,1);
	}
	qm.dispose();
}
