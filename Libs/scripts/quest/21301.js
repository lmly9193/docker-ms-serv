var status = -1;
var map = 108010700;

function start(mode, type, selection) {
	qm.forceStartQuest(21301);
	qm.warp(map, 1);
	qm.resetMap(map);
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceStartQuest(21301);
	qm.dispose();
}