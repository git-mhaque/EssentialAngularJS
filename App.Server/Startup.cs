using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularArchitecture.Startup))]
namespace AngularArchitecture
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
