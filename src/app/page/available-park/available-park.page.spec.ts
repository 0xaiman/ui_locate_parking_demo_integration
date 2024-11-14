import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvailableParkPage } from './available-park.page';

describe('AvailableParkPage', () => {
  let component: AvailableParkPage;
  let fixture: ComponentFixture<AvailableParkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableParkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
