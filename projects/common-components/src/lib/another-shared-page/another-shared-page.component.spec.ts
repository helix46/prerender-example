import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherSharedPageComponent } from './another-shared-page.component';

describe('AnotherSharedPageComponent', () => {
  let component: AnotherSharedPageComponent;
  let fixture: ComponentFixture<AnotherSharedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherSharedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherSharedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
