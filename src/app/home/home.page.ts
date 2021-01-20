import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';

declare var window;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(public platform: Platform) {
        this.platform.ready().then(() => {
            window.plugins.appsFlyer.registerOnAppOpenAttribution(function(res) {
                    console.log('AppsFlyer OAOA ==> ' + res);
                    alert('AppsFlyer OAOA ==> ' + res);
                },
                function onAppOpenAttributionError(err) {
                    console.log(err);
                });

            let options = {
                devKey: 'Us4Gm2SnJghcuoev846Qed',
                isDebug: true,
                appId: '741993991',
                onInstallConversionDataListener: true,
                waitForATTUserAuthorization: 10, //--> Here you set the time for the sdk to wait before launch
            };

            window.plugins.appsFlyer.initSdk(options, function(res) {
                console.log('AppsFlyer GCD ==>' + res);
                alert('AppsFlyer GCD ==> ' + res);

            }, function(err) {
                console.log(`AppsFlyer GCD ==> ${err}`);
            });
        });
    }

}
