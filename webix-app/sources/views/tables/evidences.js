import {JetView} from "webix-jet";
import {dataget} from "models/dataget";

export default class TransactionsView extends JetView {
	config(){
		return {
			view:"datatable", localId:"evidencesgrid",
		
			columns:[
				{
					id:"time", header:"Дата/время",fillspace:1, minWidth:160,
				},
				{
					id:"counter_name", header:"Название счетчика",fillspace:1, minWidth:160,
				},
				{
					id:"counter_num", header:"Номер счетчика",fillspace:1, minWidth:160,
				},
				{
					id:"service_id", header:"Код квитанции",fillspace:1, minWidth:160,
				},
				{
					id:"value", header:"Показания",fillspace:1, minWidth:160,
					
				}
			]
		};
	}
	init(view){
        view.sync(dataget);
}

}
