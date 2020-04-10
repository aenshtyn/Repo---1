import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {

   newRepo = new Repo(0,"","");
   @Output() addRepo = new EventEmitter<Repo>();

   submitName(){
this.addRepo.emit(this.newRepo);
}

  constructor() { }

  ngOnInit(): void {
  }

}
