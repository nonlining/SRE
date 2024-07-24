import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

interface OPT {
  options: string[];
}

@Component({
  selector: 'app-operationtools',
  templateUrl: './operationtools.component.html',
  styleUrls: ['./operationtools.component.scss']
})
export class OPERATIONTOOLSComponent implements OnInit{
  
  options: string[] = [];
  selectedOption: string = '';
  item: string = "";
  apiUrl: string = "";


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.apiUrl = 'http://127.0.0.1:5000/api';
    
    this.http.get<OPT>(`${this.apiUrl}/get_options`).subscribe(opt => {      
      this.options = opt.options;
    });;
    
  }


  onOptionSelected(option: string) {

    //this.item = (<HTMLSelectElement>event.target).value;
    this.item = option;
    
  }

  performAction(item: string) {
    alert(item)
    //this.greetService.doSomething(item).subscribe(response => {
    //  this.message = response.message;
    //});
  }

}