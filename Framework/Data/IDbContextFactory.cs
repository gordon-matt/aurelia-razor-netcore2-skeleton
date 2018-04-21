using Microsoft.EntityFrameworkCore;

namespace Framework.Data
{
    public interface IDbContextFactory
    {
        DbContext GetContext();
    }
}