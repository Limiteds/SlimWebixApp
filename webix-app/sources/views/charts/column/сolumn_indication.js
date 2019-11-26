import {JetView} from "webix-jet";

export default class ProgressView extends JetView {
	config(){
		return {
            rows:[{
                css:"custom_d",
                template:"20998 Передано показаний", minHeight: 40
            }
            ]
        }
    }
}