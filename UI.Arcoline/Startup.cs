using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(UI.Arcoline.Startup))]
namespace UI.Arcoline
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
