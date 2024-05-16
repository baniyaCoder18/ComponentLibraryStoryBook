import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @Input('alertType') public alertType: string = 'error';
  @Input('alertTitle') public alertTitle: string = '';
  @Input('alertMessages') public alertMessages: string[] = [];
  @Input('closable') public closable: boolean = true;
  @Input('showAction') public showAction: boolean = true;
  @Input('actionType') public actionType: string = 'close';
  @Input('autoClose') public autoClose = false;
  @Input() 
  get toggle() {
    return this._toggle
  }
  set toggle(val) {
    this._toggle = val
    if (val && this.autoClose) {
        this.startCloseTimer()
    }
  }
  public _toggle: boolean = false;
  @Output() public toggleChange = new EventEmitter<boolean>();
  @Input('iconType') public iconType: 'alert' | 'info'='alert';
  timer:any = null


  startCloseTimer() {
    clearTimeout(this.timer)
    this.timer = setTimeout(()=> {
        this.closeAlert()
    },5000)
  }

  public closeAlert(): void {
    this.toggle = false;
    this.toggleChange.emit(false);
  }

}