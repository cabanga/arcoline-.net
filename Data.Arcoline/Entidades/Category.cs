using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Data.Arcoline.Entidades
{
    public class Category
    {
        [Key]
        public Guid IdCategory { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Color { get; set; }
        public virtual ICollection<Notice> Notices { get; set; }
    }
}
