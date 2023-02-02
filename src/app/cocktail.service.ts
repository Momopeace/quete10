import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

mojito : Cocktail = new Cocktail( "mojito", 15 ,"https://pixabay.com/get/ga942636c2ea70b2c2db4c37543de320ba149eaf5ae5eb09898ac978242a6dd72a075d3b070ef63ebf11935e446bf73d568ae325090972e5cba22ddaefbf9f0f0160fe2af9acbed548f6e06221de31384_640.jpg");
pina: Cocktail = new Cocktail("pina",20,"https://pixabay.com/get/g813fa120b2a3382f530b66e5df16012c5135172712901659ec3e27bc9491c186aefed47fd4eea86d2d7a57779f5f7c1a4fa9c476318227dde6faab2c2fe329f9c23116b38707d7bba3d689990a399083_640.jpg");
bloody: Cocktail = new Cocktail ("bloody",25,"https://pixabay.com/get/geaed22cc63f01341ef6fae83f6efa364e5ca0e390b873d3e9d0c6378af826208a02521586da1dd3916b53181deb87792a166286b45588b56624431e11c765aba16bf8f03bcfe395bdbf9d49cb0323e08_640.jpg");  
 
cocktails: Cocktail[] =[this.mojito, this.pina,this.bloody];

constructor(){}

  getCocktails(){
    return this.cocktails;
  }
}
