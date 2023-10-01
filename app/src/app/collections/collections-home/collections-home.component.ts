import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss'],
})
export class CollectionsHomeComponent implements OnInit {
  readonly data = [
    { name: 'James', age: 25, job: 'Designer' },
    { name: 'Sam', age: 32, job: 'Engineer' },
    { name: 'Samantha', age: 33, job: 'Accountant' },
    { name: 'Rachel', age: 29, job: 'Sales' },
    { name: 'John', age: 24, job: 'Engineer' },
  ];

  readonly headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() {}

  ngOnInit() {}
}
