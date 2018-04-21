using System.ComponentModel.DataAnnotations;

namespace Aurelia.Skeleton.NetCore.Razor.Models.AccountViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}