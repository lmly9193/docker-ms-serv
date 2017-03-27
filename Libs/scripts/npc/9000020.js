/*
	NPC Name: 		Spinel
	Map(s): 		Victoria Road : Henesys (100000000), Victoria Road : Ellinia (101000000), Victoria Road : Perion (102000000), Victoria Road : Kerning City (103000000), Victoria Road : Lith Harbor (104000000), Orbis : Orbis (200000000), Ludibrium : Ludibrium (220000000), Leafre : Leafre (240000000), Zipangu : Mushroom Shrine (800000000)
	Description: 		World Tour Guide
*/

var status ;

function start(){
	status = -1
	action(1, 0, 0); 
}
function action (mode, type, selection) {
	if (mode == 1){
		status++;
	}else{
		status--;
	}
	if (status == 0){
		cm.sendSimple("你好我是世界旅行導遊，你想去哪呢? \n\r #b#L0#我可以去哪邊?#l \n\r #L1#我不想旅遊#l");
	}else if (status == 1){
		if (selection == 0){
			cm.sendSimple("我可以帶你去~ \n\r #b#L0##m200000000##l \n\r #L1##m211000000##l \n\r #b#L2##m250000000##l \n\r #b#L3##m260000000##l \n\r #b#L4##m220000000##l \n\r #b#L5##m240000000##l \n\r #b#L6##m140000000##l \n\r #b#L7##m740000000##l \n\r #b#L8##m701000000##l \n\r #b#L9##m500000000##l \n\r #b#L10##m800000000##l \n\r #b#L11##m100000000##l\n\r #b#L12##m540000000##l");
		}else if (selection == 1){
			cm.sendOk("那有想旅遊可以再找我喔:)");
			cm.dispose();
		}
	}else if (status == 2){
		if (selection == 0){
			cm.warp(200000000,0)
		}else if (selection == 1){
			cm.warp(211000000,0)
		}else if (selection == 2){
			cm.warp(250000000,0)
		}else if (selection == 3){
			cm.warp(260000000,0)
		}else if (selection == 4){
			cm.warp(220000000,0)
		}else if (selection == 5){
			cm.warp(240000000,0)
		}else if (selection == 6){
			cm.warp(140000000,0)
		}else if (selection == 7){
			cm.warp(740000000,0)
		}else if (selection == 8){
			cm.warp(701000000,0)
		}else if (selection == 9){
			cm.warp(750000000,0)
		}else if (selection == 10){
			cm.warp(800000000,0)
		}else if (selection == 11){
			cm.warp(100000000,0)
			}else if (selection == 12){
			cm.warp(540000000,0)
		}
		cm.dispose();
	}
}
				