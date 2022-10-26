import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectPalleteComponent } from './object-pallete.component';

describe('ObjectPalleteComponent', () => {
  let component: ObjectPalleteComponent;
  let fixture: ComponentFixture<ObjectPalleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectPalleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectPalleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
