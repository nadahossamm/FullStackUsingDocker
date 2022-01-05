using Cloud.Data;
using Cloud.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cloud.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    [EnableCors]
    public class RestaurantController : ControllerBase
    {
        private readonly AppDbContext _db;

        public RestaurantController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult GetAllRestaurants()
        {
            return Ok(_db.Restaurants.ToList());
        }

        [HttpGet]
        public IActionResult GetRestaurantById(int id)
        {
            return Ok(new { Restaurant = _db.Restaurants.FirstOrDefault(obj => obj.Id == id) });
        }

        [HttpGet]
        public IActionResult GetRestaurantByType(string type)
        {
            return Ok(_db.Restaurants.Where(obj => obj.Type == type).ToList());
        }

        [HttpGet]
        public IActionResult GetRestaurantByLocation(string location)
        {
            return Ok(_db.Restaurants.Where(obj => obj.Location == location).ToList());
        }

        [HttpGet]
        public IActionResult GetRestaurantByLocationAndType(string location, string type)
        {
            return Ok(_db.Restaurants.Where(obj => obj.Type == type && obj.Location == location).ToList());
        }

        [HttpPost]
        public IActionResult post([FromBody] Restaurant restaurant)
        {
            _db.Restaurants.Add(restaurant);

            _db.SaveChanges();

            return Ok();
        }

        [HttpPut]
        public IActionResult put([FromBody] Restaurant restaurant)
        {
            if (!_db.Restaurants.Any(obj => obj.Id == restaurant.Id))
            {
                return BadRequest("Wrong id");
            }

            _db.Restaurants.Update(restaurant);
            _db.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        public IActionResult delete(int id)
        {
            Restaurant restaurant = _db.Restaurants.FirstOrDefault(obj => obj.Id == id);
            if (restaurant == null)
            {
                return BadRequest("Wrong id");
            }
            _db.Restaurants.Remove(restaurant);
            _db.SaveChanges();

            return Ok();
        }
    }
}