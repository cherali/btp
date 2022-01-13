export interface IPost {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

export class Post {
  public props: IPost = {};

  constructor(data?: IPost) {
    if (data) {
      this.props = data;
    }
  }

}

