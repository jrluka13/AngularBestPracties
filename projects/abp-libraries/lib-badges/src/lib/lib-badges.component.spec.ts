import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibBadgesComponent } from './lib-badges.component';
import { BadgesService } from './services/badges.service';

describe('LibBadgesComponent', () => {
  let component: LibBadgesComponent;
  let fixture: ComponentFixture<LibBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibBadgesComponent],
      providers: [BadgesService],
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
