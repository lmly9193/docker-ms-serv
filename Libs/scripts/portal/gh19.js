// gh00 = 出口、 gh01 = 入口

// 入口
function enter(pi) {
	var map = 749050400;
	var target = pi.getClient().getChannelServer().getMapFactory().getMap(map);
	var targetPortal = target.getPortal(0);
	pi.saveLocation("Gachapon");
	pi.getPlayer().changeMap(target, targetPortal);
	return true;
}
