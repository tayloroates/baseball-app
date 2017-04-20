using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestieApp.Data;
using TestieApp.Models;

namespace TestieApp.Services
{
    public class ManageService
    {
        private ApplicationDbContext _db;

        public void PlayerController(ApplicationDbContext db)
        {
            _db = db;
        }
        public IEnumerable<Player> ListPlayer()
        {
            return _db.Players.ToList();
        }
        public Player FindPlayer(int id)
        {
            return _db.Players.First(p => p.Id == id);
        }
    }
}

