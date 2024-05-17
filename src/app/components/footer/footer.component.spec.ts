import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the footer element', () => {
    const compile = fixture.debugElement.nativeElement
    expect(compile.querySelector('footer')).toBeTruthy()
    expect(compile.querySelector('p')).toBeTruthy()
  })

  it('should have the footer prop defined', () => {
    expect(component.footer).toBeTruthy()
  })
});
