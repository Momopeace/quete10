import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  cocktails : Cocktail [] = []

  //j'importe mon service cocktail
  constructor(public serviceCocktail : CocktailService){}

  ngOnInit(): void {
    this.cocktails = this.serviceCocktail.getCocktails()
    console.log(this.cocktails)

    
  }

}
