import { Component, OnInit } from '@angular/core';
import { IDashboardMenu } from 'src/app/core/models/IDashboardCard';
import { ConfigService } from 'src/app/core/services/config/config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardMenu: IDashboardMenu[] | undefined;

  constructor(private readonly _configService: ConfigService) {
    this._configService.getDashboardMenu().subscribe(dashboardMenuResult => {
      this.dashboardMenu = dashboardMenuResult.result;
    });
  }

  ngOnInit(): void {
  }

}
