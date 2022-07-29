import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorld {
  constructor(public message:string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldService(){
    // console.log(this.http.get('http://localhost:8080/'));
    return this.http.get<HelloWorld>('http://localhost:8080/hello-world-object');
  }
}
