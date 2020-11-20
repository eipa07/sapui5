/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/myfirstproject/MyFirstProject/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});