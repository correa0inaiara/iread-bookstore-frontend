import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterComponent } from './poster.component';

describe('PosterComponent', () => {
  let component: PosterComponent;
  let fixture: ComponentFixture<PosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the div and img elements', () => {
    const compile = fixture.debugElement.nativeElement
    expect(compile.querySelector('div')).toBeTruthy()
    expect(compile.querySelector('img')).toBeTruthy()
  })

  it('should have the imgSrc and the altText props defined', () => {
    expect(component.imgSrc).toBeDefined()
    expect(component.imgSrc).toBeDefined()
  })
});
