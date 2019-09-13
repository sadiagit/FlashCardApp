using FlashCard.DataModel.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace FlashCard.DataModel
{
    public class FlashCardContext : DbContext
    {
        public FlashCardContext(DbContextOptions options) : base(options)
        {
            this.Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Models.FlashCard>().ToTable("FlashCard");
            modelBuilder.Entity<FlashCardType>().ToTable("FlashCardType");
            modelBuilder.Entity<Category>().ToTable("Category");

        }

        protected FlashCardContext()
        {
        }
        public DbSet<Models.FlashCard> FlashCards { get; set; }
        public DbSet<FlashCardType> FlashCardTypes { get; set; }
        public DbSet<Category> Categories { get; set; }      

    }
}
