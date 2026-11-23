import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConferenceList } from '../conference-list/conference-list';
@Component({
  imports: [FormsModule, ConferenceList],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  SiteName:String="site";
  imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPu2_0EgmSBtQgUjMDGXd6iDHBzIoXY56ATjDVYx8Log&s=10";
  clickme(){
    return alert("Button clicked!");
  }
  inputitem="";
}
