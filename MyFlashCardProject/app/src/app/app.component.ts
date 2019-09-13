import { Component } from '@angular/core';
import { TestService } from './test.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TestService]
})
export class AppComponent {
  title = 'app';

  constructor(private svc: TestService)
  {
    this.svc.GetValues().subscribe(r =>
    {
      console.log(r.payLoad); //https://github.com/aspnet/Announcements/issues/194
    })
  }
}
