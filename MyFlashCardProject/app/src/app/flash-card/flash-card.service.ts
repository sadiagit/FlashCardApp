import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { BaseHttpClient } from '../Base/base.service';
import { ServerResponse } from '../viewModels/serverResponse';
import { FlashCard, Category } from './flash-card.model';


@Injectable()
export class FlashCardervice extends BaseHttpClient
{
  APIBaseUrl: string = "/api/flashcard/";
  GetCategories(): Observable<ServerResponse<Category[]>>
  {
    var url = this.APIBaseUrl + "categories"
    let parameters = super.CreateSearchParams(true);
    return super.GetDataHttpGet<any>(url, parameters);
  }
  LoadFlashCards(request): Observable<ServerResponse<FlashCard[]>>
  {
    var url = this.APIBaseUrl +'get'
    return super.GetDataHttpPost<any>(url, request);
  }

  constructor(http: HttpClient, toastr: ToastrService, spinner: NgxSpinnerService)
  {
    super(http, toastr, spinner);
  }

  public GetFlashCards(): Observable<ServerResponse<string>>
  {
    var url = "/api/values/";
    let parameters = super.CreateSearchParams(true);
    return super.GetDataHttpGet<any>(url, parameters);
  }
  AddNewFlashCard(request: { question: string; answer: string; type: string; category: number; }): Observable<ServerResponse<string>>
  {
    var url = this.APIBaseUrl + 'addnew'
    return super.GetDataHttpPost<any>(url, request);
  }

  AddNewCategory(request: { CategoryName: any; ParentCategoryId: any; })
  {
    var url = this.APIBaseUrl + 'addcategory'
    return super.GetDataHttpPost<any>(url, request);
  }

}
