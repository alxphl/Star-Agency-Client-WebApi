using System;
using Xunit;
using WebApi.Models;

namespace XUnitTestWebApi
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {

        }
    }

    public class DummyDataDBInitializer
    {
        public DummyDataDBInitializer()
        {
        }

        public void Seed(ActorDetailContext context)
        {
            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            context.Actors.AddRange(
                new Actor() { Name = "CSHARP", Biography = "csharp",Gender = "m"},
                new Actor() { Name = "VISUAL STUDIO", Biography= "vfsdfa",Gender = "f"},
                new Actor() { Name = "CSHARP", Biography = "csharp", Gender = "m" },
                new Actor() { Name = "VISUAL STUDIO", Biography = "vfsdfa", Gender = "f" }
            );

           
            context.SaveChanges();
        }
    }
}