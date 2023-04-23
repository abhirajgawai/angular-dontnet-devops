import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-devops';

  constructor(private http: HttpClient) {}

  items!: string[];

  ngOnInit(): void {
    this.http.get<string[]>('http://localhost:5109/api/Items').subscribe(result => {
      this.items = result;
    }, error => console.error(error));
  }
}
