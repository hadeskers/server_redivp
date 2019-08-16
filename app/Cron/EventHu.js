
var TaiXiu_User = require('../Models/TaiXiu_user');
var HU          = require('../Models/HU');

var UserInfo    = require('../Models/UserInfo');

function cronDay(day){
	if (day < 0) {
		return 6;
	}else if (day > 6) {
		return 0;
	}
	return day;
}

module.exports = function() {
	var file_angrybird = require('../../config/angrybird.json');
	var file_bigbabol  = require('../../config/bigbabol.json');
	var file_minipoker = require('../../config/minipoker.json');

	var timeNow = new Date();
	timeNow     = timeNow.getDay();
	var homQua  = cronDay(timeNow-1);

	/**
	 * AngryBirds
	*/
	// 100 Angrybird
	HU.findOne({game: "arb", type:100, red:true}, 'bet min toX balans x', function(err, arb100){
		if (file_angrybird[timeNow]) {
			var arb100bet = arb100.bet;
			if (file_angrybird[homQua] && arb100.toX < 1 && arb100.balans > 0) {
				arb100bet = arb100bet-(arb100.min*arb100.x);
			}
			HU.findOneAndUpdate({game: "arb", type:100, red:true}, {$set:{'bet': arb100bet, 'toX': file_angrybird['100'].toX, 'balans': file_angrybird['100'].balans, 'x': file_angrybird['100'].x}}, function(err,cat){});
		}else{
			if (file_angrybird[homQua]) {
				var arb100bet = arb100.min;
				if (arb100.toX < 1 && arb100.balans > 0) {
					arb100bet = arb100.bet-(arb100.min*arb100.x);
				}
				HU.findOneAndUpdate({game: "arb", type:100, red:true}, {$set:{'toX': 0, 'balans': 0, 'bet': arb100bet}}, function(err,cat){});
			}
		}
	});

	// 1000 Angrybird
	HU.findOne({game: "arb", type:1000, red:true}, 'bet min toX balans x', function(err, arb1000){
		if (file_angrybird[timeNow]) {
			var arb1000bet = arb1000.bet;
			if (file_angrybird[homQua] && arb1000.toX < 1 && arb1000.balans > 0) {
				arb1000bet = arb1000bet-(arb1000.min*arb1000.x);
			}
			HU.findOneAndUpdate({game: "arb", type:1000, red:true}, {$set:{'bet': arb1000bet, 'toX': file_angrybird['1000'].toX, 'balans': file_angrybird['1000'].balans, 'x': file_angrybird['1000'].x}}, function(err,cat){});
		}else{
			if (file_angrybird[homQua]) {
				var arb1000bet = arb1000.min;
				if (arb1000.toX < 1 && arb1000.balans > 0) {
					arb1000bet = arb1000.bet-(arb1000.min*arb1000.x);
				}
				HU.findOneAndUpdate({game: "arb", type:1000, red:true}, {$set:{'toX': 0, 'balans': 0, 'bet': arb1000bet}}, function(err,cat){});
			}
		}
	});

	// 10000 Angrybird
	HU.findOne({game: "arb", type:10000, red:true}, 'bet min toX balans x', function(err, arb10000){
		if (file_angrybird[timeNow]) {
			var arb10000bet = arb10000.bet;
			if (file_angrybird[homQua] && arb10000.toX < 1 && arb10000.balans > 0) {
				arb10000bet = arb10000bet-(arb10000.min*arb10000.x);
			}
			HU.findOneAndUpdate({game: "arb", type:10000, red:true}, {$set:{'bet': arb10000bet, 'toX': file_angrybird['10000'].toX, 'balans': file_angrybird['10000'].balans, 'x': file_angrybird['10000'].x}}, function(err,cat){});
		}else{
			if (file_angrybird[homQua]) {
				var arb10000bet = arb10000.min;
				if (arb10000.toX < 1 && arb10000.balans > 0) {
					arb10000bet = arb10000.bet-(arb10000.min*arb10000.x);
				}
				HU.findOneAndUpdate({game: "arb", type:10000, red:true}, {$set:{'toX': 0, 'balans': 0, 'bet': arb10000bet}}, function(err,cat){});
			}
		}
	});



	/**
	 * BigBabol
	*/
	// 100 BigBabol
	HU.findOne({game: "bigbabol", type:100, red:true}, 'bet min toX balans x', function(err, bbb100){
		if (file_bigbabol[timeNow]) {
			var bbb100bet = bbb100.bet;
			if (file_bigbabol[homQua] && bbb100.toX < 1 && bbb100.balans > 0) {
				bbb100bet = bbb100bet-(bbb100.min*bbb100.x);
			}
			HU.findOneAndUpdate({game: "bigbabol", type:100, red:true}, {$set:{'bet': bbb100bet, 'toX': file_bigbabol['100'].toX, 'balans': file_bigbabol['100'].balans, 'x': file_bigbabol['100'].x}}, function(err,cat){});
		}else{
			if (file_bigbabol[homQua]) {
				var bbb100bet = bbb100.min;
				if (bbb100.toX < 1 && bbb100.balans > 0) {
					bbb100bet = bbb100.bet-(bbb100.min*bbb100.x);
				}
				HU.findOneAndUpdate({game: "bigbabol", type:100, red:true}, {$set:{'toX': 0, 'balans': 0, 'bet': bbb100bet}}, function(err,cat){});
			}
		}
	});

	// 1000 BigBabol
	HU.findOne({game: "bigbabol", type:1000, red:true}, 'bet min toX balans x', function(err, bbb1000){
		if (file_bigbabol[timeNow]) {
			var bbb1000bet = bbb1000.bet;
			if (file_bigbabol[homQua] && bbb1000.toX < 1 && bbb1000.balans > 0) {
				bbb1000bet = bbb1000bet-(bbb1000.min*bbb1000.x);
			}
			HU.findOneAndUpdate({game: "bigbabol", type:1000, red:true}, {$set:{'bet': bbb1000bet, 'toX': file_bigbabol['1000'].toX, 'balans': file_bigbabol['1000'].balans, 'x': file_bigbabol['1000'].x}}, function(err,cat){});
		}else{
			if (file_bigbabol[homQua]) {
				var bbb1000bet = bbb1000.min;
				if (bbb1000.toX < 1 && bbb1000.balans > 0) {
					bbb1000bet = bbb1000.bet-(bbb1000.min*bbb1000.x);
				}
				HU.findOneAndUpdate({game: "bigbabol", type:1000, red:true}, {$set:{'toX': 0, 'balans': 0, 'bet': bbb1000bet}}, function(err,cat){});
			}
		}
	});

	// 10000 BigBabol
	HU.findOne({game: "bigbabol", type:10000, red:true}, 'bet min toX balans x', function(err, bbb10000){
		if (file_bigbabol[timeNow]) {
			var bbb10000bet = bbb10000.bet;
			if (file_bigbabol[homQua] && bbb10000.toX < 1 && bbb10000.balans > 0) {
				bbb10000bet = bbb10000bet-(bbb10000.min*bbb10000.x);
			}
			HU.findOneAndUpdate({game: "bigbabol", type:10000, red:true}, {$set:{'bet': bbb10000bet, 'toX': file_bigbabol['10000'].toX, 'balans': file_bigbabol['10000'].balans, 'x': file_bigbabol['10000'].x}}, function(err,cat){});
		}else{
			if (file_bigbabol[homQua]) {
				var bbb10000bet = bbb10000.min;
				if (bbb10000.toX < 1 && bbb10000.balans > 0) {
					bbb10000bet = bbb10000.bet-(bbb10000.min*bbb10000.x);
				}
				HU.findOneAndUpdate({game: "bigbabol", type:10000, red:true}, {$set:{'toX': 0, 'balans': 0, 'bet': bbb10000bet}}, function(err,cat){});
			}
		}
	});



	/**
	 * MiniPoker
	*/
	// 100 MiniPoker
	HU.findOne({game: "minipoker", type:100, red:true}, 'bet min toX balans x', function(err, mpk100){
		if (file_minipoker[timeNow]) {
			var mpk100bet = mpk100.bet;
			if (file_minipoker[homQua] && mpk100.toX < 1 && mpk100.balans > 0) {
				mpk100bet = mpk100bet-(mpk100.min*mpk100.x);
			}
			HU.findOneAndUpdate({game: "minipoker", type:100, red:true}, {$set:{'bet': mpk100bet, 'toX': file_minipoker['100'].toX, 'balans': file_minipoker['100'].balans, 'x': file_minipoker['100'].x}}, function(err,cat){});
		}else{
			if (file_minipoker[homQua]) {
				var mpk100bet = mpk100.min;
				if (mpk100.toX < 1 && mpk100.balans > 0) {
					mpk100bet = mpk100.bet-(mpk100.min*mpk100.x);
				}
				HU.findOneAndUpdate({game: "minipoker", type:100, red:true}, {$set:{'toX': 0, 'balans': 0, 'bet': mpk100bet}}, function(err,cat){});
			}
		}
	});

	// 1000 MiniPoker
	HU.findOne({game: "minipoker", type:1000, red:true}, 'bet min toX balans x', function(err, mpk1000){
		if (file_minipoker[timeNow]) {
			var mpk1000bet = mpk1000.bet;
			if (file_minipoker[homQua] && mpk1000.toX < 1 && mpk1000.balans > 0) {
				mpk1000bet = mpk1000bet-(mpk1000.min*mpk1000.x);
			}
			HU.findOneAndUpdate({game: "minipoker", type:1000, red:true}, {$set:{'bet': mpk1000bet, 'toX': file_minipoker['1000'].toX, 'balans': file_minipoker['1000'].balans, 'x': file_minipoker['1000'].x}}, function(err,cat){});
		}else{
			if (file_minipoker[homQua]) {
				var mpk1000bet = mpk1000.min;
				if (mpk1000.toX < 1 && mpk1000.balans > 0) {
					mpk1000bet = mpk1000.bet-(mpk1000.min*mpk1000.x);
				}
				HU.findOneAndUpdate({game: "minipoker", type:1000, red:true}, {$set:{'toX': 0, 'balans': 0, 'bet': mpk1000bet}}, function(err,cat){});
			}
		}
	});

	// 10000 MiniPoker
	HU.findOne({game: "minipoker", type:10000, red:true}, 'bet min toX balans x', function(err, mpk10000){
		if (file_minipoker[timeNow]) {
			var mpk10000bet = mpk10000.bet;
			if (file_minipoker[homQua] && mpk10000.toX < 1 && mpk10000.balans > 0) {
				mpk10000bet = mpk10000bet-(mpk10000.min*mpk10000.x);
			}
			HU.findOneAndUpdate({game: "minipoker", type:10000, red:true}, {$set:{'bet': mpk10000bet, 'toX': file_minipoker['10000'].toX, 'balans': file_minipoker['10000'].balans, 'x': file_minipoker['10000'].x}}, function(err,cat){});
		}else{
			if (file_minipoker[homQua]) {
				var mpk10000bet = mpk10000.min;
				if (mpk10000.toX < 1 && mpk10000.balans > 0) {
					mpk10000bet = mpk10000.bet-(mpk10000.min*mpk10000.x);
				}
				HU.findOneAndUpdate({game: "minipoker", type:10000, red:true}, {$set:{'toX': 0, 'balans': 0, 'bet': mpk10000bet}}, function(err,cat){});
			}
		}
	});


	/**
	 * Tài Xỉu
	*/

	TaiXiu_User.updateMany({}, {$set:{'tLineWinHQ':0,'tLineLostHQ':0,'tLineWinHQGift':0,'tLineLostHQGift':0,}}).exec(function(err, okWait){
		var topWin = TaiXiu_User.aggregate([
			{$match:{tLineWinRedH:{$gt:0}}},
			{$project: {
				uid: "$uid",
				top: "$tLineWinRedH",
			}},
			{$sort: {'tLineWinRedH': -1, 'time': -1}},
			{$limit: 20}
		]).exec();

		var topLost = TaiXiu_User.aggregate([
			{$match:{tLineLostRedH:{$gt:0}}},
			{$project: {
				uid: "$uid",
				top: "$tLineLostRedH",
			}},
			{$sort: {'tLineLostRedH': -1, 'time': -1}},
			{$limit: 20}
		]).exec();

		Promise.all([topWin, topLost])
		.then(result => {
			/**
			Promise.all(result[0].map(function(users, index){
				if (index == 0) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineWinHQ':users.top, 'tLineWinHQGift':500000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':500000}}, function(err, ok){});
				}else if (index == 1) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineWinHQ':users.top, 'tLineWinHQGift':200000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':200000}}, function(err, ok){});
				}else if (index == 2) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineWinHQ':users.top, 'tLineWinHQGift':100000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':100000}}, function(err, ok){});
				}else if (index >= 3 && index < 10) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineWinHQ':users.top, 'tLineWinHQGift':50000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':50000}}, function(err, ok){});
				}else if (index >= 10 && index < 50) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineWinHQ':users.top, 'tLineWinHQGift':20000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':20000}}, function(err, ok){});
				}else if (index >= 50 && index < 100) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineWinHQ':users.top, 'tLineWinHQGift':10000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':10000}}, function(err, ok){});
				}
			}));

			Promise.all(result[1].map(function(users, index){
				if (index == 0) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineLostHQ':users.top, 'tLineLostHQGift':500000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':500000}}, function(err, ok){});
				}else if (index == 1) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineLostHQ':users.top, 'tLineLostHQGift':200000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':200000}}, function(err, ok){});
				}else if (index == 2) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineLostHQ':users.top, 'tLineLostHQGift':100000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':100000}}, function(err, ok){});
				}else if (index >= 3 && index < 10) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineLostHQ':users.top, 'tLineLostHQGift':50000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':50000}}, function(err, ok){});
				}else if (index >= 10 && index < 50) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineLostHQ':users.top, 'tLineLostHQGift':20000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':20000}}, function(err, ok){});
				}else if (index >= 50 && index < 100) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineLostHQ':users.top, 'tLineLostHQGift':10000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':10000}}, function(err, ok){});
				}
			}));
			*/
			Promise.all(result[0].map(function(users, index){
				if (index == 0) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineWinHQ':users.top, 'tLineWinHQGift':300000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':300000}}, function(err, ok){});
				}else if (index == 1) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineWinHQ':users.top, 'tLineWinHQGift':200000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':200000}}, function(err, ok){});
				}else if (index == 2) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineWinHQ':users.top, 'tLineWinHQGift':100000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':100000}}, function(err, ok){});
				}else if (index >= 3 && index < 10) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineWinHQ':users.top, 'tLineWinHQGift':50000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':50000}}, function(err, ok){});
				}else if (index >= 10 && index < 20) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineWinHQ':users.top, 'tLineWinHQGift':20000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':20000}}, function(err, ok){});
				}
			}));

			Promise.all(result[1].map(function(users, index){
				if (index == 0) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineLostHQ':users.top, 'tLineLostHQGift':300000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':300000}}, function(err, ok){});
				}else if (index == 1) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineLostHQ':users.top, 'tLineLostHQGift':200000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':200000}}, function(err, ok){});
				}else if (index == 2) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineLostHQ':users.top, 'tLineLostHQGift':100000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':100000}}, function(err, ok){});
				}else if (index >= 3 && index < 10) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineLostHQ':users.top, 'tLineLostHQGift':50000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':50000}}, function(err, ok){});
				}else if (index >= 10 && index < 20) {
					TaiXiu_User.findOneAndUpdate({'_id': users._id}, {$set:{'tLineLostHQ':users.top, 'tLineLostHQGift':20000}}, function(err, ok){});
					UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':20000}}, function(err, ok){});
				}
			}));
			TaiXiu_User.updateMany({}, {$set:{'tLineWinRedH':0,'tLineLostRedH':0,'tLineWinXuH':0,'tLineLostXuH':0,'cLineWinRedH':0,'cLineLostRedH':0,'cLineWinXuH':0,'cLineLostXuH':0}}).exec();
		});
	});
};