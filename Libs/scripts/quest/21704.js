var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("�M�ɮv�V�m�o�p��?�ڬۧA�L�����U��A�C", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(�A�i�D�o�A�A�Q�_�F�@���ޯ�C)#k", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("���ܴΡI���ѹ껡�A�ڻ{���o�P#p1202006#���V�m��k�S���������Y�A�����Y���O�A����A���骺�O�СC#b�ڬ۫H�A��A�~��V�m�ɡA�A������|�����h���ޯ�#k!  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 500 exp");
    } else if (status == 3) {
	qm.forceCompleteQuest();
	qm.gainExp(500);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}