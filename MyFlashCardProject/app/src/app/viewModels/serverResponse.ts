export class ServerResponse<T>
{

  public success: boolean

  public message: string

  public payLoad: T

  public total: number

  public static get payLoadName(): string { return "PayLoad"; }

  public static get totalName(): string { return "Total"; }

  public IsSuccess()
  {
    if (!this.success)
    //  toastr.error(this.Message);


    return this.success;
  }
}
