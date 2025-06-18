import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotDetailComponent } from './not-detail.component';

describe('NotDetailComponent', () => {
  let component: NotDetailComponent;
  let fixture: ComponentFixture<NotDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
