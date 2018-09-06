import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  total = 0;
  average = 0;
  students =  [
    {
      name : 'Louis',
      expense : [35.00, 5.75, 12.79],
      totalbill : 0,
      owe : ''
    },
    {
      name : 'Carter',
      expense : [12.00, 15.00, 23.00],
      totalbill : 0,
      owe : ''
    },
    {
      name: 'David',
      expense: [10.00, 20.00, 38.41],
      totalbill : 0,
      owe : ''
    }
  ];
 ngOnInit() {
  this.getPersonBill();
  this.getTotal();
  this.getAverage();
 }
 getPersonBill() {
  for (let value of this.students) {
    let personExpense = this.getStudenExpense(value.expense);
    value.totalbill = personExpense;
  }
 }
 getStudenExpense(expense) {
   let cost = 0;
   for ( let bill of expense) {
     cost += bill;
   }
   return cost;

 }
 getTotal() {
  for ( let value of this.students) {
    this.total += value.totalbill;
  }
  return this.total;
 }

 getAverage() {
   this.average = this.total / this.students.length;
   for ( let value of this.students) {
    let owe = this.average - value.totalbill;
    value.owe = owe.toFixed(2);
  }
   return this.average.toFixed(2);
 }

}
