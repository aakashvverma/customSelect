import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './app-select.component.html',
  styleUrls: ['./app-select.component.css']
})
export class AppSelectComponent implements OnInit {

  @Input() color: any[];
  @Input() searchable: boolean;
  @Input() multiselect: boolean;

  checkedList: any[];
  currentSelected: {};
  showDropDown: boolean  = false;
  searchtext: any;
  searchArray: any = [];
  originalSearchArray: any = [];
  defaultSet: any = '';
  selectAllVal = false;
  // multiselect = false;

  constructor() {
    this.checkedList = [];
  }

  ngOnInit() {
    let framedOptions = this.optionDataHandler();
    if (framedOptions != null && framedOptions !== undefined) {
      this.color = framedOptions;
    }
    this.searchArray = this.color;
    this.originalSearchArray = this.color;
  }

  filterSearch(searchInput) {
   const searchArr = this.color.filter(i => i.title.indexOf(searchInput) > -1);
   if (searchInput.length >= 2) {
     this.searchArray = searchArr;
   } else {
      this.searchArray = this.color;
   }
  }

  getSelectedValue(status: boolean, value: string , checkVal) {
    if (checkVal.currentTarget.checked) {
      this.checkedList.push(value);
    } else {
        const index = this.checkedList.indexOf(value);
        this.checkedList.splice(index, 1);
    }
    this.currentSelected = {checked : checkVal, title: value};

    // share checked list
    // this.shareCheckedlist();
    // share individual selected item
    // this.shareIndividualStatus();
}

selectAll(selected) {
  this.checkedList = [];
  if (selected.currentTarget.checked) {
    this.color.forEach(element => {
      element.checked =  true;
      this.checkedList.push(element.title);
    });
  } else {
    this.color.forEach(element => {
      element.checked =  false;
      const index = this.checkedList.indexOf(element.title);
      this.checkedList.splice(index, 1);
    });
  }
}

defaultSelection(selectedVal) {
  this.selectAllVal = false;
  this.searchArray.forEach(element => {
    element.checked = false;
  });
  const itemfound = this.searchArray.find( (x: { title: any; }) => x.title === selectedVal.currentTarget.value);
  if (itemfound != null && itemfound !== undefined) {
    itemfound.checked = true;
  }
}

  optionDataHandler() {
    const itemfound = this.color.find( (x: { title: any; }) => typeof(x) !== 'object');
    if (itemfound != null && itemfound !== undefined) {
      let newColorArr = [];
      this.color.forEach(element => {
        if (typeof(element) === 'string') {
          let objectFrame = {title: '' , checked: false};
          objectFrame.title = element;
          element = objectFrame;
        }
        newColorArr.push(element);
      });
      return newColorArr;
    } else {
      return null;
    }
  }

  clearSelectedOptions() {
    this.searchArray.forEach(element => {
      element.checked = false;
      this.selectAllVal = false;
    });
    this.checkedList = [];
  }
}
