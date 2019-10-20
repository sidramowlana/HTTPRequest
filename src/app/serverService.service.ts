import { Injectable } from "@angular/core";
import { Http, Headers, Response} from "@angular/http";
import { map } from 'rxjs/operators'

@Injectable()
export class ServerService {
    constructor(private http:Http){}

    saveServer(servers:any[]){
        const myHeader = new Headers({'Content-Type':'application/json'});
        return this.http.post('https://http-request-project-661a3.firebaseio.com/data.json',servers,{headers:myHeader});   ;
    }
    updateServer(servers:any[]){
        const myHeader =  new Headers({'Content-Type':'application/json'});
        return this.http.put('https://http-request-project-661a3.firebaseio.com/data.json',servers,{headers:myHeader});
    }
    
    getServer()
    {
        return this.http.get('https://http-request-project-661a3.firebaseio.com/data.json')
        .pipe(map(
            (response: Response)=>{
                const data = response.json();
                for(let server of data){
                    server.name = 'FETCHED_' + server.name;
                }
                return data;
            }
        ));
    }
}
