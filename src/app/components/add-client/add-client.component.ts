import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../models/Client'
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from "../../services/client.service"
import {Router } from "@angular/router"
import { SettingsService } from "../../services/settings.service"


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firtName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  }

  disableBalanceOnAdd: boolean;
@ViewChild('clientForm') form: any


  constructor(
    private flashMessage: FlashMessagesService,
    private clientService : ClientService,
    private router: Router,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
  }

  onSubmit({value,valid}:{value:Client, valid:boolean}){
    if(this.disableBalanceOnAdd){
      value.balance = 0;
    }
    if(!valid){
      //here is gonna be the message
      this.flashMessage.show("Please fill out the form in correct way.",{cssClass: 'alert-danger', timout: 4000
    });
    } else {
      this.flashMessage.show("New Client successfully added.",{cssClass: 'alert-success', timout: 4000
      })

      this.clientService.newClient(value);

      this.router.navigate(['/'])

    }
  }

}
