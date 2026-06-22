import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxArk } from './ngx-ark';

describe('NgxArk', () => {
  let component: NgxArk;
  let fixture: ComponentFixture<NgxArk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxArk],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxArk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
