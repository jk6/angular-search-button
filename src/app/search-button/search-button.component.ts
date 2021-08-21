import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from "@angular/core";

@Component({
  selector: "app-search-button",
  templateUrl: "./search-button.component.html",
  styleUrls: ["./search-button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchButtonComponent implements OnChanges {
  @Input() isSearching = false;
  @Output() search: EventEmitter<boolean> = new EventEmitter();

  buttonText: string;

  ngOnInit() {
    this.buttonText = this.isSearching ? "Searching..." : "Search";
  }

  ngOnChanges() {
    this.buttonText = this.isSearching ? "Searching..." : "Search";
  }

  doSearch(): void {
    this.search.emit(true);
  }
}
