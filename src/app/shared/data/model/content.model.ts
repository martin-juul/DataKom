export class Header {
  constructor(
    public name?: string,
    public image?: string
  ) { }
}

export class Content {
  constructor(
    public header_title?: string,
    public header_image?: string,
    public content?: string
  ) { }
}
