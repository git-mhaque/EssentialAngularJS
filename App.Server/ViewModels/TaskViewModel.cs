using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularArchitecture.ViewModels
{
    public class TaskViewModel
    {
        public int TaskID { get; set; }
        public string TaskName { get; set; }
        public DateTime DueDate { get; set; }
        public int ProjectID { get; set; }    
    }
}