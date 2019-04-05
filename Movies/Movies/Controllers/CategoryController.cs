using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Movies.Entities;
using Movies.Repositories;

namespace Movies.Controllers
{
    public class CategoryController:Controller
    {

        private readonly ICategory _category;

        public CategoryController(ICategory category)
        {
            _category = category;
        }

        [Route("getAllCategories")]
        [HttpGet]
        public async Task<IEnumerable<Category>> Get()
        {
            return await this._category.GetList();
        }

        [HttpGet("getCategory/{categoryId}")]
        public async Task<Category> Get(int categoryId)
        {
            return await this._category.GetCategory(categoryId);
        }
    }
}
