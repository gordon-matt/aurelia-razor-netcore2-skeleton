using System.ComponentModel.DataAnnotations;

namespace aurelia_razor_netcore2_skeleton.Models.AccountViewModels
{
    public class ExternalLoginViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}