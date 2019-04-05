using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Movies.Entities;
using Movies.Repositories;

namespace Movies.Controllers
{
   
    public class RatingController:Controller
    {
        private readonly IRating _rating;

        public RatingController(IRating rating)
        {
            _rating = rating;
        }


        [Route("getAllRatings")]
        [HttpGet]
        public async Task<IEnumerable<Rating>> Get()
        {
            return await  this._rating.GetList();
        }


        [Route("getRating/{ratingId}")]
        [HttpGet]
        public async Task<Rating> Get(int ratingId)
        {
            return await this._rating.GetRating(ratingId);
        }
    }
}
