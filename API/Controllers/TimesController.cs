using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
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
            return await _context.AllTimes.OrderBy(x => x.Time).Where(x => x.IsApproved == true).ToListAsync();
        }

        [HttpGet("getunapproved")]
        public async Task<ActionResult<IEnumerable<ReportedTime>>> GetUnapprovedTimes()
        {
            return await _context.AllTimes.OrderBy(x => x.Id).Where(x => x.IsApproved != true).ToListAsync();
        }
    }
}