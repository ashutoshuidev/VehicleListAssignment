/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehcileListComponent } from './vehcile-list.component';

describe('VehcileListComponent', () => {
  let component: VehcileListComponent;
  let fixture: ComponentFixture<VehcileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehcileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehcileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
