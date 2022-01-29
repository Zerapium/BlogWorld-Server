import type  { Dict }  from "../types";
interface BlogBody {
    text : string;
    img : string;
    date : Date;
    title : string;
    id : string;
}

interface Comment {
    date : Date,
    username : string,
    email : string,
    text : string,
    id : string
}


interface PostType {
    title : string;
    id : string;
    author : string;
    dateCreated : Date;
    dateModified? : Date;
    body : Array<BlogBody>;
    short: string;
    likes : number;
    dislikes : number;
    comments : Array<Comment>,
    like() : void;
    dislike() : void;
    updatePost() : void;
    editBlog(img : string, txt : string, title : string) : void;
    addComment(user  : string, email  : string, text : string) : void;
}

export {BlogBody, PostType, Comment};