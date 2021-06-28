import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibPostComponent } from './lib-post.component';
import { ICONS } from './svg-icon/icons-list';
import { Post } from '../../../../../src/layouts/user/services/data-user.service';

describe('LibPostsComponent', () => {
  let component: LibPostComponent;
  let fixture: ComponentFixture<LibPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibPostComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should get pencil', () => {
    expect(component.pencil).toBe(ICONS.PENCIL);
  });

  it('should get add', () => {
    expect(component.add).toBe(ICONS.ADD);
  });

  it('should get close', () => {
    expect(component.close).toBe(ICONS.CLOSE);
  });

  it('should set posts', () => {
    const post: Post = {
      body: 'string',
      id: 1,
      userId: 2,
      title: 'string',
    };
    component.posts = post;
    expect(component.posts).toBe(post);
  });

  it('should be called function deletePost', () => {
    const post: Post = {
      body: 'string',
      id: 1,
      userId: 2,
      title: 'string',
    };
    const click = new MouseEvent('click');
    component.deletePost(post, click);
    expect(component.deletePost).toHaveBeenCalledWith(post, click);
  });

  it('should be called function editPost', () => {
    const post: Post = {
      body: 'string',
      id: 1,
      userId: 2,
      title: 'string',
    };
    const click = new MouseEvent('click');
    component.editPost(post, click);
    expect(component.editPost).toHaveBeenCalledWith(post, click);
  });

  it('should change toggle in openCard function', () => {
    component.openCard();
    expect(component.toggle).toBeTrue();
  });
});
