// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost

'use strict';
import { BlogPost } from "./blog-post";

class Blog {
  private blogposts: BlogPost[];

  constructor() {
    this.blogposts = [];
  }

  add(blogpost: BlogPost) {
    this.blogposts.push(blogpost);
  }

  delete(int: number) {
    this.blogposts.splice(int, 1);
  }

  update(int: number, blogpost: BlogPost) {
    this.blogposts[int] = blogpost;
  }
}

let BlogPost1: BlogPost = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.','2000.05.04.');
let BlogPost2: BlogPost = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
let BlogPost3: BlogPost = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');

let randomBlog = new Blog();
randomBlog.add(BlogPost1);
randomBlog.add(BlogPost2);
randomBlog.add(BlogPost3);

randomBlog.delete(2);

let BlogPost4: BlogPost = new BlogPost('John Doe', 'Art of nothing', 'Tips and trick to embrace the art of nothing.','2018.08.20.');
randomBlog.update(0, BlogPost4);

console.log(randomBlog);
