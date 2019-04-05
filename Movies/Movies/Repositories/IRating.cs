using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Movies.Entities;

namespace Movies.Repositories
{
    public interface IRating
    {
        Task<IEnumerable<Rating>> GetList();

        Task<Rating> GetRating(int id);
    }
}
