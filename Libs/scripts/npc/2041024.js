
var status ;
var gainItem = false;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1)
	status++;
    else
	status--;
	if (status == 0){
		cm.sendSimple("你好我是造型物，找我有什麼事? \n\r #b#L0#我想要時空裂縫的D碎片#l \n\r #L1#沒什麼事#l");
	}else if (status == 1 ) {
		var currenttime = new Date().getTime();
		var record = pi.getQuestRecord(7200);
		var diff = currenttime - record.getCompletionTime();
		if (selection == 0 && cm.haveItem(4031172) && diff >= 86400000) {
			gainItem = true;
			cm.sendOk("碎片就交給你吧!記得每天可以跟我領2個碎片:)");
			record.setCompletionTime(currenttime);
	    	cm.gainItem(4031179);
	    	cm.dispose();
	    }else if (selection == 1){
	    	cm.sendOk("有事再找我囉! 掰!");
	    	cm.dispose();
		}else if (selection == 0 && !cm.haveItem(4031172)){
			cm.sendOk("你沒有玩具城獎牌我不能把碎片交給你，抱歉!");
			cm.dispose();
		}
	 }else {
	    	return false;
	 }
	if (!gianItem && status == 1){
	 	 cm.sendOk("抱歉!你今天已經領過了");
	 	 return false;
	 	 cm.dispose();
	}

}
