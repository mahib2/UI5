sap.ui.define([
		"sap/ui/base/Object"
	],
	function(Object) {
		"use strict";
		return Object.extend("training.controller.HelloDialog", {
			_getDialog: function(oView) {
				if (!this._oDialog) {
					this._oDialog = sap.ui.xmlfragment("training.view.HelloDialog", this);
					oView.addDependent(this._oDialog);
					oView.attachBeforeExit(function() {
						oView.removeDependent(this._oDialog);
					}.bind(this));
				}
				return this._oDialog;
			},
			destroy: function() {
				if (this._oDialog) {
					this._oDialog.destroy();
				}
			},
			open: function(oView) {
				this._getDialog(oView).open();
			},
			onCloseDialog: function() {
				this._getDialog().close();
			}
		});
	}
);