using System.Web.Mvc;
using System.Web.Security;
using MVC5RealWorld.Models.ViewModel;
using MVC5RealWorld.Models.EntityManager;
namespace MVC5RealWorld.Controllers
{
    public class AccountController : Controller
    {
        public ActionResult SignUp()
        {

            return View();
        }
        [HttpPost]
        public ActionResult SignUp(UserSignUpView USV)
        {
            if (ModelState.IsValid)
            {
                UserManager UM = new UserManager();
                if (!UM.IsLoginNameExist(USV.LoginName))
                {
                    UM.AddUserAccount(USV);
                    FormsAuthentication.SetAuthCookie(USV.FirstName, false);
                    return RedirectToAction("Welcome", "Home");
                }
                else
                    ModelState.AddModelError("", "Login Name already taken.");
            }
            return View();
        }

        public ActionResult SignIn()
        {
            return View();
        }

        public ActionResult SignIn(SignInViewModel SI)
        {
            if (ModelState.IsValid)
            {
                UserManager userManager = new UserManager();

                // Validar las credenciales del usuario
                if (userManager.ValidateUser(SI.Username, SI.Password))
                {
                    // Si las credenciales son correctas, redirigir al usuario
                    FormsAuthentication.SetAuthCookie(SI.Username, false);
                    return RedirectToAction("Welcome", "Home");
                }
                else
                {
                    // Agregar un error si las credenciales son incorrectas
                    ModelState.AddModelError("", "Nombre de usuario o contraseña incorrectos.");
                }
            }

            return View(SI); // Retornar el modelo SI para mostrar errores de validación
        }



        [Authorize]
        public ActionResult SignOut()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Index", "Home");
        }
    }
}