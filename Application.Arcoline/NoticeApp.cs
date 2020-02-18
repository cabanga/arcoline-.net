using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using Data.Arcoline.Entidades;

namespace Application.Arcoline
{
    public class NoticeApp : App
    {
        public AppResult GetNotices()
        {
            var result = new AppResult();
            try
            {
                var response = db.Notices.Include(x => x.Category).ToList();
                return result.Good(response);
            }
            catch (Exception e)
            {
                result.Bad(e.Message);
                return result.Bad("Erro ao procesar operação, tente novamente.");
            }
        }

        public AppResult GetNotice(Guid ParamId)
        {
            var res = new AppResult();
            try
            {
                var response = db.Notices.Include(x => x.Category).FirstOrDefault(x => x.IdNotice == ParamId);
                return res.Good(response);
            }
            catch (Exception e)
            {
                return res.Bad("Erro ao procesar operação, tente novamente. " + e);
            }
        }

        public AppResult CreateNotice(Notice new_object)
        {
            var result = new AppResult();
            try
            {
                Notice _notice = new Notice
                {
                    IdNotice        = Guid.NewGuid(),
                    Title           = new_object.Title,
                    Content         = new_object.Content,
                    FullDescription = new_object.FullDescription,
                    Status          = true,
                    Created_at      = DateTime.Now,
                    IdCategory      = new_object.IdCategory,
                };
                var response = db.Notices.Add(_notice);
                db.SaveChanges();
                string msg = "Noticia publicada com sucesso";
                return result.Good(msg, _notice);
            }
            catch (Exception e)
            {
                result.Bad(e.Message);
                return result.Bad("Erro ao procesar operação, tente novamente.");
            }
        }

        public AppResult UpdateNotice(Guid ParamId, Notice edit_object)
        {
            var result = new AppResult();
            try
            {
                var response = db.Notices.FirstOrDefault(x => x.IdNotice == ParamId);

                if (response != null)
                {
                    response.Title = edit_object.Title;
                    response.Content = edit_object.Content;
                    response.FullDescription = edit_object.FullDescription;
                    response.Status = true;
                    response.IdCategory = edit_object.IdCategory;

                    db.SaveChanges();
                }
                string msg = "Noticia Actualizada com sucesso";
                return result.Good(msg, response);
            }
            catch (Exception e)
            {
                return result.Bad("Erro ao procesar operação, tente novamente. " + e);
            }
        }

        public AppResult DeleteNotice(Guid ParamId)
        {
            var result = new AppResult();
            try
            {
                var response = db.Notices.FirstOrDefault(x => x.IdNotice == ParamId);
                if (response != null)
                {
                    db.Notices.Remove(response);
                    db.SaveChanges();
                }
                var msg = "Noticia removida com sucesso";
                return result.Good(msg);
            }
            catch (Exception e)
            {
                return result.Bad("Erro ao procesar operação, tente novamente. " + e);
            }
        }

        public List<Category> CategoryCollection()
        {
            var response = db.Categories.ToList();
            return response;
        }
    }
}
