using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using Movies.Entities;


namespace Movies.Repositories.Implementation
{
    public class CategoryRepository:ICategory
    {
        private readonly string connectionString = "Server=.;Database=Movies;Trusted_Connection=True;";

        public async Task<IEnumerable<Category>> GetList()
        {
            string sql = "SELECT * FROM Category;";

            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                return sqlConnection.Query<Category>(sql);
            }
        }

        public async Task<Category> GetCategory(int id)
        {

        
            string strQuery = string.Format("SELECT Id, CategoryValue FROM Category WHERE " +
                                            "Id={0}", id);

            ; using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();


                return sqlConnection.Query<Category>(strQuery).Single();
            }
        }
    }
}
