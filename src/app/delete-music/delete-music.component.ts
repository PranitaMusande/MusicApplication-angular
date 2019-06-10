import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-delete-music',
  templateUrl: './delete-music.component.html',
  styleUrls: ['./delete-music.component.css']
})
export class DeleteMusicComponent implements OnInit {

  constructor(private musicService:MusicService, private route: ActivatedRoute,private location: Location,
    private router:Router) { }
    
  ngOnInit() {
    console.log("***")
this.deleteMusic();
  
  }

  // public deleteMusic(value) {
  //   console.log(value);
  //   console.log("DeleteMusic ...");
  //   this.musicService.deleteMusic(value.trackId);
  // }

  deleteMusic():any{
console.log("Inside gkhewqgdewdw");
    // const id = this.route.snapshot.paramMap.get('name');
  // console.log("Wishlist Delete" +id);
  // this.musicService.deleteMusic(id);
}

}
