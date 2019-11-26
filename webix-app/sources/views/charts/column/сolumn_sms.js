import {JetView} from "webix-jet";

export default class ProgressView extends JetView {
	config(){
		return {
            rows:[{
                css:"custom_d",
                template:"1255 СМС", minHeight: 40
            }
            ]
        }
    }
}