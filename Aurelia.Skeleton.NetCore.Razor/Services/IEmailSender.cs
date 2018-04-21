using System.Threading.Tasks;

namespace Aurelia.Skeleton.NetCore.Razor.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}