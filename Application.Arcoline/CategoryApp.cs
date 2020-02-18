using Data.Arcoline.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Arcoline
{
    public class CategoryApp : App
    {
        public AppResult GetCategories()
        {
            var result = new AppResult();
            try
            {
                var response = db.Categories.ToList();
                return result.Good(response);
            }
            catch (Exception e)
            {
                result.Bad(e.Message);
                return result.Bad("Erro ao procesar operação, tente novamente.");
            }
        }

        public AppResult GetCategory(Guid ParamId)
        {
            var res = new AppResult();
            try
            {
                var resposne = db.Categories.FirstOrDefault(x => x.IdCategory == ParamId);
                return res.Good(resposne);
            }
            catch (Exception e)
            {
                return res.Bad("Erro ao procesar operação, tente novamente. " + e);
            }
        }

        public AppResult CreateCategory(Category new_object)
        {
            var result = new AppResult();
            try
            {
                Category _category = new Category
                {
                    IdCategory  = Guid.NewGuid(),
                    Name        = new_object.Name,
                    Description = new_object.Description,
                    Color       = new_object.Color,
                };
                var response = db.Categories.Add(_category);
                db.SaveChanges();
                string msg = "Categoria cadastrada com sucesso";
                return result.Good(msg, _category);
            }
            catch (Exception e)
            {
                result.Bad(e.Message);
                return result.Bad("Erro ao procesar operação, tente novamente.");
            }
        }

        public AppResult UpdateCategory(Guid ParamId, Category edit_object)
        {
            var result = new AppResult();
            try
            {
                var response = db.Categories.FirstOrDefault(x => x.IdCategory == ParamId);
                if (response != null)
                {
                    response.Name = edit_object.Name;
                    response.Description = edit_object.Description;
                    response.Color = edit_object.Color;
                    db.SaveChanges();
                }
                string msg = "Categoria Actualizada com sucesso";
                return result.Good(msg, response);
            }
            catch (Exception e)
            {
                return result.Bad("Erro ao procesar operação, tente novamente. " + e);
            }
        }

        public AppResult DeleteCategory(Guid ParamId)
        {
            var result = new AppResult();
            try
            {
                var response = db.Categories.FirstOrDefault(x => x.IdCategory == ParamId);
                if (response != null)
                {
                    db.Categories.Remove(response);
                    db.SaveChanges();
                }
                var msg = "Categoria removida com sucesso";
                return result.Good(msg);
            }
            catch (Exception e)
            {
                return result.Bad("Erro ao procesar operação, tente novamente. " + e);
            }
        }


    }
}
