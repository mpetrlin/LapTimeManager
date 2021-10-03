using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TimesController : ControllerBase
    {
        private readonly DataContext _context;
        public TimesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("getapproved")]
        public async Task<ActionResult<IEnumerable<ReportedTime>>> GetApprovedTimes()
        {
            return await _context.AllTimes.OrderBy(x => x.Time)
                .Where(x => x.IsApproved == true).ToListAsync();
        }

        [HttpGet("getunapproved")]
        public async Task<ActionResult<IEnumerable<ReportedTime>>> GetUnapprovedTimes()
        {
            return await _context.AllTimes.OrderBy(x => x.Id)
                .Where(x => x.IsApproved != true).ToListAsync();
        }

        [HttpPost("addnew")]
        public async Task<ActionResult<ReportedTime>> AddNewTime(NewTimeDto newTimeDto)
        {
            var time = new ReportedTime
            {
                FirstName = newTimeDto.FirstName,
                LastName = newTimeDto.LastName,
                Time = DateTime.Parse("1900-01-01T" + newTimeDto.Time),
                IsApproved = false 
            };

            _context.AllTimes.Add(time);
            await _context.SaveChangesAsync();

            return time;
        }

        [HttpPatch("approve/{timeId}")]
        public async Task<ActionResult<ReportedTime>> ApproveTime(int timeId)
        {
            var entity = _context.AllTimes.Where(x => x.Id == timeId).FirstOrDefault();
            entity.IsApproved = true;

            await _context.SaveChangesAsync();

            return entity;
        }

        [HttpDelete("delete/{timeId}")]
        public async Task<ActionResult<ReportedTime>> DeleteTime(int timeId)
        {
            var entity = new ReportedTime { Id = timeId };
            _context.Entry(entity).State = EntityState.Deleted;
            
            await _context.SaveChangesAsync();

            return entity;
        }
    }
}