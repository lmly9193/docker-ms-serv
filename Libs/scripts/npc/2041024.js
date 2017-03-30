var status ;

function start(){
	status = -1;
	action(1, 0, 0); 
}
function action (mode, type, selection) {
	if (mode == 1){
		status++;
	}else{
		status--;
	}
	if (status == 0){
		cm.sendYesNo("你想要時空碎片D嗎?");
	}else if (status == 1 ) {
		if(cm.haveitem(4031172)){
			cm.sendOk("拿去好好利用吧，需要再跟我拿~ 記得一天只能打兩次!!");
			cm.gainItem(4031179,2);
			cm.dispose;
		}else if (!cm.haveitem(4031172)){
			cm.sendOk("你並沒有玩具獎牌，我不把碎片直接給你");
			cm.dispose;
		}
	}
}