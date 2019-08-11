import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable({
  providedIn: 'root'
})

// Service that makes call to the APIs and is injected into component
export class AnimalAttributeService {
  
  private url = "http://localhost:5000/api/getAnimals";
  private attr_url = "http://localhost:5000/api/getAttributes"

  constructor(private http: Http) { }

  // Method to get Animal Suggestions
  getAnimalsSuggestion(word){
    return this.http.get(this.url+"?"+"word="+word);
  }


  // Method to get Animal Characteristics
  getAnimalAttributes(animal){
    return this.http.get(this.attr_url+"?"+"animal="+animal);
  }
}
