using Aurelia.Skeleton.NetCore.Razor.Data.Domain;
using Extenso.AspNetCore.OData;
using Extenso.Data.Entity;

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