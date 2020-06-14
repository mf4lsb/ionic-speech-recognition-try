import { Component } from "@angular/core";
import { SpeechRecognition } from "@ionic-native/speech-recognition/ngx";
import { ChangeDetectorRef } from "@angular/core";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  matches: String[];
  isRecording = false;
  coba: String = "";
  constructor(
    private speechRecognition: SpeechRecognition,
    private cd: ChangeDetectorRef
  ) {}

  getPermissions() {
    this.speechRecognition.hasPermission().then((hasPermission: boolean) => {
      if (!hasPermission) {
        this.speechRecognition.requestPermission();
      }
    });
  }

  startListening() {
    let options = {
      language: "id-ID",
    };
    this.speechRecognition.startListening(options).subscribe((matches) => {
      this.matches = matches;
      this.cd.detectChanges();
    });
    this.isRecording = true;
  }

  stopListening() {
    this.coba = "Halo";
    this.isRecording = false;
  }
}
