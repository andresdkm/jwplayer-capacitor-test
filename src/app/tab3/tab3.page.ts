import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {JWPlayer} from '../../../../jwplayer-capacitor/src'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor() {}

  @ViewChild('player') playerView: ElementRef;


  ngOnInit(): void {
  
  }

  async ionViewDidEnter(){
    const boundingRect = this.playerView.nativeElement.getBoundingClientRect() as DOMRect;
    JWPlayer.initialize({
      androidLicenseKey: 'Qq4MGMlmsRMNFBOOsWnFZwcONENXxop6BOx+1TwTwMMQ+IxNQQqs34qTzI8oNj2z',
      iosLicenseKey: 'mNJ42f6uFZThicvyVPCcoxtHQfS5asC/LPXwzTGPSE8sgJtsnBrqULttaKEwPGzt'
    }).then(r => {
      JWPlayer.create({
        videoURL: 'https://cdn.jwplayer.com/manifests/o1zadD7G.m3u8',
        x: Math.round(boundingRect.x),
        y: Math.round(boundingRect.y),
        width: Math.round(boundingRect.width),
        height: Math.round(boundingRect.height)
      });
    });
  }

  async ionViewDidLeave(){
    JWPlayer.remove();
  }

}
