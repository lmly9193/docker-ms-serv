/*
 * NPC : Francis (Doll master)
 * Map : 910510200
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	cm.sendNextS("�ڬO���Ŧ贵�A���l���참�v�C�A��򴱯}�a�ڪ��참...�u�����ڷдo�A���ڷ|������_�C �p�G�A���ڧ�A�}�a���A�ڥH���]�k�v���W�q�o�}�A�ڷ|���A�I�X�ܤj���N���C", 9);
    } else if (status == 1) {
	cm.sendNextPrevS("#b(���l? ��? �o�O����? �ҥH�o�@���P���]�k�v�����H��~�]�\�ӦV#b�S�|#k���i�F)#k", 3);
    } else if (status == 2) {
	cm.forceStartQuest(21760, "0");
	cm.warp(105070300, 3);
	cm.dispose();
    }
}