using System;
using System.Collections.Generic;
using System.Text;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using WebApi.Controllers;
using WebApi.Models;
using Xunit;

namespace XUnitTestWebApi
{
    public class UnitTestController
    {
        private readonly ActorDetailContext context;
        private readonly ILogger<ActorsController> log;
        public static DbContextOptions<ActorDetailContext> dbContextOptions { get; }


        static UnitTestController()
        {
            dbContextOptions = new DbContextOptionsBuilder<ActorDetailContext>()

                .Options;


        }
        [Fact]
        public async void Task_GetACtorById_Return_OkResult()
        {
            //Arrange  
            var controller = new ActorsController(context, log);
            var ActorId = 2;

            //Act  
            var data = await controller.Get(ActorId);

            //Assert  
            Assert.IsType<OkObjectResult>(data);
        }


        [Fact]
        public async void Task_Add_ValidData_Return_OkResult()
        {
            //Arrange  
            var controller = new ActorsController(context, log);
            var actor = new Actor() { Name = "Tommy23", Biography = "just Tommy", Gender = "m" };

            //Act  
            var data = await controller.Create(actor);

            //Assert  
            Assert.IsType<OkObjectResult>(data);
        }

        [Fact]
        public async void Task_Add_InvalidData_Return_BadRequest()
        {
            //Arrange  
            var controller = new ActorsController(context, log);
            Actor actor = new Actor() { Biography = "just Tommy", Gender = "m" };

            //Act              
            var data = await controller.Create(actor);

            //Assert  
            Assert.IsType<BadRequestResult>(data);
        }



    }
}

