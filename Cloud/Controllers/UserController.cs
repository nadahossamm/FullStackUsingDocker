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
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _db;

        public UserController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            return Ok(_db.Users.ToList());
        }

        [HttpGet]
        public IActionResult GetUserById(int id)
        {
            return Ok(new { User = _db.Users.FirstOrDefault(obj => obj.Id == id) });
        }

        [HttpGet]
        public IActionResult GetUserByEmail(string email)
        {
            return Ok(new { User = _db.Users.FirstOrDefault(obj => obj.Email == email) });
        }

        [HttpPost]
        public IActionResult post([FromBody] User user)
        {
            _db.Users.Add(user);

            _db.SaveChanges();

            return Ok();
        }

        [HttpPut]
        public IActionResult put([FromBody] User user)
        {
            if (!_db.Users.Any(obj => obj.Email == user.Email))
            {
                return BadRequest("Wrong email");
            }
            _db.Users.Update(user);
            _db.SaveChanges();

            return Ok();
        }

        [HttpDelete]
        public IActionResult delete(string email)
        {
            User user = _db.Users.FirstOrDefault(obj => obj.Email == email);
            if (user == null)
            {
                return BadRequest("Wrong email");
            }
            _db.Users.Remove(user);
            _db.SaveChanges();

            return Ok();
        }
    }
}