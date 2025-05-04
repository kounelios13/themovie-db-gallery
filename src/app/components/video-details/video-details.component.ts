import { Component, inject, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-details',
  imports: [],
  templateUrl: './video-details.component.html',
  styleUrl: './video-details.component.scss'
})
export class VideoDetailsComponent {
  @Input() id : string = "";
  title : string = "Movie Details";
  readonly sanitizer = inject(DomSanitizer);
  unsafeUrl = "https://vidsrc.icu/embed/movie/tt"+this.id;
  videoUrl : SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafeUrl);
  private router = inject(Router);
  ngOnInit() {
    this.unsafeUrl = "https://vidsrc.icu/embed/movie/"+this.id;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafeUrl);
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state) {
      const state = nav.extras.state as { title: string };
      this.title = state.title;
      alert(this.title);
    }
  }
}
