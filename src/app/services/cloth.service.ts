import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Cloth, ClothWithUser } from '../models/Cloth';

@Injectable({
  providedIn: 'root',
})
export class ClothService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}
  private apiUrl: string = environment.api;

  getStockCloths(): Observable<ClothWithUser[]> {
    const token = this.cookieService.get('Token');
    return this.http.get<ClothWithUser[]>(`${this.apiUrl}/Clothes/all`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    });
  }

  getAllCloths(): Observable<Cloth[]> {
    return this.http.get<Cloth[]>(`${this.apiUrl}/Cloth`);
  }
  getClothsByUser(): Observable<Cloth[]> {
    const token = this.cookieService.get('Token');
    return this.http.get<Cloth[]>(`${this.apiUrl}/Clothes/User`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    });
  }

  ReceiveCloth(ClothId: string): Observable<boolean> {
    const token = this.cookieService.get('Token');
    return this.http.post<boolean>(
      `${this.apiUrl}/Clothes/Receive/${ClothId}`,
      undefined,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      }
    );
  }

  registerCloth(Cloth: Cloth): Observable<boolean> {
    const token = this.cookieService.get('Token');
    return this.http.post<boolean>(`${this.apiUrl}/Cloth`, Cloth, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    });
  }

  /* reporte(): Observable<Reporte> {
    const token = this.cookieService.get('Token');
    return this.http.get<Reporte>(`${this.apiUrl}/Clothes/Reporte`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    });
  } */
}
