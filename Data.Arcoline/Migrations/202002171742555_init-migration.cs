namespace Data.Arcoline.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initmigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categoria",
                c => new
                    {
                        IdCategoria = c.Guid(nullable: false),
                        Nome = c.String(),
                        Descricao = c.String(),
                    })
                .PrimaryKey(t => t.IdCategoria);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Categoria");
        }
    }
}
