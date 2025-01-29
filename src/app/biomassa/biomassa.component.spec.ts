import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiomassaComponent } from './biomassa.component';

describe('BiomassaComponent', () => {
  let component: BiomassaComponent;
  let fixture: ComponentFixture<BiomassaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiomassaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiomassaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
