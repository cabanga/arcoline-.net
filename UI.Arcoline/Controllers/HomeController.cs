using Application.Arcoline;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace UI.Arcoline.Controllers
{
    public class HomeController : Controller
    {
        private NoticeApp _notice = new NoticeApp();
        public ActionResult Index()
        {
            var response = _notice.GetNotices();
            ViewBag.Noticies = response.Objeto;
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}