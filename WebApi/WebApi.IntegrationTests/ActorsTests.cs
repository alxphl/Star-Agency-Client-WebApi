using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using WebApi.Models;
using Xunit;

namespace WebApi.IntegrationTests
{
   public class ActorsTests : IClassFixture<TestFixture<Startup>>
    {
        private readonly HttpClient Client;

        public ActorsTests(TestFixture<Startup> fixture)
        {
            Client = fixture.Client;
        }
/*
        [Fact]
        public async Task TestGet()
       {
           // Arrange
          var result= await Client.GetAsync("http://localhost:51624/api/Actors");
            var request = "http://localhost:51624/api/Actors";

            // Act
            var response = await Client.GetAsync(request);
   
            // Assert
            response.EnsureSuccessStatusCode();
     
        }*/

        /*   [Fact]
         public async Task Index_Get_ReturnsIndexHtmlPage_ListingEveryArticle()
         {
             // Act
             var response = await Client.GetAsync("/Actors");

             // Assert
             response.EnsureSuccessStatusCode();
             var responseString = await response.Content.ReadAsStringAsync();


                 Assert.IsType<Actor>(response);

         }

             [Fact]
             public async Task TestGetStockItemAsync()
             {
                 // Arrange
                 var request = "/api/Actors/Get/1";

                 // Act
                 var response = await Client.GetAsync(request);

                 // Assert
                 response.EnsureSuccessStatusCode();
             }

             [Fact]
             public async Task TestPost()
             {
                 // Arrange
                 var request = new
                 {
                     Url = "/api/v1/Actors/Update",
                     Body = new
                     {
                         Name = "Alexi",
                         Biography = "csharp",
                         Gender = "m",
                         ImagePath = "fadfasfas"
                     }
                 };

                 // Act
                 var response = await Client.PostAsync(request.Url, ContentHelper.GetStringContent(request.Body));
                 var value = await response.Content.ReadAsStringAsync();

                 // Assert
                 response.EnsureSuccessStatusCode();
             }

             //   [Fact]
             //    public async Task TestPutStockItemAsync()
             //    {
             // Arrange
             //       var request = new
             //            {
             //      Url = "/api/",
             //       Body = new
             //               {
             //       StockItemName = string.Format("USB anime flash drive - Vegeta {0}", Guid.NewGuid()),
             //       SupplierID = 12,
             //       Color = 3,
             //       UnitPrice = 39.00m
             //    }
             //    };

             // Act
             //     var response = await Client.PutAsync(request.Url, ContentHelper.GetStringContent(request.Body));

             // Assert
             //      response.EnsureSuccessStatusCode();
             //    }

       */
    }
}