using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Movies.Entities
{
    public class Category
    {
        [Key]
        [ExplicitKey]
        [Display(Name = "Category Id")]
        public int Id { get; set; }

        [Required]
        [Display(Name = "Category")]
        [StringLength(25, ErrorMessage = "Category should be 1 to 25 char in length")]
        public string CategoryValue { get; set; }

     
    }
}
