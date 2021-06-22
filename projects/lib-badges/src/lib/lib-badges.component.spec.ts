import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibBadgesComponent } from 'projects/lib-badges/src/lib/lib-badges.component';

describe('LibBadgesComponent', () => {
  let component: LibBadgesComponent;
  let fixture: ComponentFixture<LibBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibBadgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
