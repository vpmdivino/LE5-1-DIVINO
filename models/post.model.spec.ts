import { Post } from './post.model';

describe('Post Model', () => {
  it('should create a valid post object', () => {
    const post: Post = {
      id: 1,
      title: '',
      content: '',
      dateCreated: new Date().toISOString(),  
      firstName: '',                     
      lastName: '',
      userId: 1                               
    };

    expect(post).toBeTruthy();
    expect(post.id).toBe(1);
    expect(post.title).toBe('Test Post');
    expect(post.firstName).toBe('John');
    expect(post.lastName).toBe('Doe');
    expect(post.userId).toBe(1);          
  });
});
