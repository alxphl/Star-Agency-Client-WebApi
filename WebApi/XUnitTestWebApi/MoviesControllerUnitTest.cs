using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Controllers;
using WebApi.Models;
using Xunit;

namespace WebApi.xUnitTests
{
    public class MoviesControllerUnitTest
    {
    [Fact]
        public async Task TestGetNotFound()

        {
            // Arrange

            var dbContext = DbContextMocker.GetActorDetailContext(nameof(TestGetNotFound));
            var controller = new MoviesController(dbContext);
            var Id = 5000;
            // Act

            var notFoundResult = controller.GetMovie(Id);
            dbContext.Dispose();

            // Assert

            Assert.IsType<NotFoundResult>(notFoundResult.Result.Result);

            
        }
        [Fact]
        public async Task TestGetMovieById()

        {
            // Arrange

            var dbContext = DbContextMocker.GetActorDetailContext(nameof(TestGetMovieById));
            var controller = new MoviesController(dbContext);

            // Act

            var MovieResult = controller.GetMovie(1);
            dbContext.Dispose();

            // Assert

            Assert.IsType<Movie>(MovieResult.Result.Value);


        }
        [Fact]
        public async Task TestMovieGet()

        {
            // Arrange

            var dbContext = DbContextMocker.GetActorDetailContext(nameof(TestMovieGet));
            var controller = new MoviesController(dbContext);

            // Act

            var MovieResult = controller.GetMovies();
            dbContext.Dispose();

            // Assert

            Assert.NotNull(MovieResult);


        }
        [Fact]
        public async Task TestMovieDelete()
        {
            // Arrange
            var dbContext = DbContextMocker.GetActorDetailContext(nameof(TestMovieDelete));
            var controller = new MoviesController(dbContext);
            var id = 5;

            // Act
            var response = await controller.DeleteMovie(id);

            dbContext.Dispose();

            // Assert
            Assert.IsType<Movie>(response.Value);
        }
        [Fact]
        public async Task TestMovieCreate()
        {
            // Arrange
            var dbContext = DbContextMocker.GetActorDetailContext(nameof(TestMovieDelete));
            var controller = new MoviesController(dbContext);
            var movie = new Movie() { Name = "Test", ActorId =5,Link = "movies/Test/TEstMovie",Year = 2020};

            // Act
            var response = await controller.PostMovie(movie);
            var MovieResult = controller.GetMovie(movie.Id);
            dbContext.Dispose();

            // Assert
            Assert.NotNull(response);
            Assert.NotNull(MovieResult);

           
        }
        [Fact]
        public async Task TestMovieUpdate()
        {
            // Arrange
            var dbContext = DbContextMocker.GetActorDetailContext(nameof(TestMovieUpdate));
            var controller = new MoviesController(dbContext);
            var movie = new Movie() {Id = 0,Name = "Test", ActorId = 5, Link = "movies/Test/TEstMovie", Year = 2020 };
            var MovieResultBefore = controller.GetMovie(movie.Id);
            // Act
            var response = await controller.PutMovie(movie.Id, movie);
        
            var MovieResultAfter = controller.GetMovie(movie.Id);
            dbContext.Dispose();

            // Assert
            Assert.NotSame(MovieResultBefore, MovieResultAfter);
        }
    }
}
