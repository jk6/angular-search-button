import { TestBed } from "@angular/core/testing";
import { InMemoryDataService } from "./in-memory-data.service";

describe("InMemoryDataServiceService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: InMemoryDataService = TestBed.get(InMemoryDataService);
    expect(service).toBeTruthy();
  });
});
