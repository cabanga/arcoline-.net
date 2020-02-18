using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Arcoline.Entidades
{
    public class Notice
    {
        [Key]
        public Guid IdNotice { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
        public DateTime Created_at { get; set; }
        public Guid IdCategory { get; set; }
        [ForeignKey("IdCategory")]
        public Category Category { get; set; }
    }
}
