using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Actor
    {   [Key]
        public  int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(1000)")]
        public string Biography { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(1)")]
        public string Gender { get; set; }

        public string ImagePath { get; set; }
   
    }
}
