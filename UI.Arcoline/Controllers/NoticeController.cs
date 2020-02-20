using Application.Arcoline;
using Data.Arcoline.Entidades;
using System;
using System.IO;
using System.Web;
using System.Web.Mvc;
using UI.Arcoline.Helper;

namespace UI.Arcoline.Controllers
{
    public class NoticeController : BaseController
    {
        private NoticeApp _notice = new NoticeApp();

        public ActionResult Index()
        {
            var response = _notice.GetNotices();
            return View(response.Objeto);
        }

        public ActionResult Details(Guid id)
        {
            var response = _notice.GetNotice(id);
            var notice = (Notice)response.Objeto;
            return View(notice);
        }

        public ActionResult Create()
        {
            ViewBag.Categories = new SelectList(_notice.CategoryCollection().ToArray(), "IdCategory", "Name");
            return View();
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Create(Notice newObject, HttpPostedFileBase upload)
        {
            if (upload != null)
            {
                var extension = Path.GetExtension(upload.FileName);
                var cvName = "NOTICE" + DateTime.Now.ToString("yymmssfff") + extension;
                upload.SaveAs(HttpContext.Server.MapPath("~/Assets/Storage/NoticesIMG/") + cvName);
                newObject.Img = cvName;
            }

            var response = _notice.CreateNotice(newObject);
            var notice = (Notice)response.Objeto;
            var IdCategory = newObject.IdCategory;

            if (response.Exito)
            {
                TempData["Ok"] = response.Mensagem;
            }
            else
            {
                TempData["Erro"] = response.Mensagem;
            }

            if (IdCategory != null)
            {
                return RedirectToAction("Details", "Category", new { id = IdCategory });
            }
            else
            {
                TempData["Ok"] = "Noticia publicada com sucesso";
                return RedirectToAction("Details", new { id = notice.IdNotice });
            }
        }

        public ActionResult Edit(Guid id)
        {
            ViewBag.Categories = new SelectList(_notice.CategoryCollection().ToArray(), "IdCategory", "Name");
            var response = _notice.GetNotice(id);
            var notice = (Notice)response.Objeto;
            return View(notice);
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Edit(Guid id, Notice editObject, HttpPostedFileBase upload)
        {
            try
            {
                if (upload != null)
                {
                    var res = _notice.GetNotice(id);
                    var notice_before_updated = (Notice)res.Objeto;

                    var pathImg = HttpContext.Server.MapPath("~/Assets/Storage/NoticesIMG/") + notice_before_updated.Img;
                    ArcolineHelper.DeleteFile(pathImg);

                    var extension = Path.GetExtension(upload.FileName);
                    var cvName = "NOTICE" + DateTime.Now.ToString("yymmssfff") + extension;
                    upload.SaveAs(HttpContext.Server.MapPath("~/Assets/Storage/NoticesIMG/") + cvName);
                    editObject.Img = cvName;
                }

                ViewBag.Categories = new SelectList(_notice.CategoryCollection(), "IdCategory", "Name");
                var response = _notice.UpdateNotice(id, editObject);
                var notice = (Notice)response.Objeto;

                if (response.Exito)
                {
                    TempData["Ok"] = response.Mensagem;
                }
                else
                {
                    TempData["Erro"] = response.Mensagem;
                }
                return RedirectToAction("Details", "Category", new { id = notice.IdCategory });
            }
            catch
            {
                return View();
            }

        }

        public ActionResult Delete(Guid id)
        {
            try
            {
                var res = _notice.GetNotice(id);
                var notice = (Notice)res.Objeto;
                var IdCategory = notice.IdCategory;
                var response = _notice.DeleteNotice(id);

                var pathImg = HttpContext.Server.MapPath("~/Assets/Storage/NoticesIMG/") + notice.Img;
                ArcolineHelper.DeleteFile(pathImg);

                if (response.Exito)
                {
                    TempData["Ok"] = response.Mensagem;
                }
                else
                {
                    TempData["Erro"] = response.Mensagem;
                }
                return RedirectToAction("Details", "Category", new { id = IdCategory });
            }
            catch
            {
                return View();
            }
        }

    }
}