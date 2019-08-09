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

 
  async onKeyUp(evt) {
    if (this.animal.length > 2) {
      if (this.selected_animal == "") {
        this.showDropDownAttr = false;
        if (this.job)
          window.clearTimeout(this.job);
        this.job = window.setTimeout(
          function() {
            this.service
              .getAnimalsSuggestion(this.animal)
              .subscribe(response => {
                this.animals = response.json();
              });
          }.bind(this),
          500
        );

        this.showDropDown = true;

        if (evt.code == "ArrowUp" && this.activeIndex > 0) {
          this.activeIndex--;
        }

        if (
          evt.code == "ArrowDown" &&
          this.activeIndex < this.animals.length - 1
        ) {
          this.activeIndex++;
        }

        if (evt.keyCode == 13) {
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
      } else if (evt.target.value !== this.selected_animal) {
        this.showDropDownAttr = false;
      }
    } else {
      this.activeIndex = 0;
      this.selected_animal = "";
      this.showDropDown = false;
      this.showDropDownAttr = false;
      this.selected_attribute = "";
    }
  }


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
    this.showAttrList = true;
  }


  handleAttrDropDownClick(attribute) {
    this.selected_attribute = attribute;
    this.showAttrList = false;
  }
}
