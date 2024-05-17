import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardComponent } from './content-card.component';

describe('ContentCardComponent', () => {
  let component: ContentCardComponent;
  let fixture: ComponentFixture<ContentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have inputs declared', () => {
    expect(component.imgSrc).toBeDefined()
    expect(component.direction).toBeDefined()
    expect(component.title).toBeDefined()
    expect(component.text).toBeDefined()
  })

  it('should have direction predefined', () => {
    expect(component.direction).toBeTruthy()
    expect(component.direction).toEqual('left')
  })
});
