import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApagarUsuarioComponent } from './apagar-usuario.component';

describe('ApagarUsuarioComponent', () => {
  let component: ApagarUsuarioComponent;
  let fixture: ComponentFixture<ApagarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApagarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApagarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
