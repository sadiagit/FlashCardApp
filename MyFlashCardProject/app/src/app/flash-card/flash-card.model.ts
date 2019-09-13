export class FlashCard
{

  public question: string

  public answer: string
  public trimmedAnswer: string
  public type: string

}

export class Category
{
  public categoryId: number
  public categoryName: string
  public parentCategoryId?: number


}
