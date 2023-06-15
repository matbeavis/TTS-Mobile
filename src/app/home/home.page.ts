import { Component } from '@angular/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage {
public textoLeitura = "";
public idioma: string = 'en-US';

constructor() {
}

public setIdioma(op: number) {
if (op == 1) {
this.idioma = 'pt-BR';
} else {
this.idioma = 'en-US';
}

}

public speackText() {
TextToSpeech.speak({
text: this.textoLeitura,
lang: this.idioma,
rate: 1.0,
});
}
}