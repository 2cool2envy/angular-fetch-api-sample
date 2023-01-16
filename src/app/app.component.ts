import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIResponse } from './response-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userList:Array<APIResponse> = [];
  
  ngOnInit() {
    this.getDataFromAPI()
  }

  getDataFromAPI(): void {
    fetch(environment.apiUrl)
      .then((res) => res.json())
      .then((apiData: Array<APIResponse>) => this.userList = apiData)
      .catch((err) => console.warn('Error while API call', err));
  }
}
