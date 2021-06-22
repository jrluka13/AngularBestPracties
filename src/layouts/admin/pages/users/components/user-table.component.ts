import { Component } from '@angular/core';
import { MockDataTableService } from 'src/layouts/admin/pages/users/services/mock-data-table.service';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})

export class UserTableComponent {
  displayedColumns: string[] = ['email', 'role', 'toggle'];
  dataSource = this.mockDataTableService.getData();
  constructor(private mockDataTableService: MockDataTableService) {
  }

}
