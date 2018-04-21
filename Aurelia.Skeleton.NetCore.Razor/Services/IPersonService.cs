using Aurelia.Skeleton.NetCore.Razor.Data.Domain;
using Framework.Data;
using Framework.Services;

namespace Aurelia.Skeleton.NetCore.Razor.Services
{
    public interface IPersonService : IGenericDataService<Person>
    {
    }

    public class PersonService : GenericDataService<Person>, IPersonService
    {
        public PersonService(IRepository<Person> repository)
            : base(repository)
        {
        }
    }
}