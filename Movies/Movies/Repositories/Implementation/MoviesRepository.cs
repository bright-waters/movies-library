using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Controller;

namespace Movies.Repositories.Implementation
{
    public class MoviesRepository : IMovies
    {
        private readonly string connectionString = "Server=.;Database=Movies;Trusted_Connection=True;";
       

        public async Task AddMovies(Entities.Movies movie)
        {

            var sql = "INSERT INTO Movies([Name], [Category],[Rating]) Values(@Name,@Category,@Rating);";

            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
            
                await sqlConnection.ExecuteAsync(sql,new
                    {
                        movie.Name,
                        movie.Category,
                        movie.Rating
                    });
            }
        }

        public async Task DeleteMovie(int id)
        {

            string sql = "DELETE FROM Movies WHERE Id =" +id +";";
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                await sqlConnection.ExecuteAsync(
                    sql, new {id});
            }
        }

        public async Task EditMovie(Entities.Movies movie)
        {

            string sql = "UPDATE Movies SET Name = @Name, Category =@Category, Rating= @Rating WHERE Id =" +movie.Id+";";
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();

                await sqlConnection.ExecuteAsync(
                    sql, new
                    {
                        movie.Id,
                        movie.Name,
                        movie.Category,
                        movie.Rating
                    }
                   );
            }
        }

        public async Task<IEnumerable<Entities.Movies>> GetList()
        {
            string sql = "SELECT * FROM Movies;";

            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                return  sqlConnection.Query<Entities.Movies>(sql);
            }
        }

        public async Task<Entities.Movies> GetMovie(int id)
        {

            string sql = "SELECT * FROM Movies WHERE Id = " + id ;

;            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();         
                return sqlConnection.Query<Entities.Movies>(sql).First();
            }
        }


        public async Task<IEnumerable<Entities.Movies>> Search(string name, string category)
        {
            string sql = "";
            if (name != null && (category == "no value" || category == null ))
            {
                 sql ="SELECT * FROM Movies WHERE Name = '" + name + "'";

                using (var sqlConnection = new SqlConnection(connectionString))
                {
                    await sqlConnection.OpenAsync();
                    return sqlConnection.Query<Entities.Movies>(sql);
                }
            }
           else if ((name == "no value"|| name == null) && category != null)
            {
                 sql = "SELECT * FROM Movies WHERE Category = '" + category+ "'" ;

                using (var sqlConnection = new SqlConnection(connectionString))
                {
                    await sqlConnection.OpenAsync();
                    return sqlConnection.Query<Entities.Movies>(sql);
                }
            }
            else
            {
                sql = "SELECT * FROM Movies WHERE Name = '" +  name + "' AND Category = '" + category + "'";

                using (var sqlConnection = new SqlConnection(connectionString))
                {
                    await sqlConnection.OpenAsync();
                    return sqlConnection.Query<Entities.Movies>(sql);
                }
            }
        }

    }

}
