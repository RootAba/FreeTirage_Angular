import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresTirageComponent } from './apres-tirage.component';

describe('ApresTirageComponent', () => {
  let component: ApresTirageComponent;
  let fixture: ComponentFixture<ApresTirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApresTirageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApresTirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
