using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.xUnitTests
{
    public    static class DbContextMocker
    {

        public static ActorDetailContext GetActorDetailContext(string dbName)
        {
            // Create options for DbContext instance
            var options = new DbContextOptionsBuilder<ActorDetailContext>()
                .UseInMemoryDatabase(databaseName: dbName)
                .Options;

            // Create instance of DbContext
            var dbContext = new ActorDetailContext(options);

            // Add entities in memory
            dbContext.Seed();

            return dbContext;
        }
    }
}
