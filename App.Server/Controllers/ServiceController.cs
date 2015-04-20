using AngularArchitecture.Controllers;
using AngularArchitecture.Services.Interface;
using AngularArchitecture.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularArchitecture.Content
{
    public class ServiceController : BaseController
    {

        private IAppService _service;

        public ServiceController(IAppService service)
        {
            _service = service;
        }
        
        public JsonResult GetProjectList()
        {
            return Json(_service.GetProjectList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetProjectByID(int projectID)
        {
            return Json(_service.GetProject(projectID), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult SaveProject(ProjectViewModel projectVM)
        {
            return Json(_service.SaveProject(projectVM), JsonRequestBehavior.AllowGet);
        }



    }
}