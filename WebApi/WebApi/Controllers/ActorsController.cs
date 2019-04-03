using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActorsController : ControllerBase
    {
        private readonly ILogger<ActorsController> _log;
        private readonly ActorDetailContext _context;

        public ActorsController(ActorDetailContext context,ILogger<ActorsController> log)
        {
            _context = context;
            _log = log;
        }

        // GET: api/ActorDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Actor>>> Get()
        {
            return await _context.Actors.ToListAsync();
        }

        // GET: api/ActorDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Actor>> Get(int id)
        {
            var actorDetail = await _context.Actors.FindAsync(id);

            if (actorDetail == null)
            {
                return NotFound();
            }

            return actorDetail;
        }

        // PUT: api/ActorDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Actor actorDetail)
        {
            if (id != actorDetail.Id)
            {
                return BadRequest();
            }

            _context.Entry(actorDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ActorDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ActorDetails
        [HttpPost]
        public async Task<ActionResult<Actor>> Create(Actor actorDetail)
        {
            _context.Actors.Add(actorDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Get", new { id = actorDetail.Id }, actorDetail);
        }

        // DELETE: api/ActorDetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Actor>> Delete(int id)
        {
            var actorDetail = await _context.Actors.FindAsync(id);
            if (actorDetail == null)
            {
                return NotFound();
            }

            _context.Actors.Remove(actorDetail);
            await _context.SaveChangesAsync();

            return actorDetail;
        }

        private bool ActorDetailExists(int id)
        {
            return _context.Actors.Any(e => e.Id == id);
        }
    }
}
