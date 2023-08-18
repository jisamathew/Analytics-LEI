import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionIssueComponent } from './transaction-issue.component';

describe('TransactionIssueComponent', () => {
  let component: TransactionIssueComponent;
  let fixture: ComponentFixture<TransactionIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
