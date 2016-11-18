sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"/sap/m/MessageToast"
	],
	function (Controller,MessageToast){
		"use strict";
		return Controller.extend("training.controller.HelloPanel",{
			onShowHello : function (){
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel().getProperty("/recipient/name");
				var sMsg = oBundle.getText("message", [sRecipient]);
				MessageToast.show(sMsg);
			},
			onOpenDialog : function () {
				this.getOwnerComponent().helloDialog.open(this.getView());
			}
		});
	}
);