import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class AnimalAttributeService {
  
  private url = "http://localhost:5000/api/getAnimals";
  private attr_url = "http://localhost:5000/api/getAttributes"

  constructor(private http: Http) { }

  getAnimalsSuggestion(word){
    return this.http.get(this.url+"?"+"word="+word);
  }

  getAnimalAttributes(animal){
    return this.http.get(this.attr_url+"?"+"animal="+animal);
  }
}
