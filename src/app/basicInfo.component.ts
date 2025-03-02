import { Component } from "@angular/core";
@Component({
    selector:'basicinfo-app',
    templateUrl:'./basicinformation.html',
    styleUrl:'./common.css'
})
export class BasicInfo{
    email = 'tegmulhabt@gmail.com';
    phone = '437 222 3356';
    address = '5557 McGrail Ave, Niagra Falls, On, Ca';
    languages = ['English', 'Amharic'];
}