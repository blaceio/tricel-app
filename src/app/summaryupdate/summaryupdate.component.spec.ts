import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryupdateComponent } from './summaryupdate.component';

describe('SummaryupdateComponent', () => {
  let component: SummaryupdateComponent;
  let fixture: ComponentFixture<SummaryupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
