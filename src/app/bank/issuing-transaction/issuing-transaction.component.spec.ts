import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuingTransactionComponent } from './issuing-transaction.component';

describe('IssuingTransactionComponent', () => {
  let component: IssuingTransactionComponent;
  let fixture: ComponentFixture<IssuingTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuingTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuingTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
