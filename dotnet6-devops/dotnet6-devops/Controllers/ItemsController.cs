using Microsoft.AspNetCore.Mvc;

namespace dotnet6_devops.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        [HttpGet]
        public ActionResult<string[]> Get()
        {
            return new string[] { "Abhi 1", "Abhi 2", "Abhi 3" };
        }
    }
}
