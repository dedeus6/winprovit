import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
export class AlticciService {

    constructor(private http: HttpClient) { }

    getEvents(index: number){
        return this.http.get<number>(environment.BASE_PATH + `/alticci/${index}`)
    }

}