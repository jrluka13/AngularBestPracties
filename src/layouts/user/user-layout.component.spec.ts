import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserLayoutComponent } from './user-layout.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserLayoutComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserLayoutComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Best Practices'`, () => {
    const fixture = TestBed.createComponent(UserLayoutComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular Best Practices');
  });
});
