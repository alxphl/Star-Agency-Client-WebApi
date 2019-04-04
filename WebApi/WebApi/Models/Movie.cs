using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Movie
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Link { get; set; }

        [Display(Name = "Actor")]
        public int ActorId { get; set; }

        [ForeignKey("ActorId")]
        public virtual Actor Actor { get; set; }

        [Required]
        public int Year { get; set; }

        [Required]
        public string Name { get; set; }
    }
}
