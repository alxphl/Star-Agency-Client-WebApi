using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Models
{
    public class ActorDetailContext:DbContext
    {
        public ActorDetailContext(DbContextOptions<ActorDetailContext> options):base(options)
        {
            
        }


        public DbSet<Actor> Actors { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Photo> Photos { get; set; }

    }
}
