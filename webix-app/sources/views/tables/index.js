import {JetView} from "webix-jet";

export default class TablesView extends JetView{
	config(){
		return {
			type:"space",
			rows:[
				{
					type:"wide", cols:[
						
						{
						  view: "button", css:"expotr_e", label: "Экспорт в Excel", minwidth: 195, click:function(){
							webix.toExcel($$("table"));
						  }
						}
					]
				},
				
				{
					type:"wide", cols:[
						{ $subview:"tables.requests" },
					
					]
				},
				{
					type:"wide", cols:[
						{
							css:"custom_d",
							template:"Показания",
							height:50
						  }
					]
				},
				{
					type:"wide", cols:[
						{ $subview:"tables.evidences" },
					]
				}
			]
		};
	}
}