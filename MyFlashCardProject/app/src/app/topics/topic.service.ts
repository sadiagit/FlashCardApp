import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { BaseHttpClient } from '../Base/base.service';
import { ServerResponse } from '../viewModels/serverResponse';



@Injectable()
export class TopicService extends BaseHttpClient
{
  APIBaseUrl: string = "/api/topic/";
 
  constructor(http: HttpClient, toastr: ToastrService, spinner: NgxSpinnerService)
  {
    super(http, toastr, spinner);
  }

  public GetUnreadTopicsCount(): Observable<ServerResponse<number>>
  {
    var url = this.APIBaseUrl + 'unread-counts';
    let parameters = super.CreateSearchParams(true);
    return super.GetDataHttpGet<any>(url, parameters);
  }
  

}
