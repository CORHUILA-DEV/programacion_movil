import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MvzPage } from './mvz.page';

describe('MvzPage', () => {
  let component: MvzPage;
  let fixture: ComponentFixture<MvzPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MvzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
