using Microsoft.EntityFrameworkCore;

namespace TestApi.Models;

public class TestContext : DbContext
{

    public TestContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<TestItem> TestItems { get; set; } = null!;
}