using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActorsController : ControllerBase
    {
        private readonly ActorDetailContext _context;

        public ActorsController(ActorDetailContext context)
        {
            _context = context;
        }

        // GET: api/ActorDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Actor>>> GetPaymentDetails()
        {
            return await _context.Actors.ToListAsync();
        }

        // GET: api/ActorDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Actor>> GetActor(int id)
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
        public async Task<IActionResult> PutActor(int id, Actor actorDetail)
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
        public async Task<ActionResult<Actor>> PostActor(Actor actorDetail)
        {
            _context.Actors.Add(actorDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetActor", new { id = actorDetail.Id }, actorDetail);
        }

        // DELETE: api/ActorDetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Actor>> DeleteActor(int id)
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
