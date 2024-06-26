import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { PersonCardComponent } from "./person-card.component";

describe("PersonCardComponent", () => {
  let component: PersonCardComponent;
  let fixture: ComponentFixture<PersonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
