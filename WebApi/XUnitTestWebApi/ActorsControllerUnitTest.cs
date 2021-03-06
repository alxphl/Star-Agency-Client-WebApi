﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApi.Controllers;
using WebApi.Models;
using Xunit;

namespace WebApi.xUnitTests
{
    public class ActorsControllerUnitTest
    {
        private static readonly ILogger<ActorsController> _log;
        [Fact]
        public async Task TestGetNotFound()

        {
        // Arrange
    
        var dbContext  = DbContextMocker.GetActorDetailContext(nameof(TestGet));
        var controller = new ActorsController(dbContext, _log);
            var Id = 5000;
            // Act

            var notFoundResult = controller.Get(Id);
            dbContext.Dispose();

            // Assert
    
            Assert.IsType<NotFoundResult>(notFoundResult.Result.Result);
 
        
        }
        [Fact]
        public async Task TestGetById()

        {
            // Arrange

            var dbContext = DbContextMocker.GetActorDetailContext(nameof(TestGet));
            var controller = new ActorsController(dbContext, _log);
           var Id = 1;
            // Act

            var ActorResult = controller.Get(Id);
            dbContext.Dispose();

            // Assert

            Assert.IsType<Actor>(ActorResult.Result.Value);


        }
      
        [Fact]
        public async Task TestDelete()
        {
            // Arrange
            var dbContext = DbContextMocker.GetActorDetailContext(nameof(TestDelete));
            var controller = new ActorsController(dbContext, _log);
            var id = 5;
          
            // Act
            var response = await controller.Delete(id);
           
            dbContext.Dispose();

            // Assert
            Assert.IsType<Actor>(response.Value);
        }
        [Fact]
        public async Task TestCreate()
        {
            // Arrange
            var dbContext = DbContextMocker.GetActorDetailContext(nameof(TestCreate));
            var controller = new ActorsController(dbContext, _log);
            var actor = new Actor() { Name = "Test", Biography = "TestBio", Gender = "f", ImagePath = "image/test.test" };

            // Act
            var response = await controller.Create(actor);
            var ActorResult = controller.Get(actor.Id);
          //  dbContext.Dispose();

            // Assert
            Assert.NotNull(response);
            Assert.NotNull(ActorResult);

        }
        [Fact]
        public async Task TestUpdate()
        {
            // Arrange
            var dbContext = DbContextMocker.GetActorDetailContext(nameof(TestDelete));
            var controller = new ActorsController(dbContext, _log);
            var actor = new Actor() { Id=0 , Name = "Test", Biography = "TestBio", Gender = "f", ImagePath = "image/test.test" };
            var ActorResultBefore = controller.Get(actor.Id);
            // Act
            var response = await controller.Update(actor.Id, actor);

            var ActorResultAfter = controller.Get(actor.Id);
            dbContext.Dispose();

            // Assert
            Assert.NotSame(ActorResultBefore,ActorResultAfter);
        }
        [Fact]
        public async Task TestGet()

        {
            // Arrange

            var dbContext = DbContextMocker.GetActorDetailContext(nameof(TestGet));
       

            var controller = new ActorsController(dbContext, _log);

            // Act

            var ActorResult = controller.Get();
            dbContext.Dispose();

            // Assert

            Assert.NotNull(ActorResult);


        }
    }
}






