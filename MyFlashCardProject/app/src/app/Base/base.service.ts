import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerResponse } from '../viewModels/serverResponse';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

export abstract class BaseHttpClient
{
  headers: any;
  constructor(private http: HttpClient, private toastr: ToastrService, private spinner: NgxSpinnerService)
  {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  protected CreateSearchParams(randomizerAlways = false): HttpParams
  {
    let parameters = new HttpParams();

    if (randomizerAlways && navigator.onLine)
    {
      let time = new Date().getTime();
      parameters = parameters.append("random", time.toString());
    }

    return parameters;
  }

  protected GetDataHttpPost<T>(url: string, postOjbect: any, displayError = true): Observable<ServerResponse<T>>
  {

    return this.http.post<ServerResponse<T>>(url, postOjbect, { headers: this.headers })
      .pipe(tap(sr =>
      {
        var toastr = this.toastr;
        sr.IsSuccess = function ()
        {
          if (!this.success)
            return toastr.error(this.message);

          return this.success;
        };

      }),
        catchError(this.handleError(url, displayError, null)));


  }

  protected GetDataHttpGet<T>(url: string, postOjbect: HttpParams, displayError = true): Observable<ServerResponse<T>>
  {

    return this.http.get<ServerResponse<T>>(url, { params: postOjbect })
      .pipe(
        tap(sr =>
        {
          var toastr = this.toastr;
          sr.IsSuccess = function ()
          {
            if (!this.success)
              return toastr.error(this.Message);

            return this.success;
          };

        }),
        catchError(this.handleError(url, displayError, null)));


  }

  protected handleError<T>(operation = 'operation', showError: boolean, result?: T)
  {
    return (error: any): Observable<T> =>
    {
      if (error != null && error.status == 401)
      {
        localStorage.setItem("lastUrl", encodeURI(window.document.location.href));
        //   window.document.location.href = ApplicationManager.BaseSitePath + "Login.aspx?ReturnUrl=" + encodeURI(window.document.location.href);
        return Observable.throw(error.statusText);
      }

      let errMsg = "Unexpected error occurred. Please try again. If the problem persists contact IT Support. <br \>Status Code: " + error.status + "<br \>Status Text: " + error.statusText
      console.error(errMsg); // log to console instead


      if (showError)
      {
        this.spinner.hide();
        this.toastr.error(errMsg);
      }

      return Observable.throw(errMsg);
    };
  }




}
