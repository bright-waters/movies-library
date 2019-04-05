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
    public class RatingRepository: IRating
    {

        private readonly string connectionString = "Server=.;Database=Movies;Trusted_Connection=True;";

        public async Task<IEnumerable<Rating>> GetList()
        {
            string sql = "SELECT * FROM Rating;";

            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                return sqlConnection.Query<Rating>(sql);
            }
        }

        public async Task<Rating> GetRating(int id)
        {
            
            string strQuery = string.Format("SELECT Id, RatingValue FROM Rating where " +
                                            "Id={0}", id);

            ; using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();


                return sqlConnection.Query<Rating>(strQuery).Single();
            }
        }
    }
}
