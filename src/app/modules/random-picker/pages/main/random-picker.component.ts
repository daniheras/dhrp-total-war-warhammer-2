import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { factions } from '@meta/factions';

@Component({
  selector: 'dhrp-random-picker',
  templateUrl: './random-picker.component.html',
  styleUrls: ['./random-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RandomPickerComponent implements OnInit {

  factions = factions;

  constructor(private themeService: NbThemeService) {
  }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.themeService.changeTheme(this.themeService.currentTheme === 'cosmic' ? 'dark' : 'cosmic');
  }

}
