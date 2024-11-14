import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocateResultPage } from './locate-result.page';

describe('LocateResultPage', () => {
  let component: LocateResultPage;
  let fixture: ComponentFixture<LocateResultPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LocateResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
