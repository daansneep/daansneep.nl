import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavatypescriptComponent } from './javatypescript.component';

describe('JavatypescriptComponent', () => {
  let component: JavatypescriptComponent;
  let fixture: ComponentFixture<JavatypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavatypescriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavatypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
