import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-area3',
  templateUrl: './area3.component.html',
  styleUrls: ['./area3.component.css']
})
export class Area3Component implements OnInit {
  private count: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
      .params
      .subscribe(params => this.count = params.count);
  }


  
}
