var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("��~#b����#k...�ڭ̤�������H�d�b�o�̡A�ר�O�Ĥl�C�j�a���n���}!!�ڪ��D�ڸܫܦh�A�����U�Э��s�Ҽ{!!");
	    qm.dispose();
	    return;
	}
	status--
    }
    if (status == 0) {
	qm.askAcceptDecline("����!!�֤F�@�ӫĤl�A���p�Ħb��!?��!!�L�@�w�Q�x�b�˪L�F...#b����#k�ڭ̻ݭn���Ĥl���w�a��o�̡C�ڪ��D�A���ˤF�A���A�O�ߤ@���Ʊ���쨺�Ĥl�ëO�@�L�A���U�F!");
    } else if (status == 1) {
	qm.forceStartQuest(21000); // Idk what data lol..
	qm.forceStartQuest(21000); // Twice, intended..
	qm.sendNext("#b���Ĥl���Ӧb�˪L�`�B���Y�Ӧa��#k!�ڭ̥����n�b#r�§Ův#k���ڭ̤��e���}�o�A�ҥH���֧�쨺�Ĥl!");
    } else if (status == 1) {
	qm.sendNextPrev("�{�b�̭��n���O���n��W�A#b����#k�C�p�G�A�Q���D���Ȧ�m�A�Ы��U��L#bQ#k���}���ȵ�����C");
    } else if (status == 2) {
	qm.sendNextPrev("�бϱϨ��Ĥl!�ڭ̤���A�]��#r�§Ův#k�A�Ө���ˮ`�F!!");
    } else if (status == 3) {
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}