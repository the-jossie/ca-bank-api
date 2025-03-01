using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ca_bank_api.Migrations
{
    /// <inheritdoc />
    public partial class RenameUserNameToFirstAndLastName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserName",
                schema: "CaBankSchema",
                table: "Users",
                newName: "LastName");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                schema: "CaBankSchema",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                schema: "CaBankSchema",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "LastName",
                schema: "CaBankSchema",
                table: "Users",
                newName: "UserName");
        }
    }
}
