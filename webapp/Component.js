sap.ui.define(
	[
		"sap/ui/core/UIComponent",
		"sap/ui/model/json/JSONModel",
		"training/controller/HelloDialog"
	],
	function (UIComponent, JSONModel, HelloDialog)
	{
		"use strict";
		return UIComponent.extend(
			"training.Component",
			{
				metadata:{
					manifest : "json"
				},
				init:function(){
					//call the init function  of the parent
					UIComponent.prototype.init.apply(this, arguments);
					//body
					//Data Model
					var oData = {
						recipient : {
							name : "world"
						}
					};
					var oModel = new JSONModel(oData);
					this.setModel(oModel);
					this.helloDialog = new HelloDialog();
				},
				exit : function () {
					this.helloDialog.destroy();
				}
			}
		);
	}
);