import { Component, OnInit } from "@angular/core";
import { AnimalAttributeService } from "../../services/animal-attribute.service";

@Component({
  selector: "app-animal-attribute",
  templateUrl: "./animal-attribute.component.html",
  styleUrls: ["./animal-attribute.component.css"]
})


export class AnimalAttributeComponent implements OnInit {
  animal = "";
  animals = "";
  showDropDown = false;
  currIndex = 0;
  selected_animal = "";
  attributes = "";
  showDropDownAttr = false;
  showAttrList = false;
  selected_attribute = "";
  job = 0;
  constructor(private service: AnimalAttributeService) {}

  ngOnInit() {}

  // Method gets fired up on key up inside the Animal input field
  async onKeyUp(event){
    if(event.code == "ArrowUp" || event.code=="ArrowDown" || event.keyCode==13){
      if(this.showDropDown==true){
        if (event.code == "ArrowUp" && this.currIndex > 0) {
          this.currIndex--;
        }
        if (event.code == "ArrowDown" && this.currIndex < this.animals.length - 1) {
          this.currIndex++;
        }
        if (event.keyCode == 13) {
          this.animal = this.animals[this.currIndex];
          this.selected_animal = this.animal;
          this.showDropDown = false;
          this.service
            .getAnimalAttributes(this.animals[this.currIndex])
            .subscribe(response => {
              if (response.json().length != 0) {
                this.attributes = response.json();
                this.showDropDownAttr = true;
              }
            });
        }
      }
    }
    else{
      if(this.animal.length>2){
        if(this.selected_animal==""){
          this.showDropDownAttr = false;
        if (this.job)
          window.clearTimeout(this.job);
          this.job = window.setTimeout(
          function() {
            this.service
              .getAnimalsSuggestion(this.animal)
              .subscribe(response => {
                
                if (response.json().length != 0) {
                  this.animals = response.json();
                  this.showDropDown = true;
                }
              });
          }.bind(this),
          500
        );
        }
        else if(this.animal==this.selected_animal){
          this.showDropDown=false
        }
        else if(this.animal!=this.selected_animal){
          this.currIndex = 0;
          this.selected_animal = "";
          this.showDropDown = false;
          this.showDropDownAttr = false;
          this.selected_attribute = "";
          this.animals=""
          this.attributes=""
        }
      }
      else{
        this.currIndex = 0;
        this.selected_animal = "";
        this.showDropDown = false;
        this.showDropDownAttr = false;
        this.selected_attribute = "";
        this.animals=""
        this.attributes=""
      }
    }
  }

  // Once the user clicks on the Animal suggestions. This method gets called
  handleDropDownClick(value) {
    this.animal = value;
    this.selected_animal = value;
    this.showDropDown = false;
    this.service.getAnimalAttributes(this.animal).subscribe(response => {
      if (response.json().length != 0) {
        this.attributes = response.json();
        this.showDropDownAttr = true;
      }
    });
  }


  // This is to toggle the Atribute list click
  handleAttributeListClick() {
    this.showAttrList = !this.showAttrList;
  }

  // This is called when the Attribute is clicked from the dropdown
  handleAttrDropDownClick(attribute) {
    this.selected_attribute = attribute;
    this.showAttrList = false;
  }

  // Switches control between mouse over and key up key down
  handleDropDownMouseOver(event){
    this.currIndex=-1;
  }
}
