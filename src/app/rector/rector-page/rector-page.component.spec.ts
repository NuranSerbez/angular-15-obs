import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectorPageComponent } from './rector-page.component';

describe('RectorPageComponent', () => {
  let component: RectorPageComponent;
  let fixture: ComponentFixture<RectorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
