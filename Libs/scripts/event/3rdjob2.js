/*狂狼勇士3轉任務*/
	
importPackage(Packages.tools);

function allMonstersDead(eim) {
    var price = new Item(4032339, 0, 1);
    var winner = eim.getPlayers().get(0);
    var info = setClassVars(winner);
    var mapId = 108010702;
    var monsterId = 9001013;
    var map = eim.getMapInstance(mapId);
    map.spawnItemDrop(winner, winner, price, winner.getPosition(), true, false);
    var mob = em.getMonster(monsterId);
    
    em.getChannelServer().broadcastPacket(MaplePacketCreator.serverNotice(6, "[事件] " + winner.getName() + " 打敗了 " + mob.getStats().getName() + "!"));
}