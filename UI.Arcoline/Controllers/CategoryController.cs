﻿using Application.Arcoline;
using Data.Arcoline.Entidades;
using System;
using System.Web.Mvc;

namespace UI.Arcoline.Controllers
{
    public class CategoryController : BaseController
    {
        private CategoryApp _category = new CategoryApp();
        public ActionResult Index()
        {
            var response = _category.GetCategories();
            return View(response.Objeto);
        }

        public ActionResult Details(Guid id)
        {
            var response = _category.GetCategory(id);
            return View(response.Objeto);
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Category collection)
        {
            try
            {
                var response = _category.CreateCategory(collection);
                var category = (Category)response.Objeto;
                if (response.Exito)
                {
                    TempData["Ok"] = response.Mensagem;
                }
                else
                {
                    TempData["Erro"] = response.Mensagem;
                }

                return RedirectToAction("Details", new { id = category.IdCategory });
            }
            catch
            {
                return View();
            }
        }

        public ActionResult Edit(Guid id)
        {
            var response = _category.GetCategory(id);
            return View(response.Objeto);
        }

        [HttpPost]
        public ActionResult Edit(Guid id, Category collection)
        {
            try
            {
                var response = _category.UpdateCategory(id, collection);
                var category = (Category)response.Objeto;
                if (response.Exito)
                {
                    TempData["Ok"] = response.Mensagem;
                }
                else
                {
                    TempData["Erro"] = response.Mensagem;
                }
                return RedirectToAction("Details", new { id = category.IdCategory });
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
                var response = _category.DeleteCategory(id);
                if (response.Exito)
                {
                    TempData["Ok"] = response.Mensagem;
                }
                else
                {
                    TempData["Erro"] = response.Mensagem;
                }
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

    }
}
