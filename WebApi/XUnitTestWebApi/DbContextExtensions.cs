using System;
using System.Collections.Generic;
using System.Text;
using WebApi.Models;

namespace WebApi.xUnitTests
{
   public static class DbContextExtensions
    {
        public static void Seed(this ActorDetailContext dbContext)
        {
            dbContext.Actors.Add(new Actor() { Name = "Alex", Biography = "csharp", Gender = "m",ImagePath = "fadfasfas"});
            dbContext.Actors.Add(new Actor() { Name = "Mario", Biography = "csharp", Gender = "m", ImagePath = "fadffdsaasfas" });
            dbContext.Actors.Add(new Actor() { Name = "Stefan", Biography = "csharp", Gender = "m", ImagePath = "fadffasasfas" });
            dbContext.Actors.Add(new Actor() { Name = "Gosho", Biography = "csharp", Gender = "m", ImagePath = "fadfafassfas" });
            dbContext.Actors.Add(new Actor() { Name = "Pesho", Biography = "csharp", Gender = "m", ImagePath = "fadzxfasfas" });
            dbContext.Actors.Add(new Actor() { Name = "Maria", Biography = "csharp", Gender = "f", ImagePath = "fadfavxcvsfas" });
            dbContext.Actors.Add(new Actor() { Name = "Ivan", Biography = "csharp", Gender = "m", ImagePath = "fadfvxzasfas" });
            dbContext.Movies.Add(new Movie() { Name = "Test", ActorId = 1, Link = "movies/Test/TEstMovie", Year = 2020 });
            dbContext.Movies.Add(new Movie() { Name = "Testing", ActorId = 1, Link = "movies/Test/TEstMovie", Year = 2020 });
            dbContext.Movies.Add(new Movie() { Name = "TestMovie", ActorId = 2, Link = "movies/Test/TEstMovie", Year = 2020 });
            dbContext.Movies.Add(new Movie() { Name = "MovieTest", ActorId = 2, Link = "movies/Test/TEstMovie", Year = 2020 });
            dbContext.Movies.Add(new Movie() { Name = "Something", ActorId = 3, Link = "movies/Test/TEstMovie", Year = 2020 });
            dbContext.Movies.Add(new Movie() { Name = "Something Else", ActorId = 3, Link = "movies/Test/TEstMovie", Year = 2020 });
            dbContext.Movies.Add(new Movie() { Name = "BlaBla", ActorId = 4, Link = "movies/Test/TEstMovie", Year = 2020 });
            dbContext.Movies.Add(new Movie() { Name = "BlaBla2", ActorId = 4, Link = "movies/Test/TEstMovie", Year = 2020 });
            dbContext.Movies.Add(new Movie() { Name = "NextMovie", ActorId = 5, Link = "movies/Test/TEstMovie", Year = 2020 });
            dbContext.Movies.Add(new Movie() { Name = "MovieNext", ActorId = 5, Link = "movies/Test/TEstMovie", Year = 2020 });
            dbContext.Movies.Add(new Movie() { Name = "MovieAfterNext", ActorId = 6, Link = "movies/Test/TEstMovie", Year = 2020 });
            dbContext.Movies.Add(new Movie() { Name = "NoMoreTitles", ActorId = 6, Link = "movies/Test/TEstMovie", Year = 2020 });
            dbContext.Movies.Add(new Movie() { Name = "NoMoreCoolTitles", ActorId = 7, Link = "movies/Test/TEstMovie", Year = 2020 });
            dbContext.Movies.Add(new Movie() { Name = "NoMoreCoolTitlesLeft", ActorId = 7, Link = "movies/Test/TEstMovie", Year = 2020 });
            dbContext.SaveChanges();
        }

    }
}
