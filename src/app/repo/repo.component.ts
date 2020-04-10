import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Repo } from '../repo';
import { RepoService } from '../git-service/repo.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repos: Repo[] = [
    new Repo(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Repo(2,'Buy Cookies','I have to buy cookies for the parrot'),
    new Repo(3,'Get new Phone Case','Diana has her birthday coming up soon'),
    new Repo(4,'Get Dog Food','Pupper likes expensive snacks'),
    new Repo(5,'Solve math homework','Damn Math'),
    new Repo(6,'Plot my world domination plan','Cause I am an evil overlord'),
  ];

  addNewRepo(repo){
    let repoLength = this.repos.length;
    repo.id = repoLength+1;
    this.repos.push(repo)
  }

  toggleDetails(index){
    this.repos[index].showDescription = !this.repos[index].showDescription;
  }
  constructor() { }

  ngOnInit() {
  }
}
