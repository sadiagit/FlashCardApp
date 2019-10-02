import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TopicService } from './topics/topic.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TopicService]

})
export class AppComponent implements OnInit
{
  UnreadTopicsCount: number;
  ngOnInit(): void
  {
    this.topicService.GetUnreadTopicsCount().subscribe((res) =>
    {
      if (res.IsSuccess())
      {
        this.UnreadTopicsCount = res.payLoad;

      }
    })
    this.InitilaiseSignalRNotification();
  }


  constructor(private topicService: TopicService, private toastr: ToastrService, private spinner: NgxSpinnerService)
  {

  }

  private InitilaiseSignalRNotification() {
        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl("/notify")
            .build();
        connection.start().then(function() {
            console.log('Connected!');
        }).catch(function(err) {
            return console.error(err.toString());
        });
        connection.on("messageReceived", (unreadTopicCount) => {
            this.toastr.info('There are some new topics added that you mihgt be interested to read. Please check Topics.');
            this.UnreadTopicsCount = unreadTopicCount;
        });
    }
}
