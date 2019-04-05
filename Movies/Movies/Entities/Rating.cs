using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Movies.Entities
{
    public class Rating
    {
        [Key]
        [ExplicitKey]
        [Display(Name = "Rating Id")]
        public int Id { get; set; }

        [Required]
        [Display(Name = "Rating")]
        public string RatingValue { get; set; }
    }
}
