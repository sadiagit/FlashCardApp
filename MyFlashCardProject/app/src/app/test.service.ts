import { Injectable } from '@angular/core';
import { BaseHttpClient } from './Base/base.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { ServerResponse } from './viewModels/serverResponse';

@Injectable()
export class TestService extends BaseHttpClient
{
  constructor(http: HttpClient, toastr: ToastrService, spinner: NgxSpinnerService)
  {
    super(http, toastr, spinner);
  }

  public GetValues(): Observable<ServerResponse<string>>
  {
    var url = "/api/values/";
    let parameters = super.CreateSearchParams(true);
    return super.GetDataHttpGet<any>(url, parameters);
  }
}
