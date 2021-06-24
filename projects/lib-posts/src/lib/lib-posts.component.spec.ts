import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibPostsComponent } from './lib-posts.component';

describe('LibPostsComponent', () => {
  let component: LibPostsComponent;
  let fixture: ComponentFixture<LibPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibPostsComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
