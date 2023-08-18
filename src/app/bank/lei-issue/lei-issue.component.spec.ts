import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeiIssueComponent } from './lei-issue.component';

describe('LeiIssueComponent', () => {
  let component: LeiIssueComponent;
  let fixture: ComponentFixture<LeiIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeiIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeiIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
