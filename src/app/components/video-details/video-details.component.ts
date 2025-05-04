import { Component, inject, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-details',
  imports: [],
  templateUrl: './video-details.component.html',
  styleUrl: './video-details.component.scss'
})
export class VideoDetailsComponent {
  @Input() id : string = "";
  // setId(id : string) {
  //   this.id = id;
  //   this.unsafeUrl = "https://vidsrc.icu/embed/movie/tt"+this.id;
  //   this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafeUrl);
  //   console.warn(`[SETTER] Checking for this.unsafeUrl: ${this.unsafeUrl } and this.id: ${this.id}`);
  // }

  readonly sanitizer = inject(DomSanitizer);
  unsafeUrl = "https://vidsrc.icu/embed/movie/tt"+this.id;
  videoUrl : SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafeUrl);

  constructor() {
    // this.unsafeUrl = "https://vidsrc.icu/embed/movie/tt"+this.id;
    // console.warn(`[Constructor] Checking for this.unsafeUrl: ${this.unsafeUrl } and this.id: ${this.id}`);
    // this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafeUrl);
    // console.log(this.videoUrl, this.id);
  }
  ngOnInit() {
    
    this.unsafeUrl = "https://vidsrc.icu/embed/movie/"+this.id;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafeUrl);
    console.warn(`[ngOnInit] Checking for this.unsafeUrl: ${this.unsafeUrl } and this.id: ${this.id}`);
  }
}
