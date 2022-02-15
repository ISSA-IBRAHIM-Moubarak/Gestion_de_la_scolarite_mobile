import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { apiUrl } from 'src/app/constantes';

/*const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};*/

export class Utilisateur {
  nomUtilisateur: string;
  prenomUtilisateur: string;
  dateNaissance: string;
  civilite: string;
  telephone: string;
  email: string;
  password: string;
}

export class Apprenant {
  nom: string;
  prenom: string;
  dateNaissance: string;
  lieuNaissance: string;
  genre: string;
  Telephone: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  /*private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status},` +`body was: ${error.error}`);
        const Erreur500 =  error.error.message;
      }
      // return an observable with a user-facing error message
      return throwError(error.status);
    }

    Inscription(nomUtilisateur: string,
                prenomUtilisateur: string,
                dateNaissance: string,
                civilite: boolean,
                telephone: string,
                email: string,
                password: string
                ): Observable<any> {
      const params = new HttpParams().set('nomUtilisateur', nomUtilisateur)
                                     .set('prenomUtilisateur', prenomUtilisateur)
                                     .set('dateNaissance', dateNaissance)
                                     .set('civilite', civilite)
                                     .set('telephone', telephone)
                                     .set('email', email)
                                     .set('password', password);
      const url = `${apiUrl}/inscription`;
      return this.http.post(url, params, httpOptions).pipe(map(results => results),
      catchError(this.handleError));
    }*/

  createUser(utilisateur: Utilisateur): Observable<any> {
    const url = `${apiUrl}/users`;
    return this.http.post<Utilisateur>(url, JSON.stringify(utilisateur), this.httpOptions)
      .pipe(
        catchError(this.handleError<Utilisateur>('Error occured'))
      );
  }

  createApprenant(apprenant: Apprenant): Observable<any> {
    const url = `${apiUrl}/inscription`;
    return this.http.post<Apprenant>(url, JSON.stringify(apprenant), this.httpOptions)
      .pipe(
        catchError(this.handleError<Apprenant>('Error occured'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
