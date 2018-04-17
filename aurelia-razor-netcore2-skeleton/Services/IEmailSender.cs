using System.Threading.Tasks;

namespace aurelia_razor_netcore2_skeleton.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}