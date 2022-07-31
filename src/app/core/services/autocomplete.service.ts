import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface AutocompleteData {
  name: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})

export class AutocompleteService {

  inputOptions = new BehaviorSubject([] as AutocompleteData[])

  constructor() { }

  setInputOptions(options: AutocompleteData[]) {
    this.inputOptions.next(options)
  }

  getInputOptions() {
    return this.inputOptions.asObservable();
  }
}
