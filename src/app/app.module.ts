import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppComponent } from "./app.component";
import { InMemoryDataService } from "./in-memory-data.service";
import { PersonCardComponent } from "./person-card/person-card.component";
import { SearchButtonComponent } from "./search-button/search-button.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchButtonComponent,
    PersonCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    BrowserAnimationsModule,
  ],
  exports: [SearchComponent, SearchButtonComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
