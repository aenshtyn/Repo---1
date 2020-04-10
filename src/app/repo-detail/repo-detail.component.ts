import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {

  @Input() repo: Repo;

  constructor() { }

  ngOnInit(): void {
  }

}
