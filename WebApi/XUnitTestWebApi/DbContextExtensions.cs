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

            dbContext.SaveChanges();
        }

    }
}
