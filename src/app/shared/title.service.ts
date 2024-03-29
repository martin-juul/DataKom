import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable()
export class TitleService {
  private suffix = ' - DataKom';

  constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle + this.suffix);
  }
}
