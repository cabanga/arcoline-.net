using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Arcoline.Entidades
{
    public class Categoria
    {
        [Key]
        public Guid IdCategoria { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
    }
}
