import { Injectable } from '@angular/core';
import { Repos } from '../repos';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  getRepos(){
    return Repos    
  }

  constructor() { }
}
