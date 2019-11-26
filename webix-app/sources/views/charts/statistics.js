import {JetView} from "webix-jet";
import {getStats} from "models/statistics";

export default class StatisticsView extends JetView{
	config(){
		return {
			id:"stats",
			type:"area",
			gravity:3,
			minWidth:500,
			height:300,
		
			 rows:[
				{ template:"Переданные показатели", type:"header", css:"chart_header" },
				{
					border:true,
					view:"chart",
					type:"area", 
					value:"#value#",
					color:"#1CA1C1",
					borderWidth:2,
					alpha:0.1,
		
					padding:{
						top:10, bottom:44
					},
					xAxis:{
						template:"#week#",  color:"#EDEFF0"
			
					},
					yAxis:{
						start:0, step:25, end:100, color:"#fff"
					},
					series:[
						{
						alpha:0.7,
						color: "#58dccd",
					   
						}
					]
				}
			]
		};
	}
	init(){
	
		this.$$("stats").parse(getStats);
	}
}
