import { Component, OnInit} from '@angular/core';
import {MusicService} from '../music.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private musicService:MusicService, private route: ActivatedRoute,private location: Location,
    private router:Router) { }
  arrayOfMusic:any=[];

  ngOnInit() {
    this.musicService.displayWishList().subscribe(data=>
      {
       console.log(data)
       this.arrayOfMusic=data;
    });
}


// detailMusic(music)
// {
//   console.log(music);
//   this.musicService.displayDetails(music);
// }

  addToWishList(music): void{
    this.route
    this.musicService.addToWishList(music);   
 }
 deleteMusic(value){
   console.log("This Works");  
  var id = value.trackId;
  this.router.navigateByUrl("/delete/"+id);
}
    
  }

