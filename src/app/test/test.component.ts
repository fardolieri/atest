import { Component, OnInit } from '@angular/core';

import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.table(tf.version)
  }

}
