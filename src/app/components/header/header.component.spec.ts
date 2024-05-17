import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the header element with title and image', () => {
    const compile = fixture.debugElement.nativeElement
    expect(compile.querySelector('header')).toBeTruthy()
    expect(compile.querySelector('p')).toBeTruthy()
    expect(compile.querySelector('img')).toBeTruthy()
  })

  it('should have the title and the imgSrc props', () => {
    expect(component.header).toBeTruthy()
    expect(component.imgSrc).toBeTruthy()
  })
});
