using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Movies.Repositories;
using Movies.Repositories.Implementation;

namespace Movies.Controllers
{
  
    public class MoviesController : Controller
    {

        private readonly IMovies _movies;

        public MoviesController(IMovies movies)
        {
            _movies = movies;
        }

        [Route("getAllMovies")]
        [HttpGet]
        public  async  Task<IEnumerable<Entities.Movies>> Get()
        {
            return await this._movies.GetList();
        }

        [Route("search/{name}/{category}")]
        [HttpGet]
        public async Task<IEnumerable<Entities.Movies>> Search(string name, string category)
        {
            return await this._movies.Search(name , category);
        }

        [Route("getMovie/{movieId}")]
        [HttpGet]
        public async Task<Entities.Movies> Get(int movieId)
        {
            return await this._movies.GetMovie(movieId);
        }


        [Route("postMovie")]
        [HttpPost]
        public async Task Post([FromBody]Entities.Movies movie)
        {
          await this._movies.AddMovies(movie);
        }


        [Route("putMovie")]
        [HttpPut]
        public async Task Put([FromBody]Entities.Movies movie)
        {
            await this._movies.EditMovie(movie);
        }

        [Route("deleteMovie/{movieId}")]
        [HttpDelete]
        public async  Task Delete(int movieId)
        {
           await this._movies.DeleteMovie(movieId);
        }

    }
}
