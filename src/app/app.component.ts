import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firbaseLink="https://http-request-project-661a3.firebaseio.com/";

  servers=[
    {
      name:'TestServer',
      capacity:100,
      serverID:this.generateId()
    },
    {
      name:'My Server',
      capacity:10,
      serverID:this.generateId()
    },
    {
      name:'Live Server',
      capacity:30,
      serverID:this.generateId()
    }    
  ]

  onAddServer(serverName:string){
  this.servers.push({
    name:name,
    capacity:50,
    serverID:this.generateId()
  })
  }
  generateId(){
    return Math.round(Math.random()*1000);
  }
}
