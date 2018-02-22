import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentToolboxComponent } from './content-toolbox.component';

describe('ContentToolboxComponent', () => {
  let component: ContentToolboxComponent;
  let fixture: ComponentFixture<ContentToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
