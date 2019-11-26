import {JetView} from "webix-jet";

export default class ProgressView extends JetView {
	config(){
		return {
            rows:[{
                css:"custom_d",
                template:"6963 Лицевых счетов", minHeight: 40
            }
            ]
        }
    }
}