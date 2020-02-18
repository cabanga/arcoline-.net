using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UI.Arcoline.Helper
{
    public class ArcolineHelper
    {
        public static IHtmlString ModalConfirmation(string controller, string action, string id, string idModal)
        {
            var response = String.Format(

            "<div class='modal fade' id='{3}' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>" +
                "<div class='modal-dialog modal-dialog-centered' role='document'>" +
                    "<div class='modal-content'>" +
                        "<div class='modal-body' style='padding: 50px 1rem;'>" +
                            "<div class='row'>" +
                                "<div class='col-12 text-center'>" +
                                    "<i class='fas fa-exclamation swal2-warning'></i>" +
                                "</div>" +
                            "</div>" +
                            "<div class='row'>" +
                                "<div class='col-12 text-center'>" +
                                    "<h2 class='swal2-title' id='swal2-title' style='display: flex;'>Tem certeza?</h2>" +

                                    "<a href = '/{0}/{1}/{2}' class='btn btn-danger'>" +
                                        "<i class='si si-check'></i>Sim, Eliminar" +
                                    "</a>" +

                                    "<button type='button' class='btn btn-secondary' data-dismiss='modal' style='margin-left: .5rem!important;'>Cancelar</button>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>", controller, action, id, idModal);

            return new HtmlString(response);
        }


        public static IHtmlString ConfirmationDelete(string controller, string action, string id)
        {
            var response = String.Format(
            "<a href = '/{0}/{1}/{2}' class='btn btn-danger'>" +
                "<i class='si si-check'></i>Sim, Eliminar" +
            "</a>", controller, action, id);

            return new HtmlString(response);
        }
    }
}