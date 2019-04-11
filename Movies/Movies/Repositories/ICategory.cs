using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Movies.Entities;

namespace Movies.Repositories
{
    public interface ICategory
    {

        Task<IEnumerable<Category>> GetList();

        Task<Category> GetCategory(int id);


    }
}
