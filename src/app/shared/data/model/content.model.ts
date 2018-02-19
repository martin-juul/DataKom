export class Header {
  constructor(
    public name?: string,
    public image?: string
  ) { }
}

export class Content {
  constructor(
    public header?: Header,
    public content?: string
  ) { }
}
