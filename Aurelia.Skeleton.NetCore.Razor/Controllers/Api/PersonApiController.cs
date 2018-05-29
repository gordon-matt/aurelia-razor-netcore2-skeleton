using Aurelia.Skeleton.NetCore.Razor.Data.Domain;
using Extenso.Data.Entity;
using Extenso.Web.OData;

namespace Aurelia.Skeleton.NetCore.Razor.Controllers.Api
{
    public class PersonApiController : GenericODataController<Person, int>
    {
        public PersonApiController(IRepository<Person> repository)
            : base(repository)
        {
        }

        protected override int GetId(Person entity)
        {
            return entity.Id;
        }

        protected override void SetNewId(Person entity)
        {
        }
    }
}