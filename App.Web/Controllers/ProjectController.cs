using AngularArchitecture.Controllers;
using AngularArchitecture.Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace AngularArchitecture.Content
{
    public class ProjectController : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}