using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Movies.Entities;

namespace Movies.Repositories
{
    public  interface IMovies
    {
        Task AddMovies(Entities.Movies movie);

        Task<IEnumerable<Entities.Movies>> GetList();

        Task<Entities.Movies> GetMovie(int id);

        Task EditMovie(Entities.Movies movie);

        Task DeleteMovie(int id);

        Task<IEnumerable<Entities.Movies>> Search(string name, string category);
    }
}
