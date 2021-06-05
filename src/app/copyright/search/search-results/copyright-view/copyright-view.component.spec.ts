import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightViewComponent } from './copyright-view.component';

describe('CopyrightViewComponent', () => {
  let component: CopyrightViewComponent;
  let fixture: ComponentFixture<CopyrightViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyrightViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
