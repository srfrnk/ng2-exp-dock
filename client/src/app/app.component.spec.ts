import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ExpansionPanelsModule } from 'ng2-expansion-panels';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpModule,
        MaterialModule,
        ExpansionPanelsModule,
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
