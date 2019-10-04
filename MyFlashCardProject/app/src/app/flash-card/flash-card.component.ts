import { Component, OnInit } from '@angular/core';
import { FlashCardervice } from './flash-card.service';
import { FlashCard, Category } from './flash-card.model';
import { GroupResult, groupBy } from '@progress/kendo-data-query';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-root',
  templateUrl: './flash-card.component.html',
  providers: [FlashCardervice]

})
export class FlashCardComponent implements OnInit
{
  SelectedCategoryDataItem: any;
  SelectedCategoryKeys: any[];
  newCategory: any;
  newCategoryParent: any;
  OpenAddCategoryWindow: boolean;
  windowOpened: boolean;

  ngOnInit(): void
  {
    this.GetCategories();
    //this.LoadFlashCards(false);
  }
  public Categories: Array<Category> = [];
  Filter: any = { Category: '' };
  FlashCards: Array<FlashCard> = [];
  public width = '100%';
  public height = '610px';
  public SearchText: string;
  public flashCardContent: string;
  public isGeneral: boolean;
  public isCode: boolean;

  public isSearched: boolean;
  public newFlashCardCategory: number;
  public newFlashCardQuestion: string;


  constructor(private svc: FlashCardervice, private toastr: ToastrService, private spinner: NgxSpinnerService)
  {

  }
  LoadFlashCards(isSearched: boolean)
  {
    this.isSearched = isSearched;
    var request = { selectedCategory: this.SelectedCategoryDataItem, searchText: isSearched ? this.SearchText : "" }
    this.svc.LoadFlashCards(request).subscribe(r =>
    {
      if (r.IsSuccess())
      {
        this.FlashCards = r.payLoad;

      }
    });

  }
  GetCategories()
  {
    this.svc.GetCategories().subscribe(r =>
    {
      if (r.IsSuccess())
      {
        this.Categories = r.payLoad;
        this.SelectedCategoryDataItem = this.Categories[0];
        this.SelectedCategoryKeys = [this.Categories[0].categoryName];
        this.LoadFlashCards(false);

      }
    });
  }

  handleCategorySelection({ index, dataItem }: any)
  {

    this.SelectedCategoryDataItem = dataItem;
    this.LoadFlashCards(false);


  }
  addNewFlashCard()
  {
    this.spinner.show();
    var request = { question: this.newFlashCardQuestion, answer: this.flashCardContent, type: this.isCode ? "Code" : "General", category: this.newFlashCardCategory };
    this.svc.AddNewFlashCard(request).subscribe(r =>
    {
      this.spinner.hide();
      if (r.IsSuccess())
      {
        this.toastr.success("Flash card added successfully");
        this.LoadFlashCards(false);

        this.ResetFlashCardWindow();
      }
    })

  }
  ResetFlashCardWindow()
  {
    this.windowOpened = false;
    this.newFlashCardQuestion = null;
    this.newFlashCardCategory = null;
    this.flashCardContent = null;
  }
  addNewCategory()
  {
    this.spinner.show();
    var request = { CategoryName: this.newCategory, ParentCategoryId: this.newCategoryParent };
    this.svc.AddNewCategory(request).subscribe(r =>
    {
      this.spinner.hide();
      if (r.IsSuccess())
      {
        this.toastr.success("Category added successfully");
        this.GetCategories();
        this.OpenAddCategoryWindow = false;

      }
    })
  }
  CloseFlashCardWindow()
  {
    this.ResetFlashCardWindow();
  }
}
