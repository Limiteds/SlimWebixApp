import {JetView} from "webix-jet";
import {allpayments} from "models/allpayments";

export default class TransactionsView extends JetView {
	config(){
		return {
			id: "table",
			view:"datatable", localId:"requestsgrid",
		
			columns:[
				{
					id:"time", header:"Дата и время", fillspace:1, minWidth:160,
				},
				{
					id:"num", header:"Номер", fillspace:1, minWidth:90
				},
				{
					id:"channel", header:"Канал", fillspace:3
				},
				{
					id:"callid", header:"Идентификатов", fillspace:3
				},
				{
					id:"account", header:"Лицевой счет", fillspace:3
				},
				{
					id:"addr", header:"Адрес", fillspace:4
				},
				{
					id:"uk", header:"УК", fillspace:1.5, minWidth:190
				}
			]
		};
	}

	init(view){
		view.sync(allpayments);
    }
}
