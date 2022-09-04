// @types.todo.ts
export interface IPosts {
    id: number;
    title: string;
    body: string;
    userId: Number;
    userName: string,
    userEmail: string,
    numberofComments: Number,
  }
  export type IComment = {
    postId: Number;
    id:Number;
    name: String;
    email:String;
    body:string;
  };