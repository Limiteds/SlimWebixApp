import {JetView} from "webix-jet";


export default class ChartsView extends JetView{
	config(){
		return {
			view:"scrollview", body:{
				type:"space",
				rows:[
					{
						type:"wide", cols:[
							{ $subview:"charts.column.сolumn_indication" },
							{ $subview:"charts.column.сolumn_call" },
							{ $subview:"charts.column.сolumn_sms" },
							{ $subview:"charts.column.сolumn_pa" }
						]
					},
					{
						type:"wide", cols:[
						
							{ $subview:"charts.call" },
							{ $subview:"charts.sms" }
						]
					},
					{
						$subview:"charts.statistics"
					},
					
					
				]
			}
		};
	}
}