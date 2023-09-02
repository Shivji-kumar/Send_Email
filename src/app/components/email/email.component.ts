import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit{

  data={
    'to':"",
    "subject":"",
    "message":""
  }
  flag=false;

  constructor(private email:EmailService,private snak:MatSnackBar){ }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  doSubmitForm(){
    console.log("Try toSubmit");
    console.log("DATA",this.data);

    if(this.data.to=='' || this.data.subject==''||this.data.message==''){

      this.snak.open("Fields can not be empty !!","ok");
      return;
    }

    this.flag=true;
    this.email.sendEmail(this.data).subscribe(
      response=>{
        console.log(response);
        this.flag=false;
        this.snak.open("Send Success","ok")

      },
      error=>{
        console.log(error);
        this.flag=false;
        this.snak.open("ERROR!!","ok")
      }
    )


  }

}
