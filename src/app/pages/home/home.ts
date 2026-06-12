import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Access } from '../../services/access';
import { AsyncPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  public readonly accessService = inject(Access);
  toastr: ToastrService = inject(ToastrService);

  users = signal<any>([]);

  ngOnInit() {
    this.getUsers();
    console.log(document.cookie);
    
  }

  async getUsers() {
    this.users.set(await this.accessService.getUsers());
  }

  toast() {
    this.toastr.success("TESTANDO O TESTE NO TOAST");
  }
}
