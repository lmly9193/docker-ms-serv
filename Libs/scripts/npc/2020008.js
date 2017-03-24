/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.
    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
//BY MOOGRA
/* Robeira
	Magician 3rd job advancement
	El Nath: Chief's Residence (211000001)
	Custom Quest 100100, 100102
*/

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 1) {
            cm.sendOk("���z�U�w�M�ߦA����ڧa.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		if ((cm.getJobId() == 111 || cm.getJobId() == 121 || cm.getJobId() == 131 || cm.getJobId() == 112 || cm.getJobId() == 122 || cm.getJobId() == 132)) {	
	    cm.sendOk("�z�ݩ�C�h��,���O�z�w�g���\�T��F,�w�g�W�V�F�Щx���j�פF!");
	    cm.dispose();
	    return;
		}
            if (!(cm.getJobId()==110 ||cm.getJobId()==120||cm.getJobId()==130)) {
		cm.sendOk("�Ч�z����¾�Щx,�z���ݩ�C�h�����u�a!");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getLevel() < 70) {
				cm.sendOk("�A�����ũ|����70��");
				cm.dispose();
				return;		
            }	
			if (cm.haveItem(4031057, 1)){
                cm.sendNext("���ߧA��F�o��,�̫�ڱN���A�@�Ӧ���!");			
            } else if (!(cm.haveItem(4031057,1))) {
				cm.warp(102000003);
                cm.sendOk("�h�� #r�C�h��¾�x#k �L�|���U�A��!");
                cm.dispose();
            } else if (cm.getPlayer().getRemainingSp() <= (cm.getLevel() - 70) * 3) {
                cm.sendNext("�A���ޯ��I���٨S�I��..");
		} else {
                cm.sendOk("�A�٤�����¾...");
                cm.dispose();
            }
        } else if (status == 1) {
            if (cm.haveItem(4031058, 1)) {
                if (cm.getJobId()==110) {
                    cm.changeJobById(111);
                    //cm.getPlayer().gainAp(5);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
					cm.sendOk("������¾�F!");
                    cm.dispose();
                } else if (cm.getJobId()==120) {
                    cm.changeJobById(121);
                    //cm.getPlayer().gainAp(5);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
					cm.sendOk("������¾�F!");
                    cm.dispose();
                } else if (cm.getJobId()==130) {
                    cm.changeJobById(131);
                    //cm.getPlayer().gainAp(5);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
					cm.sendOk("������¾�F!");
                    cm.dispose();
                }
            } else if (cm.haveItem(4031057, 1))
                cm.sendAcceptDecline("�A�ǳƩӾ�̲״���??");
            else
                cm.sendAcceptDecline("���O�A�ڥi�H���A��[�j�j�C���M�A�����ҩ����ȬO�A����O�A���A�����ѡC�A�ǳƦn�D�ԤF�ܡH");
        } else if (status == 2) {
            if (cm.haveItem(4031057, 1)) {
                cm.sendOk("�h�䯫�t�����Y����a!!.");
                cm.dispose();
            }
        }
    }
}