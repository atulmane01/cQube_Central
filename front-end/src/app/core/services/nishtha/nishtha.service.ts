import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDashboardMenu } from 'src/app/core/models/IDashboardCard';
import { IMenuItem } from 'src/app/core/models/IMenuItem';
import { ResponseType } from 'src/app/core/models/IResponseType';
import { environment } from 'src/environments/environment';
import { IStateWiseEnrollmentRec } from '../../models/IStateWiseEnrollmentRec';

@Injectable({
  providedIn: 'root'
})
export class NishthaService {

  constructor(private readonly _http: HttpClient) { }

  getNishthaMenu(): Observable<ResponseType<IDashboardMenu[]>> {
    return this._http.get<ResponseType<IDashboardMenu[]>>(`${environment.apiURL}/nishtha/getNishthaMenu`);
  }

  getStateWiseEnrollmentData(version: string): Observable<ResponseType<IStateWiseEnrollmentRec[]>> {
    return this._http.get<ResponseType<IStateWiseEnrollmentRec[]>>(`${environment.apiURL}/nishtha/getStateWiseEnrollmentData/${version}`);
  }
}
