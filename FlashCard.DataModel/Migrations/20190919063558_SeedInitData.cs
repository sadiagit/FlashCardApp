using Microsoft.EntityFrameworkCore.Migrations;

namespace FlashCard.DataModel.Migrations
{
    public partial class SeedInitData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "FlashCardType",
                columns: new[] { "TypeId", "Description" },
                values: new object[] { "General", "For general purpose" });

            migrationBuilder.InsertData(
                table: "FlashCardType",
                columns: new[] { "TypeId", "Description" },
                values: new object[] { "Code", "For coding purpose" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "FlashCardType",
                keyColumn: "TypeId",
                keyValue: "Code");

            migrationBuilder.DeleteData(
                table: "FlashCardType",
                keyColumn: "TypeId",
                keyValue: "General");
        }
    }
}
