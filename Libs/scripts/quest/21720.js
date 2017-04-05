var status = -1;

function start(mode, type, selection) {
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 6) {
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("我能為你做什麼？什麼？ 黑翼？", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(你告訴他關於魁儡師和黑翼，以及他們的使命。)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrevS("我了解了...但我知道有#b黑翼#k這樣的組織...他們不知道復活#r黑魔法師#k是一件多麼危險的事嗎?", 8);
    } else if (status == 3) {
	qm.sendNextPrevS("這...是真的...\r\r#b(看的出來她一點都不害怕)#k", 2);
    } else if (status == 4) {
	qm.sendNextPrevS("#b“預言之書”#k指出，英雄們將與黑法師鬥爭 我不知道這是不是真的，但這證實了黑魔法師可能還存在。", 8);
    } else if (status == 5) {
	qm.sendNextPrevS("你害怕嗎??", 2);
    } else if (status == 6) {
	qm.sendYesNo("害怕!? 噗! 誰在乎#r黑魔法師#k的出現。你已經在這，可以保護我們。哈哈! 如果你有什麼要準備的可以來找我。 啊!我想到一件事，我找到了一個有著#b技能#k符號的捲軸。你想看看嗎?");
    } else if (status == 7) {
	if (qm.getQuestStatus(21720) == 0) {
	    qm.forceCompleteQuest();
	    qm.teachSkill(21001003, qm.getPlayer().getSkillLevel(21001003), 20);
	    qm.gainExp(3900);
	}
	qm.AranTutInstructionalBubble("Effect/BasicEff.img/AranGetSkill");
	qm.sendNextS('#b(你想起#r神速之矛#b技能!)#k', 2);
    } else if (status == 8) {
	qm.sendNextPrevS("我在研究古代卷軸時發現這個技能。我有一個預感，這可能是你過去使用的一種技能，我覺得我是對的。", 8);
    } else if (status == 9) {
	qm.sendNextPrevS("你變得越來越強大，我會繼續幫助你。你沒有什麼可害怕的。你不會失去戰鬥能力。 你是不是輸給#r黑魔法師#k所以才被冰凍？ 別怕!這一次，你一定會打被他直到永遠！", 8);
    } else if (status == 10) {
	qm.sendPrevS("只要你繼續訓練!你一定會比以前更強，到時候他不會有機會的!!", 8);
    } else if (status == 11) {
	qm.dispose();
    }
}