using Data.Arcoline;

namespace Application.Arcoline
{
    public abstract class App
    {
        public DataContext db = new DataContext();
        public class AppResult
        {
            public bool Exito { get; set; }
            public string Mensagem { get; set; }
            public object Objeto { get; set; }
            public AppResult Good(string msg, object obj = null)
            {
                Exito = true;
                Mensagem = msg;
                if (obj != null)
                {
                    Objeto = obj;
                }
                return this;
            }

            public AppResult Bad(string msg, object obj = null)
            {
                Exito = false;
                Mensagem = msg;
                if (obj != null)
                {
                    Objeto = obj;
                }
                return this;
            }

            public AppResult Good(object obj)
            {
                Exito = true;
                if (obj != null)
                {
                    Objeto = obj;
                }
                return this;
            }

            public AppResult Bad(object obj)
            {
                Exito = false;
                if (obj != null)
                {
                    Objeto = obj;
                }
                return this;
            }

        }

        public enum TipoLog
        {
            Exito = 1,
            Info,
            Alerta,
            Erro,
            Fatal
        }

    }
}
