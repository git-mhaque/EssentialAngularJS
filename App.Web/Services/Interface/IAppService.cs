using AngularArchitecture.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularArchitecture.Services.Interface
{
    public interface IAppService
    {
        ResponseViewModel GetProjectList(); 
        ResponseViewModel SaveProject(ProjectViewModel vm);
        ResponseViewModel GetProject(int id);
    }
}
