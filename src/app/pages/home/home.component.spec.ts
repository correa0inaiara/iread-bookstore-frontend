import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the props', () => {
    expect(component.left).toBeTruthy();
    expect(component.right).toBeTruthy();
    expect(component.topPoster).toBeTruthy();
    expect(component.topAltText).toBeTruthy();
    expect(component.bottomPoster).toBeTruthy();
    expect(component.bottomAltText).toBeTruthy();
    expect(component.leftCardImg).toBeTruthy();
    expect(component.leftCardText).toBeTruthy();
    expect(component.leftCardTitle).toBeTruthy();
    expect(component.rightCardImg).toBeTruthy();
    expect(component.rightCardText).toBeTruthy();
    expect(component.rightCardTitle).toBeTruthy();
  })

  it('should create the specified components', () => {
    fixture.detectChanges()
    const debugElement = fixture.debugElement
    const compile = debugElement.nativeElement

    expect(debugElement.childNodes.length).toBe(4)

    expect(compile.querySelector('app-poster')).toBeTruthy()
    expect(compile.querySelector('app-content-card')).toBeTruthy()
  })
});
