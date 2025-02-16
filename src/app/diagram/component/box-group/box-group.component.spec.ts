import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxGroupComponent } from './box-group.component';

describe('BoxGroupComponent', () => {
  let component: BoxGroupComponent;
  let fixture: ComponentFixture<BoxGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
