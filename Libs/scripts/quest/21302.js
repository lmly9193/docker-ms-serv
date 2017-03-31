var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest(21302);
	qm.dispose();
}
function end (mode, type, selection) {
	if (qm.getQuestStatus(21302) == 0) {
		qm.forceStartQuest(21302);
	}else if (qm.getQuestStatus(21302) == 1) {
		qm.forceCompleteQuest();
	}
	qm.dispose();
}
