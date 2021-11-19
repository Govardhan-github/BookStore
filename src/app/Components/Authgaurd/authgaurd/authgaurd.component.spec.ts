import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthgaurdComponent } from './authgaurd.component';

describe('AuthgaurdComponent', () => {
  let component: AuthgaurdComponent;
  let fixture: ComponentFixture<AuthgaurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthgaurdComponent ],
      imports : [RouterTestingModule,]

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
