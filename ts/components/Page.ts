export default class Page {
  public title: string;
  public tags: string[] = [];
  public body: string;

  constructor(options: { title: string; tags?: string[]; body: string }) {
    this.title = options.title;
    this.tags = options.tags || [];
    this.body = options.body;
  }
}
