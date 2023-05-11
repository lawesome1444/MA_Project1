import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Game4Page } from './game4.page';

describe('Game4Page', () => {
  let component: Game4Page;
  let fixture: ComponentFixture<Game4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Game4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
