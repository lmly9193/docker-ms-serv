var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 4) {
	    qm.sendNext("你說你可以自己訓練嗎？不行!我只是讓你知道，如果你跟教練一起訓練，你會得到更好的結果。你不能單靠自己在這個世界生活。 你必須學會與別人相處。");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("看起來你有些記憶了。你的戰矛認出了你，這意味著你就是#b亞蘭(狂狼勇士)#k,#b戰矛#k的主人，你有想起關於如何使用戰矛的技能嗎?有什麼?", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(你告訴她，你記得一些技能)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrevS("看來不是很多...，但你有變強了一些。那麼我們的重點應該放在讓你回到在你被凍結之前地狀態。", 8);
    } else if (status == 3) {
	qm.sendNextPrevS('那要怎麼做呢?', 2);
    } else if (status == 4) {
	qm.askAcceptDecline("只有一種方法可以做到這一點。 訓練！ 訓練！ 訓練！ 訓練！如果你繼續訓練，通常身體會記住自己的能力。 為了幫助您的身體回想，完成整個訓練，我將向您介紹一位訓練導師。");
    } else if (status == 5) {
	qm.forceStartQuest();
	qm.sendNext("我會給你一個#b矛#k因為這是你最熟悉的武器。這應該會有用...");
    } else if (status == 6) {
	qm.sendPrev("進入城鎮的#b左邊#k傳點，你可以看到訓練中心。你將會和#b#p1202006##k在那相遇。 我有點擔心，不過它的戰鬥技巧是數一數二的。我相信你可以從他身上學到一兩件事...");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}