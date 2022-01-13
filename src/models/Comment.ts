export interface IComment {
  postId?: number;
  id?: number;
  name?: string;
  email?: string;
  body?: string;
}

export class Post {
  public props: IComment = {};

  constructor(data?: IComment) {
    if (data) {
      this.props = data;
    }
  }

}

