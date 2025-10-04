import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AvailableLang } from '../models/available-lang.models';

@Injectable({
  providedIn: 'root'
})
export class QueryParamService {
  constructor(
    private readonly location: Location
  ) { }
  private readonly _langKey = 'lang';
  private readonly _langParam$ = new BehaviorSubject(this.loadLangFromParam())

  readonly langParam$ = this._langParam$.asObservable();

  set(lang: AvailableLang) {
    this.location.replaceState('', `${this._langKey}=${lang}`);
    this._langParam$.next(lang);
  }

  private getQueryParams() {
    return new URLSearchParams(this.location.path());
  }

  private loadLangFromParam() {
    const lang = this.getQueryParams().get(this._langKey) as AvailableLang;
    return lang;
  }
}
