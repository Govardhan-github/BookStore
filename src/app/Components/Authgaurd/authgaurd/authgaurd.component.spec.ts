import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthgaurdComponent } from './authgaurd.component';

describe('AuthgaurdComponent', () => {
  let component: AuthgaurdComponent;
  let fixture: ComponentFixture<AuthgaurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthgaurdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthgaurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
