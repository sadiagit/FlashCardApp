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

  ngOnInit(): void
  {
    this.GetCategories();
    //this.LoadFlashCards(false);
  }
  public Categories: Array<Category> = [];
  Filter: any = { Category: '' };
  FlashCards: Array<FlashCard> = [];
  public data: any[] = [
    {
      text: 'Networking', items: [
        { text: 'Tables & Chairs' },
        { text: 'Sofas' },
        { text: 'Occasional Furniture' }
      ]
    },
    {
      text: 'Programming', items: [
        { text: 'Bed Linen' },
        { text: 'Curtains & Blinds' },
        { text: 'Carpets' }
      ]
    }
  ];

  public treeNodes: any[] = [
    {
      categoryId: 1,
      categoryName: 'Root Node 1'
    }, {
      categoryId: 2,
      categoryName: 'Root Node 2'
    }, {
      categoryId: 3,
      parentCategoryId: 2,
      categoryName: 'Child node of Root Node 2'
    }
  ];
  public items: any[] = [
    { question: 'What is docker?', answer: "It's a container.", type: 'general' },
    {
      question: 'Code', answer: `
if(true)
{
  print('apple');
}
`, type: 'code'
    },
    { question: 'Sky', answer: 'Not answered' }
  ];
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
    var request = { selectedCategory: this.SelectedCategoryDataItem, searchText: this.SearchText }
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

  handleCategorySelection({ index, dataItem }: any, upsert: boolean)
  {
    if (upsert)
    {

    }
    else
    {
      this.SelectedCategoryDataItem = dataItem;
      this.LoadFlashCards(false);
    }

  }
  addNewFlashCard()
  {
    var request = { question: this.newFlashCardQuestion, answer: this.flashCardContent, type: this.isCode ? "Code" : "General", category: this.newFlashCardCategory };
    this.svc.AddNewFlashCard(request).subscribe(r =>
    {
      if (r.IsSuccess())
      {
        this.toastr.success("Flash card added successfully");
      }
    })

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
        this.toastr.success("Flash card added successfully");
        this.GetCategories();
        this.OpenAddCategoryWindow = false;
        
      }
    })
  }
}
