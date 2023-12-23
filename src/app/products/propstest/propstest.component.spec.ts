import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropstestComponent } from './propstest.component';

describe('PropstestComponent', () => {
  let component: PropstestComponent;
  let fixture: ComponentFixture<PropstestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropstestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
