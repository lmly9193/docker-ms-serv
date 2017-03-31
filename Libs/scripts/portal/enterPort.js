function enter(pi) {
	if (pi.getQuestStatus(21301) == 1) {
		pi.resetMap(108010700);
		pi.warp(108010700,1);
	} else {
		pi.warp(140020300, 1);
	}
}