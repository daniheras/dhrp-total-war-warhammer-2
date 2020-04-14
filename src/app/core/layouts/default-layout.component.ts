import { Component, OnInit } from '@angular/core';
import { NbWindowRef, NbWindowService, NbDialogService } from '@nebular/theme';
import { SettingsModalComponent } from '@modules/settings/components/settings-modal/settings-modal.component';

@Component({
  selector: 'dhrp-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  constructor(
    private windowService: NbDialogService
  ) { }

  ngOnInit(): void {
  }

  openSettings(): void {
    this.windowService.open(SettingsModalComponent);
  }

}
