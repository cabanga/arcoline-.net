﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace UI.Arcoline.Controllers
{
    public class DashboardController : BaseController
    {
        // GET: Dashboard
        public ActionResult Index()
        {
            return View();
        }
    }
}