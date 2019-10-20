import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
// import { pipe } from "rxjs";

@Injectable()
export class ServerService {
    constructor(private http: Http) { }

    saveServer(servers: any[]) {
        const myHeader = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://http-request-project-661a3.firebaseio.com/data.json', servers, { headers: myHeader });;
    }
    updateServer(servers: any[]) {
        const myHeader = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('https://http-request-project-661a3.firebaseio.com/data.json', servers, { headers: myHeader });
    }

    getServer() {
        return this.http.get('https://http-request-project-661a3.firebaseio.com/data.json')
            .pipe(
                map(
                    (response: Response) => {
                        const data = response.json();
                        for (let server of data) {
                            server.name = 'FETCHED_' + server.name;
                        }
                        return data;
                    }),
                catchError(
                    (error: Response) => {
                        return throwError('something went wrong');
                    })

            );
        //    .map(
        //         (response: Response) => {
        //             const data = response.json();
        //             for (let server of data) {
        //                 server.name = 'FETCHED_' + server.name;
        //             }
        //             return data;
        //         }),
        // .catch(
        //     (error: Response) => {
        //         return Observable.throw('something went wrong');
        //     })
    }

    getAppName(){
        return this.http.get('https://http-request-project-661a3.firebaseio.com/appName.json').pipe
        (
            map((response:Response)=>
            {
                return response.json();
            })
        )
    }
}
