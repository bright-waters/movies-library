using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Movies.Entities
{
    public class Movies
    {
        [Key]
        [ExplicitKey]
        [Display(Name = "Movie Id")]
        public int Id { get; set; }

        [Required]
        [Display(Name = "Name")]
        [StringLength(25, ErrorMessage = "Name should be 1 to 25 char in length")]
        public string Name { get; set; }

        [Required]
        [Display(Name = "Category")]
        [StringLength(50, ErrorMessage = "Category should be 1 to 50 char in length")]
        public string Category { get; set; }

        [Required]
        [Display(Name = "Rating")]
        public int Rating { get; set; }

    }
}
