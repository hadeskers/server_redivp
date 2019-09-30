
var add       = require('./add');
var remove    = require('./remove');
var list      = require('./list');
var rut       = require('./rut');
var updateRut = require('./updateRut');

var nap       = require('./nap');
var napAdd    = require('./napAdd');



module.exports = function (client, data) {
	if (!!data.list) {
		list(client);
	}
	if (!!data.add) {
		add(client, data.add);
	}
	if (!!data.remove) {
		remove(client, data.remove);
	}
	if (!!data.rut) {
		rut(client, data.rut);
	}
	if (!!data.updateRut) {
		updateRut(client, data.updateRut);
	}
	if (!!data.nap) {
		nap(client, data.nap);
	}
	if (!!data.napAdd) {
		napAdd(client, data.napAdd);
	}
}
