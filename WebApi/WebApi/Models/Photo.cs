using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Photo
    {
        [Key]
        public int Id { get; set; }

  //      [Display(Name = "Actor")]
  //      public int ActorId { get; set; }

  //      [ForeignKey("ActorId")]
   //     public virtual Actor Actor { get; set; }

        [Required]
        public string ImagePath { get; set; }
    }
}
