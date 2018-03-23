import { environment } from "../environments/environment";
import { WebSocketService } from "./websocket.service";
import { IDataObserver } from "./IDataObserver";

// If you use a TypeScript interface instead of a class, things are simpler:

// export interface Employee {
//     typeOfEmployee_id: number;
//     department_id: number;
//     permissions_id: number;
//     maxWorkHours: number;
//     employee_id: number;
//     firstname: string;
//     lastname: string;
//     username: string;
//     birthdate: Date;
//     lastUpdate: Date;
// }

// let jsonObj: any = JSON.parse(employeeString); // string to generic object first
// let employee: Employee = <Employee>jsonObj;

/*
This singelton class acts as a single path to send/recieve any data to/from the websocket server.
All other objects will subscribe to this class to get any updates or post updates.
*/
export class DataClient
{
	private ws:WebSocket;
	private url:string;
	messageFromServer:object; //Employee
    private static _instance: DataClient;
    private wsService:WebSocketService;

    private subscribers:IDataObserver[];

    private constructor()
    {
    	console.log('Connecting to WebSocket Server');
    	this.wsService = null;

    	this.subscribers = [];
    	this.wsService = new WebSocketService();
    	this.url = environment.webSocketUrl;
	  	this.wsService.createObservableSocket(this.url)
	  	.subscribe(
	  		data => {
	  			this.messageFromServer = JSON.parse(data);
	  			// let employee: Employee = <Employee>jsonObj;
	  			for(let i=0;i<this.subscribers.length;i++)
	  			{
	  				this.subscribers[i].ReceiveNotification(this.messageFromServer);
	  			}
	  		},
	  		err => console.log(err),
	  		() => console.log('The observable stream is complete')
	  		);
    }

    public static getInstance()
    {
        return this._instance || (this._instance = new this());
    }
    public subscribe(subscriber:IDataObserver)
    {
    	this.subscribers.push(subscriber);
    }
    sendMessageToServer(message:object)
    {
    	this.wsService.sendMessage(JSON.stringify(message));
    }
}