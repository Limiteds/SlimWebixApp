import {JetView} from "webix-jet";
import { getProgress } from "models/progress";

export default class ProgressView extends JetView {
	config(){
		return {
			id:"call",
			gravity:3,
			minWidth:500,
			height:300,
			rows:[
				{ template:"Звонки", type:"header", css:"chart_header" },
				{
					value:"#num#",
					view:"chart",
					border:true,
					type:"area",
					localid:"call",
					color:"#1CA1C1",
					borderWidth:2,
					
					line:{
						width:3
					},
					xAxis:{
						template:"#time#", color:"#EDEFF0"
					},
					yAxis:{
						start:0, end:1000, step:100
					},
					padding:{
						top:10
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
		this.$$("call").sync(getProgress);
	}

}
