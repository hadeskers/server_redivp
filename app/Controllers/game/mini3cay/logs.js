
const Mini3Cay_red = require('../../../Models/Mini3Cay/Mini3Cay_red');
const Mini3Cay_xu  = require('../../../Models/Mini3Cay/Mini3Cay_xu');

module.exports = function(client, data){
	var page = data.page>>0; // trang
	var red  = !!data.red;   // Loại tiền (Red: true, Xu: false)
	if (page < 1) {
		client.send(JSON.stringify({notice:{text: "DỮ LIỆU KHÔNG ĐÚNG...", title: "THẤT BẠI"}}));
	}else{
		var kmess = 8;
		if (red) {
			Mini3Cay_red.countDocuments({uid: client.UID}).exec(function(err, total){
				Mini3Cay_red.find({uid: client.UID}, 'id bet win kq time', {sort:{'_id':-1}, skip: (page-1)*kmess, limit: kmess}, function(err, result) {
					if (result.length) {

						console.log(result)
						Promise.all(result.map(function(obj){
							obj = obj._doc;
							delete obj.__v;
							delete obj._id;
							return obj;
						}))
						.then(function(arrayOfResults) {
							client.send(JSON.stringify({mini:{bacay:{logs:{data:arrayOfResults, page:page, kmess:kmess, total:total}}}}));
						})
					}else{
						client.send(JSON.stringify({mini:{bacay:{logs:{data:[], page:page, kmess:kmess, total:0}}}}));
					}
				});
			})
		}else{
			Mini3Cay_xu.countDocuments({uid: client.UID}).exec(function(err, total){
				Mini3Cay_xu.find({uid: client.UID}, 'id bet win kq time', {sort:{'_id':-1}, skip: (page-1)*kmess, limit: kmess}, function(err, result) {
					if (result.length) {
						console.log(result)
						Promise.all(result.map(function(obj){
							obj = obj._doc;
							delete obj.__v;
							delete obj._id;
							return obj;
						}))
						.then(function(arrayOfResults) {
							client.send(JSON.stringify({mini:{bacay:{logs:{data:arrayOfResults, page:page, kmess:kmess, total:total}}}}));
						})
					}else{
						client.send(JSON.stringify({mini:{bacay:{logs:{data:[], page:page, kmess:kmess, total:0}}}}));
					}
				});
			})
		}
	}
};
