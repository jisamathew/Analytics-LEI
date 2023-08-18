import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryTransactionComponent } from './advisory-transaction.component';

describe('AdvisoryTransactionComponent', () => {
  let component: AdvisoryTransactionComponent;
  let fixture: ComponentFixture<AdvisoryTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisoryTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
