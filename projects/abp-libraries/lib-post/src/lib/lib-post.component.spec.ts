import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibPostComponent } from './lib-post.component';

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
    expect(component).toBeTruthy();
  });
});
