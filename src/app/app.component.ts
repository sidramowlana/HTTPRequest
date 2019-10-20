import { Component } from '@angular/core';
import { ServerService } from './serverService.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  servers = [
    {
      name: 'TestServer',
      capacity: 100,
      serverID: this.generateId()
    },
    {
      name: 'My Server',
      capacity: 10,
      serverID: this.generateId()
    },
    {
      name: 'Live Server',
      capacity: 30,
      serverID: this.generateId()
    }
  ]
  constructor(private serverService: ServerService) { }
  
  appName = this.serverService.getAppName();
  onAddServer(serverName: string) {
    this.servers.push({
      name: serverName,
      capacity: 50,
      serverID: this.generateId()
    })
  }
  onSave() {
    this.serverService.saveServer(this.servers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)

    )
  }
  onUpdate() {
    this.serverService.updateServer(this.servers).subscribe(
      (response: Response) => {
        const data = response.json()
        console.log(data);
      },
      (error:Response) => { console.log(error); }
    );
  }
  onGet() {
    this.serverService.getServer().subscribe(
      (server: any[]) => {
      this.servers = server;
        console.log(server)},
      (error) => {
        console.log(error);
      }
    )
  }
  generateId() {
    return Math.round(Math.random() * 1000);
  }
}
