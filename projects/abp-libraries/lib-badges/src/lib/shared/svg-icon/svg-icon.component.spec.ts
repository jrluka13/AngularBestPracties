import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SvgIconComponent } from './svg-icon.component';
import { ICONS } from './icons-list';

describe('SvgIconComponent', () => {
  let component: SvgIconComponent;
  let fixture: ComponentFixture<SvgIconComponent>;
  let debugEl;
  let el;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgIconComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgIconComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set @input width', () => {
    expect(el.style.width).toEqual('');
    component.width = '20';
    expect(component.width).toEqual('20');
  });
  it('should set @input height', () => {
    expect(el.style.height).toEqual('');
    component.height = '20';
    expect(component.height).toEqual('20');
  });
  it('should set @input name', () => {
    expect(el.style.name).toEqual(undefined);
    component.name = ICONS.BELL;
    expect(component.name).toEqual(ICONS.BELL);
  });
  it('should set @input fill', () => {
    expect(el.style.fill).toEqual('');
    component.fill = 'fill:#white';
    expect(component.fill).toEqual('fill:#white');
  });
});
