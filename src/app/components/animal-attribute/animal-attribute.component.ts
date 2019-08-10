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
  activeIndex = 0;
  selected_animal = "";
  attributes = "";
  showDropDownAttr = false;
  showAttrList = false;
  selected_attribute = "";
  job = 0;
  constructor(private service: AnimalAttributeService) {}

  ngOnInit() {}

 
  // async onKeyUp(evt) {
  //   if (this.animal.length > 2) {
  //     if (this.selected_animal == "") {
  //       this.showDropDownAttr = false;
  //       if (this.job)
  //         window.clearTimeout(this.job);
  //       this.job = window.setTimeout(
  //         function() {
  //           this.service
  //             .getAnimalsSuggestion(this.animal)
  //             .subscribe(response => {
  //               this.animals = response.json();
  //             });
  //         }.bind(this),
  //         500
  //       );

  //       this.showDropDown = true;

  //       if (evt.code == "ArrowUp" && this.activeIndex > 0) {
  //         this.activeIndex--;
  //       }

  //       if (
  //         evt.code == "ArrowDown" &&
  //         this.activeIndex < this.animals.length - 1
  //       ) {
  //         this.activeIndex++;
  //       }

  //       if (evt.keyCode == 13) {
  //         this.animal = this.animals[this.activeIndex];
  //         this.selected_animal = this.animal;
  //         this.showDropDown = false;
  //         this.service
  //           .getAnimalAttributes(this.animals[this.activeIndex])
  //           .subscribe(response => {
  //             if (response.json().length != 0) {
  //               this.attributes = response.json();
  //               this.showDropDownAttr = true;
  //             }
  //           });
  //       }
  //     } else if (evt.target.value !== this.selected_animal) {
  //       this.showDropDownAttr = false;
  //     }
  //   } else {
  //     this.activeIndex = 0;
  //     this.selected_animal = "";
  //     this.showDropDown = false;
  //     this.showDropDownAttr = false;
  //     this.selected_attribute = "";
  //   }
  // }


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


  handleAttributeListClick() {
    this.showAttrList = !this.showAttrList;
  }


  handleAttrDropDownClick(attribute) {
    this.selected_attribute = attribute;
    this.showAttrList = false;
  }

  async fireOnKeyUp(event){
    if(event.code == "ArrowUp" || event.code=="ArrowDown" || event.keyCode==13){
      if(this.showDropDown==true){
        if (event.code == "ArrowUp" && this.activeIndex > 0) {
          this.activeIndex--;
        }
        if (event.code == "ArrowDown" && this.activeIndex < this.animals.length - 1) {
          this.activeIndex++;
        }
        if (event.keyCode == 13) {
          this.animal = this.animals[this.activeIndex];
          this.selected_animal = this.animal;
          this.showDropDown = false;
          this.service
            .getAnimalAttributes(this.animals[this.activeIndex])
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
          this.activeIndex = 0;
          this.selected_animal = "";
          this.showDropDown = false;
          this.showDropDownAttr = false;
          this.selected_attribute = "";
          this.animals=""
          this.attributes=""
        }
      }
      else{
        this.activeIndex = 0;
        this.selected_animal = "";
        this.showDropDown = false;
        this.showDropDownAttr = false;
        this.selected_attribute = "";
        this.animals=""
        this.attributes=""
      }
    }
  }


  handleAnimalMouseOver(event){
    this.activeIndex=-1;
  }
}
