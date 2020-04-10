import { Injectable } from '@angular/core';
import { Repo } from '../repo';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  getRepo(){
    return Repo
  }

  constructor() { }
}
