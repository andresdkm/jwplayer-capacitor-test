import { Plugins } from "@capacitor/core"
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {JWPlayer} from '../../../../jwplayer-capacitor/src'


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  @ViewChild('player') playerView: ElementRef;


  ngOnInit(): void {

  }

  async ionViewDidEnter(){
    const boundingRect = this.playerView.nativeElement.getBoundingClientRect() as DOMRect;
    JWPlayer.initialize({
      androidLicenseKey: 'EYPdbBu9ECoJAoBHnBGaTseuLACo7e/G8foiHpeTRQM+Li865pJjK3BfMtDLBdtP',
      iosLicenseKey: 'irZz2/dRCwC2bTRq3OLEtqSb2EtSpCQroPHjXdloZ0fawwSzmZPZlLJkPqF483MR'
    }).then(r => {
      JWPlayer.create({
        videoURL: 'https://cdn.jwplayer.com/manifests/ePUbBhMu.m3u8',
        x: Math.round(boundingRect.x),
        y: Math.round(boundingRect.y),
        width: Math.round(boundingRect.width),
        height: Math.round(boundingRect.height),
        forceFullScreenOnLandscape: true,
        captions: [
          {
            url: 'https://cdn.jwplayer.com/tracks/oZhSzX07.vtt',
            label: 'TK',
            default: false
          },
          {
            url: 'https://cdn.jwplayer.com/tracks/058JJirf.vtt',
            label: 'ES',
            default: false
          },
          {
            url: 'https://cdn.jwplayer.com/tracks/gaMlZBBs.vtt',
            label: 'EN',
            default: true
          }
        ],
        front: true,
      });
    });
  }

  async ionViewDidLeave(){
    JWPlayer.remove();
  }

}
