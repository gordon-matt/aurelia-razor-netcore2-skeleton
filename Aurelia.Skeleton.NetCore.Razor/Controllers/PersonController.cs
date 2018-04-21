using System;
using System.Collections.Generic;
using Aurelia.Skeleton.NetCore.Razor.Data.Domain;
using Aurelia.Skeleton.NetCore.Razor.Services;
using Microsoft.AspNetCore.Mvc;

namespace Aurelia.Skeleton.NetCore.Razor.Controllers
{
    [Route("people")]
    public class PersonController : Controller
    {
        private readonly IPersonService personService;

        public PersonController(IPersonService personService)
        {
            this.personService = personService;
        }

        [Route("index")]
        public IActionResult Index()
        {
            if (personService.Count() == 0)
            {
                // Populate for testing purposes

                var people = new List<Person>();

                people.Add(new Person { FamilyName = "Jordan", GivenNames = "Michael", DateOfBirth = new DateTime(1963, 2, 17) });
                people.Add(new Person { FamilyName = "Johnson", GivenNames = "Dwayne", DateOfBirth = new DateTime(1972, 5, 2) });
                people.Add(new Person { FamilyName = "Froning", GivenNames = "Rich", DateOfBirth = new DateTime(1987, 7, 21) });

                personService.Insert(people);
            }

            return PartialView();
        }
    }
}