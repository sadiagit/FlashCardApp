using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FlashCard.DataModel.Migrations
{
    public partial class UpdatedFlashCardModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOn",
                table: "FlashCard",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "LastModifiedOn",
                table: "FlashCard",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedOn",
                table: "FlashCard");

            migrationBuilder.DropColumn(
                name: "LastModifiedOn",
                table: "FlashCard");
        }
    }
}
