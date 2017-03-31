var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest(21301);
	qm.completeQuest(21301);
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.getQuestStatus(21301) == 0) {
		qm.forceStartQuest(21301);
		qm.forceCompleteQuest();
	}
	qm.dispose();
}