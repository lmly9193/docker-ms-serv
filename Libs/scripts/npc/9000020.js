/*
	NPC Name: 		Spinel
	Map(s): 		Victoria Road : Henesys (100000000), Victoria Road : Ellinia (101000000), Victoria Road : Perion (102000000), Victoria Road : Kerning City (103000000), Victoria Road : Lith Harbor (104000000), Orbis : Orbis (200000000), Ludibrium : Ludibrium (220000000), Leafre : Leafre (240000000), Zipangu : Mushroom Shrine (800000000)
	Description: 		World Tour Guide
*/
var status = -1;
var cost, sel;
var togo1, togo2, togo3, togo4, togo5, togo6, togo7, togo8, togo9, togo10;
var map;

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function start() {
	switch (cm.getMapId()) {
		case 200000000: //�ѪŤ���1
		case 211000000: //�B�쳷��2
		case 250000000: //���P��3
		case 260000000: //�F�z4
		case 220000000: //���㫰5
		case 240000000:	//�����6
		case 140000000: //�箦7
		case 740000000: //����m8
		case 701000000: //�W���y9
		case 500000000: //����10
		case 800000000: //�饻����11
			map = cm.getSavedLoccation("Worldtour");
			cm.sendSimple("�Q��B�ȹC��?��ڴN��F�A����!!�Q�h���O?�٬O�n�^�h��Ӫ��a��? \n\r #b#L0#�ڷQ�h~#l \n\r #L1#�ڮȦ槹�F,�ڭn�^�h#m"+map+"##l");
			break;
	}
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function action(mode, type, selection) {
	if (mode == -1) { 
		cm.dispose();
	}else {
		if((status <= 2 && mode == 0)) || (status == 4 && mode == 1)) {
			cm.dispose;
			return;
		}
	}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	if (mode == 1)
		status++;
	else
		status--;
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	if (status == 0) {
		if (selection == 0) {
			switch (cm.getMapId()) {
				case 200000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 211000000:
					togo1 = 200000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 250000000:
					togo1 = 211000000;
					togo2 = 200000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 260000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 200000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 220000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 200000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 240000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 200000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 140000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 200000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 740000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 200000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 701000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 200000000;
					togo9 = 500000000;
					togo10 = 800000000;
				case 500000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 200000000;
					togo10 = 800000000;
				case 800000000:
					togo1 = 211000000;
					togo2 = 250000000;
					togo3 = 260000000;
					togo4 = 220000000;
					togo5 = 240000000;
					togo6 = 140000000;
					togo7 = 740000000;
					togo8 = 701000000;
					togo9 = 500000000;
					togo10 = 200000000;
				break;
			}
			cm.sendSimple("�Q�h���O? \n\r #b#L0##m"+togo1+"# (3,000 ����)#l \n\r #b#L1##m"+togo2+"# (3,000 ����)#l \n\r #b#L2##m"+togo3+"# (3,000 ����)#l \n\r #b#L3##m"+togo4+"# (3,000 ����)#l \n\r #b#L4##m"+togo5+"# (3,000 ����)#l \n\r #b#L5##m"+togo6+"# (3,000 ����)#l \n\r #b#L6##m"+togo7+"# (3,000 ����)#l \n\r #b#L7##m"+togo8+"# (3,000 ����)#l \n\r #b#L8##m"+togo9+"# (3,000 ����)#l \n\r #b#L9##m"+togo10+"# (3,000 ����)#l");
			}else if (selection == 1){
				cm.warp(map);
				cm.clearSavedLocation("Worldtour");
				cm.dispose();
			}
		}else if (status == 1) {
			sel = selection;
			if (sel == 0 ) {
				cm.sendNext("�A�T�w�n�e�� #b#m"+togo1+"##k?  �쨺��ݭn #b3,000 ����#k. �T�w�{�b�n�h��?");
			}else if (sel == 1 ){
				cm.sendNext("�A�T�w�n�e�� #b#m"+togo2+"##k?  �쨺��ݭn #b3,000 ����#k. �T�w�{�b�n�h��?");
			}else if (sel == 2 ){
				cm.sendNext("�A�T�w�n�e�� #b#m"+togo3+"##k?  �쨺��ݭn #b3,000 ����#k. �T�w�{�b�n�h��?");
			}else if (sel == 3 ){
				cm.sendNext("�A�T�w�n�e�� #b#m"+togo4+"##k?  �쨺��ݭn #b3,000 ����#k. �T�w�{�b�n�h��?");
			}else if (sel == 4 ){
				cm.sendNext("�A�T�w�n�e�� #b#m"+togo5+"##k?  �쨺��ݭn #b3,000 ����#k. �T�w�{�b�n�h��?");
			}else if (sel == 5 ){
				cm.sendNext("�A�T�w�n�e�� #b#m"+togo6+"##k?  �쨺��ݭn #b3,000 ����#k. �T�w�{�b�n�h��?");
			}else if (sel == 6 ){
				cm.sendNext("�A�T�w�n�e�� #b#m"+togo7+"##k?  �쨺��ݭn #b3,000 ����#k. �T�w�{�b�n�h��?");
			}else if (sel == 7 ){
				cm.sendNext("�A�T�w�n�e�� #b#m"+togo8+"##k?  �쨺��ݭn #b3,000 ����#k. �T�w�{�b�n�h��?");
			}else if (sel == 8 ){
				cm.sendNext("�A�T�w�n�e�� #b#m"+togo9+"##k?  �쨺��ݭn #b3,000 ����#k. �T�w�{�b�n�h��?");
			}else if (sel == 9 ){
				cm.sendNext("�A�T�w�n�e�� #b#m"+togo10+"##k?  �쨺��ݭn #b3,000 ����#k. �T�w�{�b�n�h��?");
			}
		}else if (status == 2) {
			if (sel == 0 ) {
				cm.warp(togo1);
			}else if (sel == 1) {
		    	cm.warp(togo2);
		    }else if (sel == 2) {
		    	cm.warp(togo3);
		    }else if (sel == 3) {
		    	cm.warp(togo4);
		    }else if (sel == 4) {
		    	cm.warp(togo5);
		    }else if (sel == 5) {
		    	cm.warp(togo6);
		    }else if (sel == 6) {
		    	cm.warp(togo7);
		    }else if (sel == 7) {
		    	cm.warp(togo8);
		    }else if (sel == 8) {
		    	cm.warp(togo9);
		    }else if (sel == 9) {
		    	cm.warp(togo10);
		    }
		    cm.dispose();
		}
	}
}
				