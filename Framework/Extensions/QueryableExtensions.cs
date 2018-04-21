using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Extensions.Internal;

namespace Framework.Extensions
{
    public static class QueryableExtensions
    {
        public static async Task<HashSet<TSource>> ToHashSetAsync<TSource>(
            this IQueryable<TSource> source,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            var asyncEnumerator = source.AsAsyncEnumerable().GetEnumerator();

            var hashSet = new HashSet<TSource>();

            try
            {
                while (true)
                {
                    if (await asyncEnumerator.MoveNext(cancellationToken))
                    {
                        hashSet.Add(asyncEnumerator.Current);
                    }
                    else { break; }
                }
            }
            finally
            {
                if (asyncEnumerator != null)
                {
                    asyncEnumerator.Dispose();
                }
            }
            asyncEnumerator = null;
            return hashSet;
        }
    }
}