import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()
export class ServerService {
    constructor(private http:Http){}

    saveServer(servers:any[]){
        const myHeader = new Headers({'Content-Type':'application/json'});
        return this.http.post('https://http-request-project-661a3.firebaseio.com/data.json',servers,{headers:myHeader});
    }
    updateServer(servers:any[]){
        const myHeader =  new Headers({'Content-Type':'application/json'});
        return this.http.put('https://http-request-project-661a3.firebaseio.com/data.json',servers,{headers:myHeader});
    }
    getServer()
    {
        return this.http.get('https://http-request-project-661a3.firebaseio.com/data.json');
    }
}
