var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("����H �ڤ��{�����ӫĤl�H�~�٦����ǡC �ЦA�Q�@�Q�C");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("�A�M#p1032112#���ܤF��?", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(�A�i�D�o#p1032112#�Ҭݨ쪺�Ʊ��C)#k", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("�@�Ӧ��참���Ĥl�H �o���G�ܥi�áA�ڬ۫H�o�ӫĤl�O���Ĩۣ��M�ܱo�ɤO����]�C");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendNextS("�o�ӫĤl��򴱦b�n��˪L�̸v�h�C �֪��D��_�˪L�ݭn�h���ɶ��H�ڤj�����ɶ������M�z�o�ǲV�áC", 2);
    } else if (status == 4) {
	qm.sendPrevS("#b(�z�w�g�F�ѳy�����Ĩۣ�ܤƪ���]�C�A���ӦV#p1002104#���i�åB���ѱz�������H���C)#k", 2);
    } else if (status == 5) {
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}