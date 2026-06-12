import { Component } from '@angular/core';
import { Toast, ToastPackage, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-custom-toast',
  imports: [],
  templateUrl: './custom-toast.html',
  styleUrl: './custom-toast.scss',
})
export class CustomToast extends Toast {
}
