import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Access } from '../../services/access';
import { AsyncPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../services/user';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  public readonly userService = inject(User);
  toastr: ToastrService = inject(ToastrService);

  users = signal<any>([]);

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    this.users.set(await this.userService.getUsers());
  }
}
