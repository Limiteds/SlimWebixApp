import {JetView} from "webix-jet";
import { getProgress } from "models/smshours";

export default class TimeView extends JetView {
	config(){
		return { 
            id:"sms",
			gravity:3,
			minWidth:500,
			height:300,  
            rows:[
                { template:"Смс", type:"header", css:"chart_header" },
                {
                        value:"#state#",
                        view:"chart",
                        border:true,
                        localId:"smsprogress",
                        type:"area",
                        color:"#1CA1C1",
                        
                        line:{
                            width:3
                        },
                        xAxis:{
                            template:"#num#", color:"#EDEFF0"
                        },
                        yAxis:{
                            start:0, step:100, end:1000
                        },
                        
                        padding:{
                            top:10
                        },
                        eventRadius: 5,
                        series:[
                            {
                            alpha:0.1,
                            
                            color: "#58dccd",
                           
                            }
                        ]
                }
            ]
        };
            
    }
    init(){
		this.$$("sms").sync(getProgress);
	}

}