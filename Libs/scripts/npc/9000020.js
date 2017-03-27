/*
	NPC Name: 		Spinel
	Map(s): 		Victoria Road : Henesys (100000000), Victoria Road : Ellinia (101000000), Victoria Road : Perion (102000000), Victoria Road : Kerning City (103000000), Victoria Road : Lith Harbor (104000000), Orbis : Orbis (200000000), Ludibrium : Ludibrium (220000000), Leafre : Leafre (240000000), Zipangu : Mushroom Shrine (800000000)
	Description: 		World Tour Guide
*/

var status ;

function start(){
	status = -1
}
function action (mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0){
		cm.sendSimple("你好我是旅遊導遊，你想去哪呢? \n\r #b#L0#我可以去哪邊?#l \n\r #L1#我不想旅遊#l");
	}
	else if (status == 1){
		if (selection == 0){
			cm.sendSimple("我可以帶你去~ \n\r #b#L0##m800000000##l \n\r #L1##m200000000##l");
		}else if (selection == 1){
			cm.sendOK("那有想旅遊可以再找我:)")
			cm.dispose();
		}
	}
	else if (status == 2){
		if (selection == 0){
			cm.warp(800000000,0)
		}else if (selection == 1){
			cm.warp(200000000,0)
		}
		cm.dispose();
	}
}
				